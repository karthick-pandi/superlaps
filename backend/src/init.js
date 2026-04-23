const pool = require("./config/db");

const createTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2),
        image VARCHAR(255),
        sku VARCHAR(100) UNIQUE,
        stock INT DEFAULT 0
      );
    `);
    await pool.query(`
      ALTER TABLE products ADD COLUMN IF NOT EXISTS stock INT DEFAULT 0;
    `);
    await pool.query(`
      CREATE TABLE IF NOT EXISTS reviews (
        id SERIAL PRIMARY KEY,
        product_id INT REFERENCES products(id),
        rating INT CHECK (rating >= 1 AND rating <= 5),
        comment TEXT,
        user_name VARCHAR(255)
      );
    `);
    console.log("Tables created/updated successfully");
  } catch (err) {
    console.error("Error creating tables:", err);
  } finally {
    pool.end();
  }
};

createTable();