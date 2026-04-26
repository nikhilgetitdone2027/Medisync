# Medisync - Full-Stack Healthcare Appointment Booking Platform

Medisync is a comprehensive, modern healthcare platform designed to streamline doctor-patient interactions. It enables patients to browse specialized doctors, book appointments seamlessly, and manage their profiles. Simultaneously, it provides an intuitive administrative dashboard for healthcare providers to manage doctors, patients, and track all system activities.

## 🚀 Features

### **Patient Portal (Frontend)**
- **User Authentication**: Secure sign-up, login, and profile management.
- **Find Doctors**: Browse doctors by specialty, view their profiles, experience, and consultation fees.
- **Appointment Booking**: Select preferred dates and times to schedule appointments.
- **Payment Integration**: Secure online payments using **Stripe** and **Razorpay**.
- **User Dashboard**: Manage upcoming appointments, view appointment history, and cancel if necessary.

### **Admin & Doctor Portal (Admin)**
- **Admin Dashboard**: Overview of total doctors, appointments, patients, and revenue.
- **Doctor Management**: Add, update, and remove doctors from the platform.
- **Appointment Tracking**: View and manage all appointments across the system.
- **Role-Based Access**: Specialized interfaces for Administrators and Doctors.

## 🛠️ Technology Stack

### **Frontend & Admin Panel**
- **React.js** (Vite)
- **Tailwind CSS** (for highly responsive, modern UI)
- **React Router** (for seamless navigation)
- **Context API** (for state management)

### **Backend**
- **Node.js** & **Express.js** (REST API architecture)
- **MongoDB** & **Mongoose** (NoSQL Database)
- **JSON Web Tokens (JWT)** (Secure Authentication & Authorization)
- **Bcrypt** (Password Hashing)
- **Multer** & **Cloudinary** (Image uploads and cloud storage for profiles/doctors)
- **Stripe & Razorpay SDKs** (Payment processing)

## 📁 Project Structure

```
Medisync/
│
├── frontend/       # Patient-facing React application
├── admin/          # Admin and Doctor React dashboard
└── backend/        # Express server, MongoDB models, and API routes
```

## ⚙️ Local Setup & Installation

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd Medisync
```

### 2. Setup the Backend
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory and add the required environment variables:
```env
PORT=4000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
CLOUDINARY_NAME=<your-cloudinary-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_SECRET_KEY=<your-cloudinary-secret>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
RAZORPAY_KEY_ID=<your-razorpay-key-id>
RAZORPAY_KEY_SECRET=<your-razorpay-key-secret>
```
Start the backend server:
```bash
npm run server
```

### 3. Setup the Patient Frontend
Open a new terminal window:
```bash
cd frontend
npm install
```
Create a `.env` file in the `frontend` directory:
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_STRIPE_PUBLIC_KEY=<your-stripe-public-key>
VITE_RAZORPAY_KEY_ID=<your-razorpay-key-id>
```
Start the frontend app:
```bash
npm run dev
```

### 4. Setup the Admin Portal
Open a new terminal window:
```bash
cd admin
npm install
```
Create a `.env` file in the `admin` directory:
```env
VITE_BACKEND_URL=http://localhost:4000
```
Start the admin app:
```bash
npm run dev
```

## 🌟 Future Enhancements
- Video consultation integration
- Real-time chat between doctors and patients
- Automated email/SMS reminders for upcoming appointments
- Advanced analytics and reporting for administrators

## 📜 License
This project is open-source and available under the [ISC License](LICENSE).
