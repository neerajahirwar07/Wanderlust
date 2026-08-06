# Wanderlust

A full-stack Airbnb-inspired web application built using Node.js, Express.js, MongoDB, and EJS.

## Features

- User Authentication (Signup/Login)
- Create, Edit and Delete Listings
- Image Upload using Cloudinary
- Add and Delete Reviews
- Flash Messages
- Session Management
- Responsive UI

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- EJS
- Bootstrap
- Passport.js
- Cloudinary
- Multer

## Installation

1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Wanderlust.git
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file and add:

```env
ATLAS_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

4. Start the application

```bash
node app.js
```

Open:

```
http://localhost:8080/listings
```

## Folder Structure

```
controller/
models/
routes/
views/
public/
```

## Author

Neeraj Ahirwar