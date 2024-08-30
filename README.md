

# Real-Time Device Tracker

## Overview

This Real-Time Device Tracker is a web application that allows users to track device locations in real-time using modern web technologies. Built with Express, Node.js, and Socket.io, this application provides live updates on device locations displayed on an interactive map.

## Features

- **Real-Time Location Tracking**: Tracks device locations and updates them live on the map.
- **Interactive Map**: Utilizes Leaflet to render a map where device locations are plotted.
- **Socket.io Integration**: Uses WebSocket for real-time communication between server and clients.
- **Responsive Design**: Ensures the map is responsive and displays correctly across different devices.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side logic.
- **Express**: Web application framework for Node.js to handle HTTP requests.
- **Socket.io**: Enables real-time, bidirectional communication between clients and the server.
- **Leaflet**: Library for interactive maps.
- **EJS**: Templating engine to render HTML on the server-side.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name
   ```

2. **Install Dependencies**

   Make sure you have [Node.js](https://nodejs.org/) installed. Run the following command to install all required dependencies:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   If you have any environment-specific configurations, create a `.env` file in the root directory and add your configurations. For example:

   ```env
   PORT=3000
   ```

4. **Run the Application**

   Start the server with:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

1. **Open the Application**

   Open a web browser and navigate to `http://localhost:3000` to view the real-time tracking interface.

2. **Grant Location Access**

   When prompted, allow the application to access your location. This enables the tracking feature.

3. **View Real-Time Tracking**

   The map will display your device’s location and update it in real-time as you move.

## Project Structure

- **`public/`**: Contains static assets like CSS and JavaScript files.
- **`views/`**: Contains EJS templates for rendering HTML.
- **`server.js`**: Entry point of the application, sets up Express, Socket.io, and starts the server.
- **`.gitignore`**: Specifies files and directories to ignore in version control.
- **`package.json`**: Lists project dependencies and scripts.

## Contributing

Feel free to fork the repository and submit pull requests. For any issues or feature requests, please open an issue on the [GitHub repository](https://github.com/godhuli11/Real_Time_Device_Tracker/issues).

## License

This project is licensed under the [MIT License](LICENSE).

-
