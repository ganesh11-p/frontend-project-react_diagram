# Simple Diagram Dashboard (React)

## Project Overview

This project is a **Simple Diagram Dashboard built using React**.
The application allows users to upload a diagram image and view a list of circuit components in a sidebar.

The main goal of this project is to demonstrate **React fundamentals, component structure, and basic UI layout**.

---

## Features

### 1. Upload Diagram

Users can upload an image file (PNG or JPG).

* Upload diagram image
* Preview uploaded image
* Replace uploaded image

### 2. Diagram Viewer

The uploaded diagram is displayed in a viewer panel.

Controls available:

* Zoom In
* Zoom Out
* Reset view

### 3. Components List

A sidebar displays a list of circuit components.

Example components:

* Resistor
* Capacitor
* Diode
* Transistor

When a component is clicked, it is **highlighted in the list**.

### 4. Dashboard Layout

The dashboard contains:

* Upload section at the top
* Diagram viewer on the left
* Components list on the right

The layout is implemented using **flexbox**.

---

## Technologies Used

* React.js (Functional Components)
* React Hooks (useState)
* HTML5
* CSS3
* JavaScript (ES6)

---

## Project Structure

```
src
 ├── components
 │   ├── UploadBox.js
 │   ├── DiagramViewer.js
 │   ├── ComponentList.js
 │
 ├── pages
 │   └── Dashboard.js
 │
 ├── services
 │   └── api.js
 │
 ├── App.js
 └── index.js
```

### Folder Explanation

* **components/** – Reusable UI components
* **pages/** – Main application pages
* **services/** – Mock API data
* **App.js** – Root React component
* **index.js** – Application entry point

### ScreenShot

![Dashboard Screenshot](./screenshot/dashboard.png)

---

## Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```
[git clone https://github.com/yourusername/diagram-dashboard.git](https://github.com/ganesh11-p/frontend-project-react_diagram.git)
```

### 2. Navigate to the project folder

```
cd diagram-dashboard
```

### 3. Install dependencies

```
npm install
```

### 4. Start the development server

```
npm start
```

The application will run at:

```
http://localhost:3000
```

---

## Usage

1. Open the application in your browser.
2. Upload a diagram image.
3. The image will appear in the diagram viewer.
4. Use **Zoom In / Zoom Out / Reset** buttons to control the view.
5. Click a component from the sidebar to highlight it.

---

## Future Improvements

Possible enhancements:

* Highlight components directly on the diagram
* Drag and drop image upload
* Add real API integration
* Improve UI design
* Add responsive mobile layout

---

## 

Ganesh Pedapati
Software Developer
GitHub: https://github.com/ganesh11-p
