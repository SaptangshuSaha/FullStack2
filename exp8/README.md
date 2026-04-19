# JWT Authentication Frontend Integration

## Objective
To integrate a React frontend with JWT-based backend APIs and implement session-based authentication.

## Tech Stack
- React.js
- Bootstrap
- Axios
- Node.js (Backend)
- JWT Authentication

## Features
- User login using API
- JWT stored in sessionStorage
- Protected routes using token
- Fetch protected data
- Logout functionality

## Working
1. User logs in via /login API
2. Backend returns JWT token
3. Token stored in sessionStorage
4. Dashboard uses token to access /protected API
5. Unauthorized users are redirected to login
6. Logout clears session

## Conclusion
Successfully implemented secure session-based authentication using JWT with React frontend.