  Tool Lending Library

A full-stack MERN application that digitizes the management of a Tool Lending Library. The system replaces manual paper records and Excel sheets with a centralized platform where staff can securely manage tool inventory through complete CRUD operations.

here is the live url
https://prodesk-toollending-library-xi.vercel.app/login


  Project Overview

The Tool Lending Library enables staff members to:

- Register and log in securely
- Manage tool inventory
- Create, view, update, and delete tools
- Search available tools
- View detailed tool information
- Handle empty states and loading states gracefully
- Prevent unauthorized access using JWT authentication



  Features

 Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Authorization Middleware

 Tool Management
- Add New Tool
- View All Tools
- View Tool Details
- Update Tool Information
- Delete Tool
- Search Tools

 User Experience
- Loading Indicators
- Empty State Screens
- Form Validation
- Responsive Dashboard
- Delete Confirmation Modal

 Security
- Password Hashing using bcrypt
- JWT Token Authentication
- XSS Input Sanitization
- Protected API Routes

 Accessibility
- Keyboard Navigable Forms
- ARIA Labels
- User-Friendly Error Messages

 Telemetry
- Simulated Analytics Logging for CRUD Operations



  Tech Stack

 Frontend
- React
- Vite
- React Router DOM
- Axios
- Tailwind CSS

 Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- xss



 Project Structure

```text
Tool-Lending-Library/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   └── public/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
└── README.md
```



 Installation

 Clone Repository

```bash
git clone <repository-url>
```

 Backend

```bash
cd backend

npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Run Backend

```bash
npm start
```



 Frontend

```bash
cd frontend

npm install
```

Create a `.env` file

```env
VITE_API_URL=http://localhost:5000/api
```

Run Frontend

```bash
npm run dev
```



  Environment Variables

 Backend

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

 Frontend

```env
VITE_API_URL=http://localhost:5000/api
```



  API Endpoints

 Authentication

| Method | Endpoint | Description |
||-|-|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

 Tools

| Method | Endpoint | Description |
||-|-|
| GET | /api/tools | Get All Tools |
| GET | /api/tools/:id | Get Tool Details |
| POST | /api/tools | Add Tool |
| PUT | /api/tools/:id | Update Tool |
| DELETE | /api/tools/:id | Delete Tool |



  Screens

- Login Page
- Register Page
- Dashboard
- Add Tool
- Edit Tool
- Tool Details



  Project Objectives

- Replace manual inventory management
- Provide secure authentication
- Perform complete CRUD operations
- Ensure responsive user experience
- Maintain clean architecture
- Follow enterprise coding practices



  Future Enhancements

- Role-Based Access Control (RBAC)
- Borrow & Return Workflow
- QR Code Integration
- Email Notifications
- Inventory Reports
- Dashboard Analytics
- Pagination
- Advanced Search & Filters
- Image Upload for Tools
- Audit Logs


Screens
 
<img width="1917" height="968" alt="Image" src="https://github.com/user-attachments/assets/027307a5-a90f-4e86-8a4e-168415690963" />

<img width="1917" height="982" alt="Image" src="https://github.com/user-attachments/assets/a15eeb66-3971-4030-84b2-f9982d919cb5" />

<img width="1918" height="977" alt="Image" src="https://github.com/user-attachments/assets/65531616-0213-49e8-8d0a-e47b841459b0" />

