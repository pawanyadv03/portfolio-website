<<<<<<< HEAD
# portfolio-website
=======
# DevOps/SRE Portfolio Website

This is a responsive personal portfolio website tailored for a DevOps/SRE Engineer, showcasing skills, projects, and providing a contact mechanism with a backend database for submissions.

## Features

*   **Responsive Design:** Built with React and Bootstrap for optimal viewing on various devices.
*   **DevOps/SRE Focused Content:** Tailored sections for relevant skills and projects.
*   **Profile Photo Section:** Dedicated area to display a professional profile picture.
*   **Interactive Chatbot:** A floating chatbot with customizable AI agent options (General AI, Technical Support, Sales Assistant, ChatGPT, Gemini).
*   **Contact Form with Database Integration:** A functional contact form that stores submissions in a SQLite database via a Node.js Express backend.
*   **Animated Sections:** Subtle fade-in animations for a smooth user experience.
*   **Reusable Components:** Optimized codebase using reusable React components (e.g., `ProjectCard`).

## Technologies Used

**Frontend:**
*   React.js
*   Bootstrap (for styling and responsiveness)
*   `react-awesome-reveal` (for scroll animations)
*   `react-tsparticles` & `tsparticles` (for interactive background - *currently disabled in Hero section but available*)
*   `react-icons` (for skill icons and chatbot icon)

**Backend:**
*   Node.js
*   Express.js (for API endpoints)
*   SQLite3 (for database storage)
*   `cors` (for handling Cross-Origin Resource Sharing)

## Setup Instructions

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:
*   Node.js (LTS version recommended)
*   npm (Node Package Manager - comes with Node.js)

### 1. Clone the Repository (if applicable)

If you haven't already, clone the project to your local machine:

```bash
git clone <your-repository-url>
cd portfolio-website
```

### 2. Install Dependencies

Navigate into the project directory and install frontend dependencies:

```bash
cd C:\Users\plove\portfolio-website
npm install
```

Then, navigate into the `backend` directory and install backend dependencies:

```bash
cd C:\Users\plove\portfolio-website\backend
npm install
```

### 3. Run the Backend Server

From the `backend` directory, start the Node.js server. This will also create the `submissions.db` SQLite database file if it doesn't exist.

```bash
cd C:\Users\plove\portfolio-website\backend
node server.js
```

The backend server will run on `http://localhost:3001`.

Note: cd backend && node server.js  */ this command will run the server in the backend directory


### 4. Run the Frontend Development Server

Open a **new terminal window**, navigate back to the root of the `portfolio-website` project, and start the React development server:

```bash
cd C:\Users\plove\portfolio-website
npm start
```

This will open the website in your browser at `http://localhost:3000`.

### 5. Building for Production

To create an optimized production build of the frontend:

```bash
cd C:\Users\plove\portfolio-website
npm run build
```

The production-ready files will be located in the `build` directory. You can serve them using a static server like `serve`:

```bash
npm install -g serve # Install serve globally if you haven't already
serve -s build
```

### 6. Viewing Database Submissions

To view the contact form submissions in a tabular format, ensure both your backend and frontend development servers are running, then open your browser and navigate to:

`http://localhost:3000/view_submissions.html`

## Customization

*   **Personal Details:** Update `src/components/Navigation.js` for your name and `src/components/Contact.js` for your email.
*   **Profile Photo:** Replace `public/Pawan_Passport_Size.jpg` with your own image and update the `src` attribute in `src/components/About.js`.
*   **About Me:** Edit the text content in `src/components/About.js`.
*   **Projects:** Modify the `projectsData` array in `src/components/Projects.js` to add, remove, or update your projects.
*   **Skills:** Adjust the `skills` array in `src/components/Skills.js` to reflect your expertise.
*   **Chatbot:** Customize the `selectedAgent` options and their responses in `src/components/Chatbot.js`.

## License

[Specify your license here, e.g., MIT License, Apache 2.0, etc.]



Containerization:
1. `Dockerfile.frontend`: Located in C:\Users\plove\portfolio-website\Dockerfile.frontend. This file defines
       the multi-stage build for your React frontend, first building the application and then serving the
      static files with Nginx.
   2. `Dockerfile.backend`: Located in C:\Users\plove\portfolio-website\backend\Dockerfile.backend. This file
      defines the multi-stage build for your Node.js backend, installing production dependencies and setting up
       the server.
   3. `docker-compose.yml`: Located in C:\Users\plove\portfolio-website\docker-compose.yml. This file
      orchestrates both the frontend and backend services, mapping ports and setting up a Docker volume for
      persistent backend data (including your SQLite database).

  To build and run your project using Docker Compose:

   1. Ensure Docker is running on your system.
   2. Open your terminal and navigate to the root directory of your project:


   1     cd C:\Users\plove\portfolio-website

   3. Build and run the containers in detached mode (in the background):

   1     docker-compose up --build -d


  Once the containers are running:


   * Your frontend will be accessible at http://localhost:80 (or just http://localhost).
   * Your backend API will be accessible at http://localhost:3001.
   * The SQLite database (submissions.db) will be stored persistently in a Docker volume named backend_data.

  To stop the containers:



   1 docker-compose down
>>>>>>> b9afd55 (g)
