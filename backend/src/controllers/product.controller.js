const pool = require("../config/db");

// Search with pagination
exports.searchProducts = async (req, res) => {
  const { q = "", page = 1 } = req.query;
  const limit = 10;
  const offset = (page - 1) * limit;

  const result = await pool.query(
    `SELECT id, name, description, price, image, sku, stock FROM products 
     WHERE name ILIKE $1 
     LIMIT $2 OFFSET $3`,
    [`%${q}%`, limit, offset]
  );

  res.json(result.rows);
};

// Product Detail
exports.getProduct = async (req, res) => {
  const { id } = req.params;

  const productResult = await pool.query(
    "SELECT id, name, description, price, image, sku, stock FROM products WHERE id=$1",
    [id]
  );

  const reviewsResult = await pool.query(
    "SELECT rating, comment, user_name FROM reviews WHERE product_id=$1",
    [id]
  );

  const product = productResult.rows[0];
  if (product) {
    product.reviews = reviewsResult.rows;
    product.availability = product.stock > 0 ? "In Stock" : "Out of Stock";
  }

  res.json(product);
};

// Create
exports.createProduct = async (req, res) => {
  const { name, description, price, image, sku, stock = 0 } = req.body;

  const result = await pool.query(
    `INSERT INTO products (name, description, price, image, sku, stock)
     VALUES ($1,$2,$3,$4,$5,$6) RETURNING id, name, description, price, image, sku, stock`,
    [name, description, price, image, sku, stock]
  );

  res.json(result.rows[0]);
};

// Update
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;

  const result = await pool.query(
    `UPDATE products SET name=$1, price=$2, stock=$3 WHERE id=$4 RETURNING id, name, description, price, image, sku, stock`,
    [name, price, stock, id]
  );

  res.json(result.rows[0]);
};

// Delete
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  await pool.query("DELETE FROM products WHERE id=$1", [id]);

  res.json({ message: "Deleted" });
};