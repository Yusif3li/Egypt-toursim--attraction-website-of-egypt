# 🌍 Egypt Tourism Web Platform

A comprehensive, fully responsive front-end web application designed to showcase Egypt's premier tourist attractions, tours, and hotels. 

This project demonstrates strong foundational Full-Stack concepts—such as state management, CRUD operations, and user authentication—implemented entirely on the client side using **Vanilla JavaScript** and the **Web Storage API**.

## 🚀 Tech Stack
* **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Styling & Layout:** CSS Flexbox/Grid, Bootstrap 5 (Utility classes)
* **Typography:** Google Fonts (Barlow)
* **Data Persistence:** LocalStorage API

## ✨ Key Features

* **Role-Based Admin Dashboard:** A dedicated, hidden admin panel (`admin.html`) that allows administrators to Add, Edit, Delete, and Search for hotel listings dynamically.
* **Client-Side Authentication:** Secure registration and sign-in workflows (`signIn.js`) utilizing rigorous Regex pattern matching for email and password validation before granting system access.
* **Persistent Data State:** All hotel data and user credentials are saved and retrieved via the browser's `localStorage`, simulating database persistence without a backend server.
* **Dynamic UI Components:** * Real-time search filtering with highlighted results.
  * Custom-built interactive image slider gallery (`gallery.js`).
* **Responsive Egyptian Branding:** A cohesive design system spanning 8 distinct pages, utilizing warm terracotta, teal, and gold color palettes inspired by Egyptian heritage.

---

## 🏗️ Architecture & Data Flow

Because this application relies on Vanilla JS rather than a heavy backend framework, the data flow is handled directly in the browser:
1. **Admin Input:** Administrators add hotel data (Name, Image, Description) via the dashboard.
2. **State Management:** The JavaScript engine parses this data into JSON and stores it persistently in the `localStorage` object.
3. **Dynamic Rendering:** When a user visits the *Hotels* or *Tours* pages, the DOM dynamically renders the content directly from the stored JSON arrays.
4. **User Access:** Users must register via the `sign-up` page (stored as an array of user objects in `localStorage`) and authenticate before booking or accessing restricted pages.
