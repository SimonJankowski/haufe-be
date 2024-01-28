# Rick and Morty Backend

This is the backend for the Rick and Morty application, serving data from the [Rick and Morty API](https://rickandmortyapi.com) to the frontend.

## Getting Started

To run the application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies: `npm install`
4. Start the application:
   - For development (with hot reload): `npm run start`
   - Alternatively, you can use: `node server.js`

## Dependencies

- `axios`: Used for making HTTP requests to external APIs (Rick and Morty API).
- `bcrypt`: Provides secure hashing for storing and comparing user passwords.
- `cors`: Enables Cross-Origin Resource Sharing (CORS) for handling API requests from different origins.
- `dotenv`: Loads environment variables from `.env` files for better configuration management.
- `express`: A minimal and flexible Node.js web application framework for building the API endpoints.
- `jsonwebtoken`: Used to generate and verify JWT tokens for secure user authentication.
- `mongoose`: Provides a straight-forward, schema-based solution to model application data in MongoDB.

## Author

Simon Jankowski
