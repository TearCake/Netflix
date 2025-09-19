# StreamFlix - Netflix Clone

A full-stack Netflix clone built with React.js, Node.js, Express, and MongoDB. This application features user authentication, movie browsing, and a responsive UI that mimics Netflix's interface.

## 🚀 Features

- **User Authentication**: Register and login functionality with encrypted passwords
- **Responsive Design**: Netflix-like UI with modern CSS and SCSS
- **Movie/Series Browsing**: Browse through different categories and genres
- **Video Player**: Watch trailers and videos
- **Interactive Components**: Hover effects, sliders, and smooth animations
- **Profile Management**: User profiles with admin capabilities

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and development server
- **SCSS/Sass** - Styling
- **React Icons** - Icon library
- **Material-UI** - UI components

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Crypto-JS** - Password encryption
- **dotenv** - Environment variables

## 📁 Project Structure

```
├── api/                    # Backend server
│   ├── models/            # Database models
│   │   ├── User.js       # User model
│   │   ├── Movie.js      # Movie model
│   │   └── List.js       # List model
│   ├── routes/           # API routes
│   │   ├── auth.js       # Authentication routes
│   │   ├── users.js      # User routes
│   │   ├── movies.js     # Movie routes
│   │   └── lists.js      # List routes
│   ├── .env              # Environment variables
│   ├── index.js          # Server entry point
│   └── package.json      # Backend dependencies
├── client/               # Frontend application
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   │   ├── navbar/   # Navigation bar
│   │   │   ├── featured/ # Featured content section
│   │   │   └── list/     # Movie/series lists
│   │   ├── pages/        # Application pages
│   │   │   ├── home/     # Home page
│   │   │   ├── login/    # Login page
│   │   │   ├── register/ # Registration page
│   │   │   └── watch/    # Video player page
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Entry point
│   ├── index.html        # HTML template
│   ├── vite.config.js    # Vite configuration
│   └── package.json      # Frontend dependencies
├── .gitignore            # Git ignore file
└── package.json          # Root package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd netflix-fullstack
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Setup Backend**
   ```bash
   cd api
   npm install
   ```

4. **Setup Frontend**
   ```bash
   cd client
   npm install
   ```

5. **Environment Variables**
   
   Create a `.env` file in the `api` directory:
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/netflix
   PASSPHRASE=your-secret-passphrase
   ```

### Running the Application

1. **Start MongoDB** (if running locally)

2. **Start the Backend Server**
   ```bash
   cd api
   npm start
   ```
   Server will run on `http://localhost:3000`

3. **Start the Frontend Development Server**
   ```bash
   cd client
   npm run dev
   ```
   Client will run on `http://localhost:5173`

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login

### Request/Response Examples

**Register:**
```json
POST /api/auth/register
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Login:**
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

## 🎨 Components Overview

### Frontend Components

- **[`Navbar`](client/src/components/navbar/Navbar.jsx)** - Navigation with user profile and menu items
- **[`Featured`](client/src/components/featured/Featured.jsx)** - Hero section with featured content
- **[`List`](client/src/components/list/List.jsx)** - Horizontal scrollable movie/series lists
- **[`Listitem`](client/src/components/list/Listitem.jsx)** - Individual movie/series cards with hover effects

### Pages

- **[`Home`](client/src/pages/home/Home.jsx)** - Main dashboard with featured content and lists
- **[`Login`](client/src/pages/login/Login.jsx)** - User authentication page
- **[`Register`](client/src/pages/register/Resgister.jsx)** - User registration page
- **[`Watch`](client/src/pages/watch/Watch.jsx)** - Video player page

## 🔒 Security Features

- Password encryption using AES from Crypto-JS
- JWT tokens for secure authentication
- Environment variables for sensitive data
- Protected routes and admin capabilities

## 🎯 Key Features Implementation

### User Authentication
The authentication system uses encrypted passwords and JWT tokens. See [`auth.js`](api/routes/auth.js) for implementation details.

### Responsive Design
The UI is built with mobile-first approach using SCSS with CSS Grid and Flexbox for responsive layouts.

### Interactive UI
- Hover effects on movie cards
- Smooth transitions and animations
- Horizontal scrolling lists with navigation arrows

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or your preferred cloud database
2. Update `MONGODB_URI` in your environment variables
3. Deploy to platforms like Heroku, Railway, or Vercel

### Frontend Deployment
1. Build the production version:
   ```bash
   cd client
   npm run build
   ```
2. Deploy the `dist` folder to platforms like Netlify, Vercel, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes. Please respect Netflix's intellectual property and trademarks.

## 🙏 Acknowledgments

- Netflix for the design inspiration
- React and Node.js communities
- All open-source libraries used in this project

---

**Note:** This is a clone project for educational purposes only. It is not affiliated with Netflix Inc.
