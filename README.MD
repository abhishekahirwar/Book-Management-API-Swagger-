# Book Management API

## Overview

The Book Management API is a RESTful web service for managing a book collection. Built with Node.js, Express.js, and MongoDB. Following MVC architecture, the API provides endpoints to add, retrieve all books, any specific or single book details, update, and delete books. It features Swagger documentation for easy exploration and testing. Designed for scalability, it's suitable for various book management applications.

## Features

**User Management**: The project includes robust functionality for creating and managing user accounts, with distinct roles assigned to users:

* **Admin** have full privileged access to the system. They can perform all operations including managing users, and have complete control over all books (create, read, update, delete any book).

* **Seller** can create new books, update and delete books they have created, and view all books in the system. They cannot modify or delete books created by other sellers.

* **Customer** can view all the books in the system. They have read-only access to the book catalog and can perform standard operations such as searching for books or viewing book details.

**Book Management**: The API provides comprehensive CRUD operations for managing books, with access controlled based on user roles:

* Create new books (Admin and Seller)
* Retrieve all books or get details of a specific book (All users)
* Update book information (Admin for all books, Seller for their own books)
* Delete books (Admin for all books, Seller for their own books)

**Authentication and Authorization**: The API secures endpoints using JWT-based authentication, ensuring secure access to resources. It implements role-based access control (RBAC) distinguishing between administrators, sellers and customers.

## Endpoints

### User Routes

#### Authentication

* `POST /api/v1/user/otp`: Send OTP for verification.
* `POST /api/v1/user/createUser`: Create a new user.
* `POST /api/v1/user/login`: User login.
* `GET /api/v1/user/logout`: User logout.
* `POST /api/v1/user/password/forgot`: Send email for reset password.
* `PUT /api/v1/user/password/reset/:token`: Reset user's password.

#### Authenticated User Routes

* `GET /api/v1/user/me`: Get user profile details.
* `PUT /api/v1/user/me/update`: Update user profile details.
* `PUT /api/v1/user/password/update`: Update or change user password.
* `DELETE /api/v1/user/me/delete`: Delete user profile.

### Book Routes

#### Seller Routes for Book Management

* `POST /api/v1/books/create`: Create a new book.
* `GET /api/v1/books`: Get all books.
* `GET /api/v1/books/single/:id`: Get single book's details.
* `PUT /api/v1/books/update/:id`: Update books by Id.
* `DELETE /api/v1/books/delete/:id`: Delete books by Id.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

* Node.js installed on your local environment.
* MongoDB database setup or use a cloud-based MongoDB service.

### Installation

* Clone the repository: `git clone https://github.com/abhishekahirwar/Book-Management-API-Swagger-.git` 
* Install dependencies: `npm install`
* Set up environment variables (see `Env Variables` for reference).
* Start the server: `node index.js`

## Env Variables
Make sure to create a .env file in the directory and add the following essential variables to use the api.

## Essential Variables

* PORT = Any Port
* MONGO_URL = Your MongoDB connection URL

* JWT_SECRET = Secret key for JWT
* JWT_EXPIRE = JWT expiration time

* COOKIE_EXPIRE = Cookie expiration time

* SMTP_SERVICE = Your SMTP service
* SMTP_MAIL = Your SMTP email
* SMTP_PASSWORD = Your SMTP password
* SMTP_HOST = SMTP host
* SMTP_PORT = SMTP port

* CLOUDINARY_NAME = Your Cloudinary name
* CLOUDINARY_API_KEY = Your Cloudinary API key
* CLOUDINARY_API_SECRET = Your Cloudinary API secret

## Technologies Used

* **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.
* **Express.js**: Web framework for Node.js used for building the API endpoints.
* **MongoDB**: NoSQL database for storing data in JSON-like documents with dynamic schemas.
* **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
* **dotenv**: For loading environment variables from a .env file into process.env.
* **jsonwebtoken**: For generating and verifying JSON Web Tokens (JWTs) used for authentication.
* **nodemailer**: Node.js module for sending emails.
* **otp-generator**: For generating One-Time Passwords (OTPs) used in email verification.

## Author

**Abhishek Ahirwar**

* [Website](https://abhiportfolio-qj5g.onrender.com) **Abhishek Portfolio**
* [GitHub](https://github.com/abhishekahirwar) **Abhishek Ahirwar**
* [LinkedIn](https://www.linkedin.com/in/abhishek-ahirwar-85951b217) **Abhishek Ahirwar**

## Additional Resources

[Book Management API Live Deployed]() **Book Management API**

[API Documentation]() **API Documentation**
