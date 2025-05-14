Hair Salon Management System – Backend
A robust backend API for managing hair salon operations, built with Node.js, Express, and MongoDB. This system facilitates user authentication, appointment scheduling, service management, and stylist assignments, providing a seamless experience for both clients and staff.

✨ Features
User Authentication: Secure registration and login using JWT and bcrypt.

Appointment Management: Create, update, and delete client appointments.

Service Management: Add, modify, or remove salon services.

Stylist Assignment: Assign stylists to specific services or appointments.

Protected Routes: Ensure secure access to sensitive endpoints via JWT.

Cross-Origin Resource Sharing (CORS): Enable requests from different origins.

Environment Configuration: Manage environment variables using dotenv.

🛠️ Technologies Used
Node.js: JavaScript runtime environment.

Express.js: Web framework for building RESTful APIs.

MongoDB: NoSQL database for storing application data.

Mongoose: ODM for MongoDB to simplify data modeling.

JWT (jsonwebtoken): For secure user authentication.

bcrypt: For hashing user passwords.

CORS: Middleware to enable Cross-Origin Resource Sharing.

dotenv: Module to load environment variables from a .env file.

JavaScript (ES6+): Programming language for server-side logic.

📁 Project Structure
lua
Copy
Edit
hair-salon-management-backend/
├── controllers/
│   ├── authController.js
│   ├── appointmentController.js
│   └── serviceController.js
├── models/
│   ├── User.js
│   ├── Appointment.js
│   └── Service.js
├── routes/
│   ├── authRoutes.js
│   ├── appointmentRoutes.js
│   └── serviceRoutes.js
├── middleware/
│   └── authMiddleware.js
├── config/
│   └── db.js
├── .env
├── app.js
├── package.json
└── README.md
🚀 Installation
Prerequisites
Node.js and npm installed.

MongoDB instance running locally or on the cloud.

Steps
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/hair-salon-management-backend.git
cd hair-salon-management-backend
Install dependencies:

bash
Copy
Edit
npm install
Set up environment variables:

Create a .env file in the root directory and add the following:

env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Replace your_mongodb_connection_string with your actual MongoDB connection string and your_jwt_secret with a secure secret key.

Run the server:

bash
Copy
Edit
npm  run dev 
The server will start on http://localhost:8000

📬 API Endpoints
Auth Routes
POST /api/auth/register: Register a new user.

POST /api/auth/login: Authenticate user and return JWT.

Appointment Routes
POST/api/appointments: Retrieve all appointments.

POST /api/appointments: Create a new appointment.

PUT /api/appointments/:id: Update an existing appointment.

DELETE /api/appointments/:id: Delete an appointment.

Service Routes
GET /api/services: Retrieve all services.

POST /api/services: Add a new service.

Note: All routes under /api/appointments and /api/services are protected and require a valid JWT token in the Authorization header.

🔐 Authentication
Authentication is handled using JSON Web Tokens (JWT). After a successful login, a token is returned which must be included in the Authorization header for protected routes.

Example:

makefile
Copy
Edit
Authorization: Bearer your_jwt_token
🧪 Testing the API
You can use tools like Postman or Insomnia to test the API endpoints. Ensure to include the JWT token in the Authorization header for protected routes.

🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

📄 License
This project is licensed under the MIT License.

