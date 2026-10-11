# 🛋️ Kanap

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-frontend-purple?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter)
![Express](https://img.shields.io/badge/Express-backend-black?logo=express)

## 📖 Overview

Kanap is an e-commerce website for a sofa store, based on the OpenClassrooms project "Kanap".

During the course, the project had to be built with vanilla JavaScript, without any framework.
Once it was completed, I decided on my own initiative to rebuild the whole frontend with React,
to practice the library and compare both approaches on the same project.

Users can browse the catalog, choose a color and a quantity for each sofa, manage their cart and
place an order.

The backend API was provided by OpenClassrooms. It serves the products from in-memory data,
so no database is required.

---

## 🧰 Tech Stack

### Frontend

* React 18
* Vite
* JavaScript (ES6+)
* React Router
* Axios
* CSS3

### Backend (provided by OpenClassrooms)

* Node.js
* Express

---

## 🚀 Quick Start

### Backend

```bash
cd back
npm install
node server
```

The backend runs on:

```bash
http://localhost:3000
```

If port 3000 is already in use, the port actually used is printed in the console when the server starts
(e.g. `Listening on port 3001`).

### Frontend

```bash
cd front
yarn
yarn dev
```

The frontend runs on:

```bash
http://localhost:5173
```

---

## 🚀 Features

* Product catalog fetched from the API
* Product page with color and quantity selection
* Cart persisted in `localStorage`, merging identical products (same sofa and same color)
* Quantity update and product removal directly from the cart
* Order form sending the contact details and the products to the API
* Confirmation page displaying the order number

---

## 🏗️ Project Structure

```text
front/src/
├── assets/
├── components/
│   ├── CartProducts/
│   ├── Footer/
│   ├── Navbar/
│   ├── OrderForm/
│   ├── ProductDetails/
│   └── ProductsList/
├── hooks/
├── pages/
├── services/
├── App.jsx
└── main.jsx

back/
├── controllers/
├── models/
├── routes/
├── app.js
└── server.js
```

### Structure Overview

#### Frontend

* components/ – Reusable UI components, each with its own stylesheet
* hooks/ – Custom React hooks (form state management)
* pages/ – Home, product, cart and confirmation views
* services/ – API calls (Axios) and cart management (localStorage)
* App.jsx – Routing configuration
* main.jsx – Application entry point

#### Backend

* controllers/ – Product and order logic
* models/ – Product catalog stored in memory (no database)
* routes/ – Express API routes

---

## 📡 API Architecture

The frontend communicates with the backend through Axios, while the cart is stored locally in the browser.

```text
React component
        ↓
Service layer
   ↓           ↓
Axios      localStorage
   ↓
Express API
```

---

## 📊 Project Status

The project is complete and is no longer actively developed.

---

## 📝 Notes

The goal of the React rebuild was to practice:

* React components and hooks
* Client-side routing with React Router
* State management for a shopping cart
* API communication with Axios
* Separation of concerns between UI and services
