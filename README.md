# Book-Management-System
This is a Book Management System built using Node.js, Express, and HTML/CSS. It allows users to manage and search for books, view reviews, and perform CRUD operations on book reviews. The system is designed to be simple, efficient, and user-friendly.

Features
General Users
1. Get All Books: View a list of all available books.
2. Get Book by ISBN: Search for a specific book using its ISBN.
3. Get Books by Author: Find all books written by a specific author.
4. Get Books by Title: Search for books by their title.
5. Get Book Reviews: View reviews for a specific book.

Registered Users
1. Add/Modify Book Reviews: Add or update reviews for a book.
2. Delete Book Reviews: Remove reviews added by the user.

Technologies Used
1. Backend: Node.js, Express.js
2. Frontend: HTML, CSS, JavaScript (for dynamic content)
3. Data Storage: JSON file (books.json) for storing book data.
4. Tools: Axios (for async/await and promises), Postman (for API testing)

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
1. Node.js: Make sure Node.js is installed on your machine.
2. Git: Optional, for cloning the repository.

Steps to Run
1. Clone the Repository: git clone https://github.com/JaiUghade/book-management-system.git
cd book-management-system
2. Install Dependencies: npm install
3. Start Server: node app.js
4. Access the Application:
   i. Open your browser and go to: http://localhost:3000
   ii. Use the following pages:
        a. Dashboard: http://localhost:3000
        b. Search by ISBN: http://localhost:3000/isbn.html
        c. Search by Author: http://localhost:3000/author.html
   
