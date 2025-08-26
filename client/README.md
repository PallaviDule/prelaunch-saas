# Client

## Overview

This project is the client-side of the application, built using **React**, **Tailwind CSS**, and **Vite**.
The focus was on creating a simple, intuitive, and responsive UI with reusable components and modular folder organization..

## Tech Stack

* **React** – Component-based UI development
* **Tailwind CSS** – Utility-first styling for faster and consistent design
* **Vite** – Fast development build tool with minimal configuration

## Setup Instructions

1. Clone the repository and navigate to the client folder:  
  ```cd client```
2. Install dependencies:  
  ```npm install```
3. Run the development server:  
  `npm run dev`
4. Open the application in your browser (default: http://localhost:5173).

## Design Choices & UI/UX Intuitiveness

* **Tailwind CSS**  
  It is used for rapid styling and consistent design patterns. I referred directly to the [Tailwind documentation using vite](https://tailwindcss.com/docs/installation/using-vite) for setup.
* The UI was built to be **intuitive and lightweight**, with clear visual feedback (hover states, spacing, and responsiveness).
  * **Reusability and Scalability**:  
    Keeping reusable components (like Button, ErrorMessage, PasswordField) ensures we can scale the app with minimal rework.
  * **Clarity**:  
  Labels, spacing, and color choices are simple and not overwhelming. For unavailable features, the “Coming Soon” alert was used for clarity.
  * **Responsive Design:**  
  Used Tailwind’s responsive utilities (sm:, md:, etc.) to make sure layouts adjust smoothly across devices.
  * **Scalable State Management**:  
  Used React context with a reducer for authentication flow, ensuring predictable state transitions.

## Reusable Components

* **ErrorComponent** – Displays error messages consistently across the app.
* **UpcomingButton** – A placeholder button for upcoming features.
* **PasswordField** – A controlled input with password visibility toggle.

## Folder Structure
```
client/
│── src/
│   ├── components/           # UI components
|       ├── common/           # Reusable components
|   ├── context/
|   │   ├── authContext.tsx    # Authentication context provider
|   │   ├── reducer.ts         # Reducer function for auth state
|   ├── data/                  # Mocked Data for dashboard page
|   ├── types/                 # Type definitions
│   ├── utils/                 # Helper functions
│   ├── App.jsx
│   ├── main.jsx
│── index.html
│── tailwind.config.js
│── package.json
```

