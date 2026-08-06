# 🏡 Wanderlust - Airbnb Inspired Travel Listing Platform

A full-stack web application inspired by Airbnb that allows users to discover, create, and manage travel accommodations. Users can register, log in, upload property images, leave reviews, and manage their own listings through a clean and responsive interface.

---

## 📌 Features

- 🔐 User Authentication (Sign Up, Login & Logout)
- 🏠 Create, Update and Delete Listings
- 📸 Upload Images using Cloudinary
- ⭐ Add and Delete Reviews
- 👤 Authorization (Only owners can edit/delete their listings)
- 💬 Flash Messages for better user experience
- 🛡️ Server-side Validation using Joi
- 🍪 Session & Cookie Management
- 📱 Responsive UI with Bootstrap
- 🗄️ MongoDB Atlas Database Integration

---

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- Passport.js
- Passport Local
- Express Session

### Cloud Storage
- Cloudinary
- Multer
- Multer Storage Cloudinary

### Validation
- Joi

---

## 📂 Project Structure

```
Wanderlust/
│
├── controller/
├── init/
├── models/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── routes/
├── utilis/
├── views/
│
├── app.js
├── middleware.js
├── schema.js
├── cloudeConfig.js
├── package.json
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/neerajahirwar07/Wanderlust.git
```

### Go to Project Folder

```bash
cd Wanderlust
```

### Install Dependencies

```bash
npm install
```

### Create `.env` File

Create a `.env` file in the root directory and add the following variables:

```env
ATLAS_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### Run the Project

```bash
node app.js
```

or

```bash
nodemon app.js
```

Visit:

```
http://localhost:8080/listings
```

---

## 📸 Screenshots

### Home Page

> Add Screenshot Here

### Listing Details

> Add Screenshot Here

### Create Listing

> Add Screenshot Here

### Login Page

> Add Screenshot Here

---

## 🔐 Authentication

- User Registration
- User Login
- User Logout
- Session Authentication using Passport.js

---

## 📦 Major Packages Used

- express
- mongoose
- passport
- passport-local
- passport-local-mongoose
- express-session
- connect-flash
- ejs
- ejs-mate
- method-override
- multer
- cloudinary
- multer-storage-cloudinary
- joi
- dotenv

---

## 🌱 Future Improvements

- ❤️ Wishlist Feature
- 🔍 Search & Filter Listings
- 📍 Google Maps Integration
- 💳 Online Booking & Payments
- 📱 Progressive Web App (PWA)
- 🌙 Dark Mode
- 📊 Admin Dashboard

---

## 👨‍💻 Author

**Neeraj Ahirwar**

- GitHub: https://github.com/neerajahirwar07

---

## ⭐ Support

If you like this project, don't forget to **star** the repository.

⭐ Star this repository if you found it helpful!

---

## 📄 License

This project is developed for learning purposes and personal portfolio.
