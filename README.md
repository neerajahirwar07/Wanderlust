# 🏡 Wanderlust - Airbnb Inspired Travel Booking Platform

A full-stack web application inspired by Airbnb that allows users to discover, book, and pay for travel accommodations. Users can register, log in, browse listings, book stays with real dates, pay securely online, leave reviews, and manage their own properties through a clean and responsive interface. Hosts can track bookings and issue refunds directly from the app.

---

## 📌 Features

- 🔐 User Authentication (Sign Up, Login & Logout)
- 🏠 Create, Update and Delete Listings
- 📸 Upload Images using Cloudinary
- ⭐ Add and Delete Reviews
- 👤 Authorization (Only owners can edit/delete their listings)
- 📅 **Booking System** — check-in/check-out dates, guest count, automatic double-booking prevention
- 💳 **Online Payments** — secure checkout powered by Razorpay, with server-side signature verification
- 💰 **Owner Cancel & Refund** — hosts can cancel a booking and automatically refund the guest via Razorpay
- 🏷️ **15% Discount Offers** — guests can apply a discount from the listings page, carried through to checkout
- 🔍 **Search** — find listings instantly by title, location, or country
- 🧳 **My Trips** — guests can view all their bookings and payment status in one place
- 📋 **Booking Requests** — hosts can view and manage all bookings made on their listings
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

### Payments
- Razorpay (Orders API, Checkout, Refunds API)

### Cloud Storage
- Cloudinary
- Multer
- Multer Storage Cloudinary

### Validation
- Joi

---

## 📂 Project Structure
Wanderlust/
│
├── controllers/
│ ├── bookings.js
│ ├── listings.js
│ ├── reviews.js
│ └── users.js
├── init/
├── models/
│ ├── booking.js
│ ├── listing.js
│ ├── review.js
│ └── user.js
├── public/
│ ├── css/
│ ├── js/
│ └── images/
├── routes/
│ ├── bookings.js
│ ├── mybookings.js
│ ├── listings.js
│ ├── review.js
│ └── user.js
├── utilis/
├── views/
│ ├── bookings/
│ ├── listings/
│ ├── includes/
│ └── layouts/
│
├── app.js
├── middleware.js
├── schema.js
├── cloudeConfig.js
├── package.json
└── README.md

<!-- installation -->

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

SESSION_SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

RAZORPAY_KEY_ID=your_razorpay_test_key_id
RAZORPAY_KEY_SECRET=your_razorpay_test_key_secret
```

### Run the Project

```bash
node app.js
```

or

```bash
nodemon app.js
```

Visit: http://localhost:8080/

---

## 💳 Payment & Booking Flow

1. Guest selects check-in/check-out dates and number of guests on a listing.
2. (Optional) Guest applies a 15% discount from the listings page before booking.
3. App checks for overlapping paid bookings to prevent double-booking.
4. A Razorpay order is created and the guest completes payment via the Razorpay Checkout popup.
5. Payment signature is verified server-side (HMAC SHA256) before confirming the booking.
6. Confirmed bookings appear in the guest's **My Trips** and the host's **Booking Requests**.
7. Hosts can cancel a paid booking, which triggers an automatic refund via the Razorpay Refunds API.

*All payments run in Razorpay Test Mode — no real money is charged.*

---

## 📸 Screenshots

### Home Page

<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/09cf9e3a-617d-410d-bc61-c054d1245137" />

### Listing Details
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/9d291866-30d7-4af5-b8a6-8e6fc44b6716" />

### Create Listing
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/b09fa6ba-5d15-4a35-8516-d1abd2986064" />

### Login Page

<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/9c88cd72-e42f-475f-b61a-00d71255ab32" />

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
- razorpay
- joi
- dotenv

---

## 🌱 Future Improvements

- ❤️ Wishlist Feature
- ⭐ Average Rating Display on Listing Cards
- 📍 Google Maps Integration
- 📧 Email Notifications for Bookings
- 📱 Progressive Web App (PWA)
- 🌙 Dark Mode
- 📊 Host Analytics Dashboard
- 🛠️ Admin Dashboard

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