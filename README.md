# Simple CRUD App

A basic Node.js REST API for managing products with MongoDB.

## Features

- Create, read, update, and delete products
- MongoDB integration with Mongoose
- Express.js web framework

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with your MongoDB connection:
   ```
   CONNECTION_URL=your_mongodb_connection_string
   PORT=3000
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

- `POST /api/products/add` - Add a new product
- `GET /api/products/getAll` - Get all products
- `GET /api/products/getSingle/:id` - Get a single product
- `PUT /api/products/update/:id` - Update a product
- `DELETE /api/products/delete/:id` - Delete a product

## Product Schema

```json
{
  "name": "string (required)",
  "quantity": "number (default: 0)",
  "price": "number (default: 0)",
  "image": "string (optional)"
}
```

## Testing

Use the `.http` files in the `api_tests` folder to test endpoints with REST clients like VS Code REST Client extension.
