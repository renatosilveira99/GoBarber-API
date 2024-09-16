# Go-Barber API

The **Go-Barber API** is a backend project developed during the **GoStack Bootcamp** by Rocketseat. This API serves as the core for a barber shop appointment scheduling system, handling user authentication, appointment management, and various other functionalities. It leverages technologies like **Node.js**, **Express**, **TypeORM**, **Multer**, and more, and includes tools for image upload, email sending, and Redis caching.

## Features

- **User Authentication**: Secure login and registration for users.
- **Appointment Scheduling**: Users can schedule appointments with service providers.
- **Password Recovery**: Users can recover forgotten passwords via email.
- **File Upload**: Upload and manage user profile pictures with Multer.
- **Cache Implementation**: Use Redis for caching appointments and improving performance.

## Technologies Used

- **Node.js**: Backend JavaScript runtime.
- **Express**: Fast, unopinionated, minimalist web framework.
- **TypeORM**: ORM for database operations with support for PostgreSQL.
- **Multer**: Middleware for handling file uploads.
- **Redis**: In-memory data structure store used for caching.
- **JWT**: JSON Web Token for secure user authentication.
- **Bcrypt**: Password hashing for enhanced security.
- **Nodemailer**: Sending transactional emails for user password recovery.
- **Date-fns**: Utility library for managing date and time.
  
## Getting Started

### Prerequisites

- **Node.js** (version >= 12.x)
- **Yarn** (or npm)
- **PostgreSQL** for the database
- **Redis** for caching

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/renatosilveira99/go-barber-api.git
   ```

2. Navigate to the project directory and install the dependencies:
   ```bash
   cd gobarber-api
   yarn
   ```

3. Create a `.env` file based on the `.env.example` and configure the database and other environment variables.

4. Run the database migrations:
   ```bash
   yarn typeorm migration:run
   ```

5. Start the development server:
   ```bash
   yarn dev:server
   ```

## Available Scripts

- **yarn dev:server**: Starts the development server.
- **yarn typeorm**: Run TypeORM CLI commands, like migrations.
- **yarn test**: Run the test suite.

---

This project is the backend of a barber shop management system, including advanced tools for scheduling and user management.

