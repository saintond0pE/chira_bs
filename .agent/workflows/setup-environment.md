---
description: Setup environment variables and Firebase configuration
---

# Environment and Firebase Setup Workflow

This workflow guides you through setting up the required environment variables and Firebase configuration for the chira_be backend application.

## Prerequisites

- Node.js and npm installed
- Firebase project created (if using Firebase services)
- MongoDB connection string available

## Steps

### 1. Create Environment Variables File

Create a `.env` file in the root directory (`c:\Users\Chirasubramanya S\chira_be\.env`) with the following variables:

```env
# MongoDB Configuration
MONGODB_URI=your_mongodb_connection_string

# Server Configuration
PORT=3000
NODE_ENV=development

# Firebase Configuration (if applicable)
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

# Other API Keys (add as needed)
```

### 2. Create src/.env File (if needed)

If your application requires a separate environment file in the `src` directory, create `src/.env` with the necessary configuration variables.

### 3. Configure Firebase (`src/firebase.js`)

The `src/firebase.js` file is the central configuration file for Firebase services. It initializes Firebase and exports the necessary services for use throughout your application.

**File Location:** `c:\Users\Chirasubramanya S\chira_be\src\firebase.js`

**Complete Implementation:**

```javascript
// Firebase Configuration and Initialization
const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { getFirestore } = require('firebase/firestore');
const { getStorage } = require('firebase/storage');

// Load environment variables
require('dotenv').config();

// Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
let app;
let auth;
let db;
let storage;

try {
  app = initializeApp(firebaseConfig);
  
  // Initialize Firebase services
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
  
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Error initializing Firebase:', error.message);
}

// Export Firebase services
module.exports = {
  app,
  auth,
  db,
  storage
};
```

**Key Features:**

- ✅ Loads environment variables using `dotenv`
- ✅ Initializes Firebase app with configuration from `.env`
- ✅ Sets up Authentication, Firestore, and Storage services
- ✅ Includes error handling for initialization failures
- ✅ Exports all services for use in other modules

**Usage Example:**

```javascript
// In your controllers or services
const { auth, db, storage } = require('./firebase');

// Use Firestore
const usersRef = db.collection('users');

// Use Authentication
const user = auth.currentUser;

// Use Storage
const storageRef = storage.ref();
```

### 4. Verify .gitignore Configuration

Ensure that `.env` files are listed in `.gitignore` to prevent committing sensitive information:

```gitignore
.env
src/.env
.env.local
.env.*.local
```

// turbo

### 5. Install Required Dependencies

```bash
npm install dotenv firebase
```

// turbo

### 6. Verify Environment Loading

Check that your `index.js` or main entry point loads the environment variables:

```bash
node -e "require('dotenv').config(); console.log('Environment loaded:', process.env.PORT ? 'SUCCESS' : 'FAILED')"
```

### 7. Test the Application

// turbo
Start the development server to verify everything is configured correctly:

```bash
npm run dev
```

## Important Notes

- **Never commit `.env` files** to version control
- Create a `.env.example` file with placeholder values for team reference
- Keep Firebase credentials secure and rotate them if exposed
- Use different Firebase projects for development and production environments

## Troubleshooting

- If environment variables aren't loading, ensure `dotenv` is configured at the top of your entry file
- Verify Firebase configuration values match your Firebase console settings
- Check that all required environment variables are defined
