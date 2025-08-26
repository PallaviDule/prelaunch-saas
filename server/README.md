# Server

## Overview

This project is the server-side of the application, built using **NestJS**.
It provides APIs for user authentication, user management, and subscription handling.
The backend is modular and maintainable, making it easy to extend or integrate with a database in the future.

## Tech Stack

* **NestJS** – Framework for building scalable server-side applications with TypeScript
* **TypeScript** – Ensures type safety and better developer experience
* **Node.js** – JavaScript runtime for server execution
* **In-memory Storage** – User data is temporarily stored in `src/users/data/user.ts`

## Setup Instructions

1. Clone the repository and navigate to the server folder:

   ```bash
   cd server
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the development server:

   ```bash
   npm run start:dev
   ```
4. The API will be available at: `http://localhost:3000`

## Design Choices & Architecture

* **Modular Structure**: Users module has its own controller, services, DTOs, and data, following NestJS best practices.
* **Separation of Concerns**:
  * **Controller** – Handles HTTP requests and responses
  * **Service** – Contains business logic
  * **DTO** – Defines data shapes and input validation (inside `dto` folder)
  * **Data** – Temporary in-memory storage for users (inside `data` folder)
* **Consistency & Maintainability**: Clear folder structure and separation of concerns makes the codebase easy to extend.
* **Error Handling**: Standardized error responses for API consumers.

## Folder Structure

```
server/
│── src/
│   ├── users/
│   │   ├── dto/             # Data Transfer Objects (request validation)
│   │   ├── data/            # In-memory user storage
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── users.module.ts
│   │   ├── users.repository.ts
|   │── app.module.ts         # Root module
|   |── main.ts               # Entry point
│── package.json
│── tsconfig.json
```

## Key Features

* **User Management** – Sign up, login, and fetch user details
* **Modular & Reusable Services** – Each service has a single responsibility, making the code easier to maintain
* **DTOs & Validation** – Ensures requests conform to expected data structure
