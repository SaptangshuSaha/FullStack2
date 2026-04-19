# RBAC Frontend Integration (Experiment 9)

## Objective
To implement Role-Based Access Control (RBAC) using a React frontend with session-based authentication.

## Tech Stack
- React.js
- Bootstrap
- Axios
- Node.js Backend (RBAC)

## Features
- Login with username & password
- Role detection (USER / ADMIN)
- Separate dashboards for USER and ADMIN
- Role-based UI restriction
- Session storage for user credentials
- Secure API calls using Basic Authentication

## Working
1. User logs in using credentials
2. Backend verifies credentials
3. Role is determined (USER / ADMIN)
4. Role and credentials stored in sessionStorage
5. USER can access only user APIs
6. ADMIN can access all APIs
7. Unauthorized access is blocked
8. Logout clears session

## Conclusion
Successfully implemented frontend RBAC using React and session-based authentication with role-based access control.