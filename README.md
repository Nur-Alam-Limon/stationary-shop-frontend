# Stationary Project

## Project Overview
This is a React-Redux-based e-commerce application for a stationary business. The project features user authentication, product management, a shopping cart, and an admin dashboard for order and user management. The application is structured using modular components and Redux for state management.

## Features
- User Authentication (Login, Logout)
- Product Listing and Details
- Shopping Cart with Persistence
- Order Management
- Admin Dashboard for Managing Users, Products, and Orders
- Protected Routes for Users and Admins

## Tech Stack
- **Frontend:** React, Redux Toolkit, TypeScript, Tailwind CSS, Vite
- **State Management:** Redux Toolkit with Persist
- **Routing:** React Router DOM
- **API Communication:** RTK Query
- **UI Components:** Reusable UI elements (buttons, cards, dialogs, tables, etc.)

## Project Structure
stationary-project/
│── app/                # Redux store setup
│── assets/             # Static assets (images, icons, etc.)
│── components/         # Reusable UI components
│── features/           # Redux slices and API interactions
│── hooks/              # Custom hooks for authentication and UI behavior
│── layouts/            # Layout components
│── lib/                # Utility functions
│── pages/              # Application pages
│── routes/             # Route definitions
│── types/              # Type definitions
│── public/             # Public assets (favicons, manifest, etc.)
│── index.tsx           # Entry point of the React application
│── App.tsx             # Main application component
│── vite.config.ts      # Vite configuration file
│── package.json        # Project dependencies and scripts
│── tsconfig.json       # TypeScript configuration
│── .eslintrc.js        # ESLint configuration
│── .gitignore          # Git ignore file
│── README.md           # Project documentation


## Authentication & Authorization
- Users can log in to access private routes.
- Admin users have separate routes to manage the application.
- Authentication state is persisted using Redux Persist.

## Routing Setup
The application uses React Router for navigation, with protected routes for authenticated users and admin-only routes.
- Public routes include Home, About, Products, and Login.
- Private routes include the Shopping Cart and User Dashboard.
- Admin routes include user, product, and order management.

## State Management
Redux Toolkit is used to manage application state efficiently.
- **Authentication:** Handles user login state.
- **Products:** Manages product listings and interactions.
- **Cart:** Stores user cart data with persistence.
- **Orders:** Tracks order details.

## Installation & Setup
1. Clone the repository.
2. Install dependencies using a package manager.
3. Start the development server.
4. Configure necessary environment variables if required.

## Contribution
Feel free to contribute by opening issues or submitting pull requests.

## License
This project is licensed under an appropriate open-source license.

