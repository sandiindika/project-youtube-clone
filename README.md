# YouTube Video Recommendation App

This project is a YouTube Video Recommendation App built with React and Vite. It fetches and displays a list of recommended videos based on a given category ID using the YouTube Data API.

Live preview [click this](https://sans-yt.vercel.app/).

## Features

- Fetches and displays a list of recommended videos.
- Uses React Router for navigation.
- Displays video thumbnails, titles, channel names, and view counts.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

- Node.js (12+)
- npm (6+)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/sandiindika/project-youtube-clone.git
   ```

2. Navigate to the project directory:

    ```sh
    cd project-youtube-clone
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

### Running the Development Server

To start the development server, run:

```sh
npm run dev
```

This will start the Vite development server and you can view the app in your browser at `http://localhost:[xxxx]`.

### Building for Production

To build the project for production, run:

```sh
npm run build
```

This will create a `dist` directory with the production build of the app.

### Linting

To check the codebase for potential errors and style issues, run:

```sh
npm run lint
```

To automatically fix linting issues, run:

```sh
npm run lint:fix
```

## Environment Variables

This project uses the YouTube Data API. You need to set up an API key in a `.env` file at the root of the project:

```sh
VITE_API_KEY=your_youtube_data_api_key
```

To get a YouTube Data API key, follow these steps:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).

2. Create a new project or select an existing project.

3. Enable the YouTube Data API v3 for your project.

4. Create credentials (API key) for the YouTube Data API.

5. Copy the API key and add it to the `.env` file as shown above.

## Project Structure

- `src`: Main source code directory.

    - `components`: Contains UI components.

    - `assets`: Contains static assets like images.

    - `App.jsx`: Main application component.

    - `index.css`: Main CSS file.

    - `main.jsx`: Entry point of the application.

- `public`: Contains static files.

- `vite.config.js`: Vite configuration file.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.
