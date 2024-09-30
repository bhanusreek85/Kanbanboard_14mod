# Kanbanboard_14mod
Kanban board using JWT Token

## Table of Contents

- Features
- Installation

- Usage
- [API Endpoints](#api-endpoints)
- Authentication
- Contributing
- License

## Features

- User authentication (login/logout)
- Create, edit, and delete tickets
- Assign tickets to different statuses
- View all tickets in a Kanban board layout

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (for backend)

### Backend Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/kanbanboard.git
   cd kanbanboard/server

2.  Install dependencies:

    ```npm install```


3.  Create a .env file in the server directory and add the following environment variables:
*   PORT
*   DB_URI
*   JWT_SECRET_KEY

4.  Start the application

    ```npm run start```

### Usage
### Creating a Ticket

1. Click on the "New Ticket" button.
2. Fill in the ticket details (name, description, status, assigned user).
3. Click "Submit" to create the ticket.

### Editing a Ticket

1. Click on the ticket you want to edit.
2. Update the ticket details.
3. Click "Save" to update the ticket.

### Deleting a Ticket

1. Click on the ticket you want to delete.
2. Click the "Delete" button.

API Endpoints
Tickets
GET /api/tickets/: Retrieve all tickets.
GET /api/tickets/:id: Retrieve a single ticket by ID.
POST /api/tickets/: Create a new ticket.
PUT /api/tickets/:id: Update an existing ticket by ID.
DELETE /api/tickets/:id: Delete a ticket by ID.
Authentication
POST /api/auth/login: Log in a user.

### Authentication
The application uses JWT (JSON Web Tokens) for authentication. The token is stored in local storage and is included in the Authorization header for API requests.

Example of Including JWT in API Requests
### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.


## License
This project is licensed under the MIT License. See the LICENSE file for details.


