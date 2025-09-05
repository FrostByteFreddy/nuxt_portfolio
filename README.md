# Personal Portfolio Website

This is my personal portfolio, built with [Nuxt 3](https://nuxt.com/) and styled with Sass. The project is set up to be a fully static site, generated and deployed via a GitHub Actions workflow.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/FrostByteFreddy/nuxt_portfolio.git
    ```

2.  **Install dependencies:**
    Navigate into the project directory and install the necessary packages.
    ```bash
    cd nuxt_portfolio
    npm install
    ```

3.  **Run the development server:**
    This command will start a hot-reloading server, usually at `http://localhost:3000`.
    ```bash
    npm run dev
    ```

## Available Scripts

-   `npm run dev`: Starts the development server with hot-reloading.
-   `npm run build`: Creates a production-ready build of the application.
-   `npm run generate`: Builds the app and generates a fully static version in the `.output/public` directory.
-   `npm run start`: Starts the production server (after running `npm run build`).

## Key Project Directories

This project uses the standard Nuxt 3 folder structure. Here are the most important ones:

-   **/assets**: Contains all the project's Sass files and fonts. These are processed and bundled by Vite during the build.
-   **/components**: Holds reusable Vue components like the Navbar and Footer, which are auto-imported where needed.
-   **/contentelements**: A custom directory for larger, content-focused components like the Hero section or TextMedia blocks.
-   **/layouts**: Defines the main layouts for the application, such as the default page structure.
-   **/pages**: Contains the main pages of the site. Nuxt automatically creates routes based on the file names in this directory.
-   **/public**: Stores static assets that are copied directly to the final build output, such as images, favicons, and `site.webmanifest`.
