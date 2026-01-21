# 🚀 Speedo - GPS Vehicle Tracking System

<div align="center">

![Speedo Logo](https://img.shields.io/badge/Speedo-GPS%20Tracking-blue?style=for-the-badge&logo=google-maps)

**Transform Raw GPS Data into Actionable Insights**

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-9.1.4-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-5.2.1-000000?style=flat-square&logo=express)](https://expressjs.com/)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Architecture](#-architecture) • [API Documentation](#-api-documentation) • [Screenshots](#-screenshots)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Use Cases](#-use-cases)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**Speedo** is an industry-level GPS vehicle tracking system that transforms raw GPS coordinates into meaningful, human-readable trip information. Instead of drowning in latitude-longitude numbers, users can visualize routes on interactive maps, analyze trip metrics, and gain actionable insights for better fleet management.

### 📌 What Problem Does It Solve?

Raw GPS data is just numbers. Speedo converts this data into:
- 🗺️ **Visual Route Maps** - See exactly where vehicles traveled
- 📏 **Distance Analytics** - Automatically calculate total distance
- ⏱️ **Stop & Idle Detection** - Track how long vehicles stopped or idled
- ⚡ **Overspeed Alerts** - Monitor when vehicles exceed speed limits
- 📊 **Comprehensive Trip Reports** - Clear, actionable insights

---

## ✨ Features

### 🎯 Core Features

- **Real-time GPS Tracking** - Track vehicles in real-time with live updates
- **Trip History & Analytics** - View detailed trip history with analytics
- **Route Visualization** - Interactive maps showing complete routes
- **Idle Time Detection** - Identify and reduce fuel wastage
- **Overspeed Monitoring** - Get alerts when speed limits are exceeded
- **Distance Calculation** - Automatic distance tracking with precision
- **Stop Duration Analysis** - Track stoppage times at various locations

### 🔐 Authentication & Security

- **Secure Login System** - JWT-based authentication
- **Password Encryption** - bcrypt hashing for secure password storage
- **Form Validation** - Client and server-side validation
- **Protected Routes** - Role-based access control

### 🎨 User Experience

- **Premium UI/UX** - Modern, responsive design with animations
- **Dark Mode Support** - Eye-friendly dark theme
- **Mobile Responsive** - Works seamlessly on all devices
- **Interactive Components** - Smooth animations with Framer Motion
- **Real-time Updates** - Live data updates without page refresh

---

## 🏢 Use Cases

### 🚚 Fleet Management Companies
- Track trucks, taxis, and delivery vehicles
- Reduce fuel wastage through idle detection
- Monitor driver behavior and overspeeding
- Optimize routes for efficiency

### 🚌 Transport Companies
- Verify route compliance for buses
- Measure stoppages at stations
- Ensure schedule adherence
- Monitor passenger safety

### 🏗️ Logistics & Construction
- Track machine usage time
- Identify idle equipment
- Optimize resource allocation
- Reduce operational costs

### 🚓 Government & Emergency Services
- Maintain vehicle movement history
- Conduct comprehensive trip audits
- Emergency response tracking
- Compliance monitoring

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - Latest React with modern hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express 5.2.1** - Web application framework
- **TypeScript** - Type-safe server code
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Authentication & Security
- **JWT (jsonwebtoken)** - Secure token-based authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Additional Libraries
- **geolib** - Geospatial calculations
- **multer** - File upload handling
- **dotenv** - Environment variable management

---

## 🏗️ Architecture

Speedo follows **Clean Architecture** and **SOLID Principles** for maintainability and scalability.

### Backend Architecture Layers

```
┌─────────────────────────────────────────────────────────┐
│                    Interface Layer                       │
│  (Controllers, Routes, Middleware, HTTP Handlers)        │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                   Application Layer                      │
│        (Use Cases, Business Logic, DTOs)                 │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                  Infrastructure Layer                    │
│  (Database, External Services, Implementations)          │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                     Domain Layer                         │
│      (Entities, Interfaces, Business Rules)              │
└─────────────────────────────────────────────────────────┘
```

### SOLID Principles Applied

- **S**ingle Responsibility - Each class has one reason to change
- **O**pen/Closed - Open for extension, closed for modification
- **L**iskov Substitution - Interfaces can be substituted
- **I**nterface Segregation - Small, focused interfaces
- **D**ependency Inversion - Depend on abstractions

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v20.x or higher)
- **MongoDB** (v6.x or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/speedo.git
   cd speedo
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure Environment Variables**

   Create `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGODB_URL=mongodb://localhost:27017/speedo
   JWT_SECRET=your-secret-key-change-in-production
   JWT_EXPIRES_IN=24h
   FRONTEND_URL=http://localhost:5173
   NODE_ENV=development
   ```

5. **Start MongoDB**
   ```bash
   # Make sure MongoDB is running
   mongod
   ```

6. **Run the Application**

   **Backend** (Terminal 1):
   ```bash
   cd backend
   npm run dev
   ```

   **Frontend** (Terminal 2):
   ```bash
   cd frontend
   npm run dev
   ```

7. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000
   - Health Check: http://localhost:5000/health

---

## 📡 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "user_id",
      "email": "user@example.com",
      "name": "John Doe",
      "createdAt": "2024-01-21T10:30:00.000Z",
      "updatedAt": "2024-01-21T10:30:00.000Z"
    }
  }
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user_id",
      "email": "user@example.com",
      "name": "John Doe",
      "createdAt": "2024-01-21T10:30:00.000Z",
      "updatedAt": "2024-01-21T10:30:00.000Z"
    }
  }
}
```

### Error Responses

**400 Bad Request** - Validation Error:
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Email is required",
    "Password must be at least 6 characters"
  ]
}
```

**401 Unauthorized** - Invalid Credentials:
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

---

## 📁 Project Structure

```
speedo/
├── backend/
│   ├── src/
│   │   ├── domain/              # Domain Layer
│   │   │   ├── entities/        # Business entities
│   │   │   ├── repositories/    # Repository interfaces
│   │   │   └── services/        # Service interfaces
│   │   ├── application/         # Application Layer
│   │   │   ├── use-cases/       # Business logic
│   │   │   └── dto/             # Data Transfer Objects
│   │   ├── infrastructure/      # Infrastructure Layer
│   │   │   ├── database/        # Database models & repos
│   │   │   └── services/        # Service implementations
│   │   ├── interfaces/          # Interface Layer
│   │   │   └── http/            # HTTP controllers & routes
│   │   ├── config/              # Configuration
│   │   └── server.ts            # Entry point
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── landing/         # Landing page components
│   │   │   ├── auth/            # Authentication components
│   │   │   ├── navigation/      # Navigation components
│   │   │   ├── forms/           # Reusable form components
│   │   │   ├── cards/           # Card components
│   │   │   └── table/           # Table components
│   │   ├── App.tsx              # Main app component
│   │   ├── main.tsx             # Entry point
│   │   └── index.css            # Global styles
│   ├── package.json
│   └── vite.config.ts
│
└── README.md
```

---

## 🎨 Screenshots

### Landing Page
> Premium, modern landing page with animated hero section, features showcase, and comprehensive footer.

### Login Page
> Secure login with form validation, password visibility toggle, and social login options.

### Dashboard (Coming Soon)
> Real-time GPS tracking dashboard with interactive maps and analytics.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add comments for complex logic
- Follow Clean Architecture principles

---

## 📝 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB team for the robust database
- All open-source contributors

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ for Fleet Management

</div>
