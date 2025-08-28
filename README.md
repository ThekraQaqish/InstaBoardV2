# Insta Board

## About
Insta-Board is a React app that displays user profile cards fetched from the Random User API.  
It includes interactive features like dark mode, email toggle, and infinite load more.

## Features
- Reusable `UserCard` component with props.
- Dynamic user list using Axios (`https://randomuser.me/api/?results=12`).
- "Load More" button to fetch additional users.
- Like button for each card (state managed with `useState`).
- Toggle to show/hide user email.
- **Dark Mode** toggle: changes the theme across all cards dynamically.
- Search filter by name.

## Challenges
Implementing **dark mode** was a bit tricky — passing the theme state down to each card and updating styles dynamically.

## Time Spent
Approximately **8 hours** to finish everything.

## How It Works
- `App.js`: Contains the main theme state and renders the main layout.
- `Team.js` / `UserList.js`: Fetches and manages user data, handles "Load More".
- `UserCard.js`: Displays individual user info with interactivity and dynamic styling.

## Setup
1. `npm install`
2. `npm start`

## Deployment
The app is deployed on GitHub Pages:  
[View Live Site](https://ThekraQaqish.github.io/InstaBoardV2)

---

Made with ❤️ using React
