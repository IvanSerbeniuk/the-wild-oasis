# The Wild Oasis

[Wild Oasis website](https://oasis-booking-online.netlify.app/dashboard)

A modern booking management platform built with **React**, **Vite**, and **Supabase**, deployed on **Netlify**.

![Demo of The Wild Oasis](https://imgur.com/a/ggVT5lN)

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## About

**The Wild Oasis** is a booking platform designed to manage cabins, users, and reservations efficiently.  
Provide a short description of the purpose of your project here.

---

## Features

- User authentication and profile management
- Booking management (create, update, delete bookings)
- Cabin management (add, edit, view cabins)
- Dashboard with statistics (bookings, sales, etc.)
- Upload sample data for testing
- Responsive UI with sidebar navigation

---

## Technologies

- **Frontend**: React, Vite, JSX
- **Backend / Database**: Supabase (PostgreSQL)
- **Hosting**: Netlify
- **Styling**: CSS Modules / Styled Components
- **Utilities**: Axios / Fetch, Custom hooks, Context API

---

## Project Structure

```bash
src/
├── App.jsx # Main application component
├── main.jsx # Entry point
├── context/ # React context providers
├── data/ # Static/sample data
├── features/ # Feature-specific components
├── hooks/ # Custom React hooks
├── pages/ # Page components (Dashboard, Bookings, Users)
├── services/ # API services, Supabase integration
├── styles/ # Global and modular styles
├── ui/ # Reusable UI components (buttons, cards)
└── utils/ # Utility functions
```

Other important files:

- `index.html` – main HTML file
- `package.json` – project dependencies
- `vite.config.js` – Vite configuration
- `netlify.toml` – Netlify deployment settings

---

## Environment Variables

Create a `.env` file in the root folder with:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_key
```
⚠️ Never commit .env with secret keys. Use Netlify Environment Variables for deployment.

--- 

scInstallation
Clone the repository:
```
git clone https://github.com/yourusername/the-wild-oasis.git
cd the-wild-oasis
```

Install dependencies:
```
npm install
```
Create .env file with your Supabase credentials (see above).

--- 

##  Usage

Start the development server:
```
npm run dev
```
Open http://localhost:5173
 in your browser.

Build for production:
```
npm run build
```
Preview the production build locally:
```
npm run preview
```
--- 
##  Deployment

Deployed on **Netlify**:

1. Add the project to Netlify
2. Set environment variables (`VITE_SUPABASE_URL` and `VITE_SUPABASE_KEY`)
3. Trigger deployment

## Contributing

1. Fork the repository
2. Create a feature branch:

```bash
git checkout -b feature/xyz
```
3. Commit your changes:
```
git commit -m "Add feature"
```
4. Push to the branch:
```
git push origin feature/xyz
```