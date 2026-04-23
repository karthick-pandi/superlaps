# ShopHub - E-Commerce Application

A full-stack e-commerce platform built with **Node.js/Express** backend and **React** frontend.

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)

---

## ✨ Features

### User Features
- 🔍 Search products by name
- 📄 View product details with reviews and ratings
- 📦 Check product availability and stock status
- ⭐ View product reviews and ratings

### Admin Features
- ➕ Create new products
- ✏️ Edit existing products
- 🗑️ Delete products
- 📊 Manage product inventory
- 📈 View all products in dashboard

---

## 🛠 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **Swagger** - API documentation
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Frontend
- **React** - UI library
- **React Router** - Routing
- **Axios** - HTTP client
- **CSS3** - Styling

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **PostgreSQL** (v12 or higher) - [Download](https://www.postgresql.org/)
- **Git** - [Download](https://git-scm.com/)

---

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd super
```

### 2. Backend Setup

Navigate to the backend directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Create `.env` file in the `backend` directory with the following:
```env
PORT=5000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=ecommerce
DB_PORT=5432
```

Initialize the database:
```bash
node src/init.js
```

### 3. Frontend Setup

Navigate to the frontend directory:
```bash
cd ../frontend
```

Install dependencies:
```bash
npm install
```

Create `.env` file in the `frontend` directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

---

## ▶️ Running the Project

### Start Backend Server
```bash
cd backend
npm start
```
The server will run on `http://localhost:5000`

### Start Frontend Application (in a new terminal)
```bash
cd frontend
npm start
```
The application will open on `http://localhost:3000`

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication
Currently, the API has no authentication. Ensure proper security measures before production deployment.

---

## 🔌 API Endpoints

### Products

#### 1. Search Products
```
GET /products?q={search_term}&page={page_number}
```

**Query Parameters:**
- `q` (string, optional) - Search keyword
- `page` (number, optional) - Page number (default: 1)

**Response:**
```json
[
  {
    "id": 1,
    "name": "Product Name",
    "description": "Product description",
    "price": 999.99,
    "image": "https://example.com/image.jpg",
    "sku": "SKU001",
    "stock": 50
  }
]
```

**Example Request:**
```bash
curl http://localhost:5000/api/products?q=laptop&page=1
```

---

#### 2. Get Product Details
```
GET /products/{id}
```

**Path Parameters:**
- `id` (number) - Product ID

**Response:**
```json
{
  "id": 1,
  "name": "Product Name",
  "description": "Product description",
  "price": 999.99,
  "image": "https://example.com/image.jpg",
  "sku": "SKU001",
  "stock": 50,
  "availability": "In Stock",
  "reviews": [
    {
      "id": 1,
      "rating": 5,
      "comment": "Great product!",
      "user_name": "John Doe"
    }
  ]
}
```

**Example Request:**
```bash
curl http://localhost:5000/api/products/1
```

---

### Admin Operations

#### 3. Create Product
```
POST /admin/products
```

**Request Body:**
```json
{
  "name": "Product Name",
  "description": "Product description",
  "price": 999.99,
  "image": "https://example.com/image.jpg",
  "sku": "SKU001",
  "stock": 50
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Product Name",
  "description": "Product description",
  "price": 999.99,
  "image": "https://example.com/image.jpg",
  "sku": "SKU001",
  "stock": 50
}
```

**Example Request:**
```bash
curl -X POST http://localhost:5000/api/admin/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "description": "High performance laptop",
    "price": 50000,
    "image": "https://example.com/laptop.jpg",
    "sku": "LAP001",
    "stock": 25
  }'
```

---

#### 4. Update Product
```
PUT /admin/products/{id}
```

**Path Parameters:**
- `id` (number) - Product ID

**Request Body:**
```json
{
  "name": "Updated Product Name",
  "price": 1099.99,
  "stock": 45
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Updated Product Name",
  "description": "Product description",
  "price": 1099.99,
  "image": "https://example.com/image.jpg",
  "sku": "SKU001",
  "stock": 45
}
```

**Example Request:**
```bash
curl -X PUT http://localhost:5000/api/admin/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Laptop",
    "price": 55000,
    "stock": 20
  }'
```

---

#### 5. Delete Product
```
DELETE /admin/products/{id}
```

**Path Parameters:**
- `id` (number) - Product ID

**Response:**
```
204 No Content
```

**Example Request:**
```bash
curl -X DELETE http://localhost:5000/api/admin/products/1
```

---

## 📁 Project Structure

```
super/
├── backend/
│   ├── src/
│   │   ├── app.js              # Main application file
│   │   ├── init.js             # Database initialization
│   │   ├── swagger.js          # Swagger configuration
│   │   ├── config/
│   │   │   └── db.js           # Database connection
│   │   ├── controllers/
│   │   │   └── product.controller.js  # Product logic
│   │   ├── models/
│   │   │   └── product.model.js       # Data models
│   │   └── routes/
│   │       ├── product.routes.js      # Public routes
│   │       └── admin.routes.js        # Admin routes
│   ├── .env                    # Environment variables
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── src/
│   │   ├── App.js              # Main app component
│   │   ├── App.css             # Global styles
│   │   ├── api.js              # Axios instance
│   │   ├── pages/
│   │   │   ├── Search.js       # Search page
│   │   │   ├── Search.css
│   │   │   ├── ProductDetail.js # Product details
│   │   │   ├── Admin.js        # Admin dashboard
│   │   │   └── Admin.css
│   │   ├── index.js
│   │   └── index.css
│   ├── .env                    # Environment variables
│   ├── package.json
│   └── node_modules/
│
└── README.md
```

---

## 🔐 Environment Variables

### Backend (.env)
```env
PORT=5000                    # Server port
DB_HOST=localhost           # PostgreSQL host
DB_USER=postgres            # PostgreSQL user
DB_PASSWORD=your_password   # PostgreSQL password
DB_NAME=ecommerce          # Database name
DB_PORT=5432               # PostgreSQL port
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
```

---

## 💾 Database Schema

### Products Table
```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2),
  image VARCHAR(255),
  sku VARCHAR(100) UNIQUE,
  stock INT DEFAULT 0
);
```

### Reviews Table
```sql
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products(id),
  rating INT CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  user_name VARCHAR(255)
);
```

---

## 🌐 API Documentation (Swagger)

Once the backend is running, access interactive API documentation:
```
http://localhost:5000/api/docs
```

---

## 📤 Deployment

### Backend Deployment (Railway.app)
1. Push code to GitHub
2. Sign up at https://railway.app
3. Deploy from GitHub repo
4. Add PostgreSQL service
5. Set environment variables
6. Deploy

### Frontend Deployment (Vercel)
1. Sign up at https://vercel.com
2. Connect GitHub repo
3. Deploy

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# On Windows - Find process using port 5000
netstat -ano | findstr :5000
# Kill the process
taskkill /PID <PID> /F
```

### Database Connection Error
- Ensure PostgreSQL is running
- Check credentials in `.env`
- Verify database exists

### CORS Errors
- Backend has CORS enabled for all origins
- Check API URL in frontend `.env`

---

## 📄 License

MIT License - feel free to use this project

---

## 👨‍💻 Support

For issues and questions, please create an issue in the repository or contact the development team.

---

**Happy Coding! 🚀**
