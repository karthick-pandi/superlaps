@echo off
echo ========================================
echo    ShopHub Deployment Guide
echo ========================================
echo.
echo Step 1: Backend Deployment (Railway.app)
echo ========================================
echo 1. Go to https://railway.app
echo 2. Sign up/Login with GitHub
echo 3. Click "New Project" → "Deploy from GitHub"
echo 4. Select your repository
echo 5. Add PostgreSQL database
echo 6. Set environment variables:
echo    - PORT: 5000 (auto-assigned by Railway)
echo    - DB_HOST: [from PostgreSQL service]
echo    - DB_USER: [from PostgreSQL service]
echo    - DB_PASSWORD: [from PostgreSQL service]
echo    - DB_NAME: [from PostgreSQL service]
echo    - DB_PORT: [from PostgreSQL service]
echo.
echo Step 2: Frontend Deployment (Vercel)
echo ========================================
echo 1. Go to https://vercel.com
echo 2. Sign up/Login with GitHub
echo 3. Click "New Project"
echo 4. Import your GitHub repository
echo 5. Configure project:
echo    - Framework Preset: Create React App
echo    - Root Directory: frontend
echo    - Build Command: npm run build
echo    - Output Directory: build
echo 6. Add environment variable:
echo    - REACT_APP_API_URL: [your Railway backend URL]/api
echo.
echo Step 3: Update Database
echo ========================================
echo After backend deploys, run:
echo node src/init.js (in Railway console)
echo.
echo ========================================
echo Deployment URLs will be provided after setup!
echo ========================================
pause