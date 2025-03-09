# Book-Management-System
This is a Book Management System built using Node.js, Express, and HTML/CSS. It allows users to manage and search for books, view reviews, and perform CRUD operations on book reviews. The system is designed to be simple, efficient, and user-friendly.

Features
General Users
Get All Books: View a list of all available books.

Get Book by ISBN: Search for a specific book using its ISBN.

Get Books by Author: Find all books written by a specific author.

Get Books by Title: Search for books by their title.

Get Book Reviews: View reviews for a specific book.

Registered Users
Add/Modify Book Reviews: Add or update reviews for a book.

Delete Book Reviews: Remove reviews added by the user.

Technologies Used
Backend:

Node.js

Express.js

Frontend:

HTML

CSS

JavaScript (for dynamic content)

Data Storage:

JSON file (books.json) for storing book data.

Tools:

Axios (for async/await and promises)

Postman (for API testing)

#Project Structure
book-management-system/
├── data/
│   └── books.json           # Stores book data
├── public/                  # Static files (HTML, CSS)
│   ├── index.html           # Dashboard (All Books)
│   ├── isbn.html            # Search by ISBN
│   └── author.html          # Search by Author
├── routes/
│   └── bookRoutes.js        # Handles book-related routes
├── app.js                   # Main application file
├── package.json             # Project dependencies
└── README.md                # Project documentation

How to Run the Project
Prerequisites
Node.js: Make sure Node.js is installed on your machine.

Git: Optional, for cloning the repository.
