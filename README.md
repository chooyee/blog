
# Blog/Journal Web Application

Simple blog web application with independant frontend and backend.

---

## Frontend

The frontend can be built using **HTML/CSS/Vanilla JavaScript** or a lightweight framework like **Next.js** or **React**.

### Key Features:

* **Display Blog Posts:** Show a list of all available blog posts.
* **Create New Posts:** Provide a form for users to create new posts, including fields for:
    * **Title**
    * **Content**
    * **Author**
* **Individual Post View:** Allow users to view a single blog post in detail.
* **Basic Markdown Rendering:** Implement client-side rendering of Markdown content (a client-side Markdown library can be utilized for this).
* **(Optional) User Authentication:** Include simple user registration and login forms to manage access.

### Key Frontend Learning Outcomes:

* Designing and implementing **more complex UI layouts**.
* Understanding and utilizing **client-side routing** (if a framework is used).
* Effectively handling **forms with various input types**.
* Displaying and rendering **rich text content**.

---

## Backend (Express.js & Node.js)

The backend will be powered by **Express.js** and **Node.js**, providing robust API functionality.

### API Endpoints:

The following **CRUD (Create, Read, Update, Delete)** operations will be exposed via API endpoints for managing blog posts:

* `GET /api/posts`: Retrieve a list of all blog posts.
* `GET /api/posts/:slug` (or `:id`): Retrieve a single blog post by its slug or ID.
* `POST /api/posts`: Create a new blog post.
* `PUT /api/posts/:id`: Update an existing blog post by its ID.
* `DELETE /api/posts/:id`: Delete a blog post by its ID.

### Data Storage:

A proper database will be introduced for persistent data storage, crucial for handling complex data and relationships. Recommended options include:

* **MongoDB** (using Mongoose as an ODM - Object Data Modeling library)
* **PostgreSQL** (using Sequelize as ORMs - Object-Relational Mappers)

### Middleware:

Middleware functions will be implemented to enhance API functionality and security:

* **Body Parsing:**
    * `express.json()`: Parses incoming requests with JSON payloads.
    * `express.urlencoded()`: Parses incoming requests with URL-encoded payloads.
* **Authentication (Optional but Highly Recommended):** Implement a method to restrict who can create or edit posts. Examples include:
    * **Basic token-based authentication** (e.g., JSON Web Tokens - JWT)
    * **Session-based authentication**
    * This demonstrates how the backend secures data.
* **Markdown Processing:** Utilize a **server-side Markdown parser** (e.g., `marked` or `markdown-it`) to convert Markdown content to HTML before storing it in the database or sending it to the frontend.

### Key Backend Learning Outcomes:

* Integrating with and managing **database connections**.
* Working with **ORMs/ODMs** for simplified database interactions.
* Building **more structured and robust APIs**.
* Understanding and applying **middleware concepts** (authentication, parsing, data formatting).
* Implementing **more robust error handling** mechanisms.