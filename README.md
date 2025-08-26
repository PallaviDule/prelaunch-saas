# Green SaaS Platform

## Overview

This repository contains the **client** and **server** code for a subscription-based SaaS platform.
The client provides an intuitive UI for user onboarding and dashboard features, while the server handles user management and API endpoints.

## Tech Stack
**Client**: React, Tailwind CSS, Vite
**Server**: NestJS, TypeScript, in-memory mock data

## Setup Instructions

### [Client](./client//README.md)

```bash
cd client
npm install
npm run dev
```

Default: [http://localhost:5173](http://localhost:5173)

### [Server](./server/README.md)

```bash
cd server
npm install
npm run start:dev
```

Default: [http://localhost:3000](http://localhost:3000)

## Folder Structure

### [Client](./client//README.md)

```
client/
│── src/
│   ├── components/           # UI components
│   │   └── common/           # Reusable components (ErrorMessage, UpcomingButton, PasswordField)
│   ├── context/              # Auth context and reducer
│   ├── data/                 # Mock data for dashboard
│   ├── types/                # Type definitions
│   ├── utils/                # Helper functions
│   ├── App.jsx
│   ├── main.jsx
│── index.html
│── tailwind.config.js
│── package.json
```

### [Server](./server/README.md)

```
server/
│── src/
│   ├── users/
│   │   ├── data/             # User data (in-memory storage)
│   │   ├── dto/              # DTOs for request validation
│   │   ├── users.controller.ts
│   │   ├── users.module.ts
│   │   └── users.service.ts
│   │   └── users.repository.ts
│   ├── main.ts               # App bootstrap
|   │── app.module.ts         # Root module
│── package.json
```

## Key Features & Design Choices

* **Tailwind CSS**: for fast and consistent design, following [Vite setup documentation](https://tailwindcss.com/docs/installation/using-vite)
* **Intuitive UI**: with reusable components for error handling, password input, and upcoming features
* **Responsive layouts** : Tailwind utilities for mobile and desktop layouts
* **State Management** :  React Context + Reducer ensures predictable flows for authentication and subscription plan selection
* **Server-side Validation** : DTOs for scalability and clean error handling
* **Client-Server Interaction** : Login/signup requests validated by server, responses update client state

## Notes

* This project uses **mock data** for user management; no database is integrated yet.
* **Upcoming** features display placeholder alerts