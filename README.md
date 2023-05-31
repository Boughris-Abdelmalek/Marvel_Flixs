# The Marvelverse

**[Access the deployed app here!](https://the-marvelverse-phf66ixww-boughris-abdelmalek.vercel.app/)**

The Marvelverse is a full-stack application built with React, Redux Toolkit, and Styled Components on the frontend, and a proxy server for simplified API calls and caching on the backend. The app leverages the Marvel API to visualize various aspects of the Marvel universe, including comics, characters, events, series, and creators. It also provides a search functionality to easily find and explore different elements within the Marvel universe.

## Features

- Browse and visualize Marvel comics, characters, events, series, and creators.
- Search functionality to quickly find specific elements within the Marvel universe.
- Seamless integration with the Marvel API for up-to-date data.
- Proxy server implementation for simplified API calls from the client and caching of responses.
- Frontend built using React for a dynamic and interactive user experience.
- State management using Redux Toolkit for efficient data handling.
- Styling with Styled Components for a visually appealing and responsive UI.

## Installation

Follow these steps to set up and run the application:

1. Clone the repository: `git clone [<repository-url>](https://github.com/Boughris-Abdelmalek/The_Marvelverse.git)`
2. Navigate to the project directory: `cd The_Marvelverse`
3. Install the dependencies for the client:
   - Navigate to the client directory: `cd client`
   - Install the client dependencies: `npm install`
4. Create a `.env` file in the client directory and provide the following environment variable:
   - `VITE_API_BASE_URL`: Set it to "http://localhost:3000"
5. Install the dependencies for the server:
   - Navigate to the server directory: `cd ../server`
   - Install the server dependencies: `npm install`
6. Create a `.env` file in the server directory and provide the following environment variables:
   - `API_BASE_URL`: Set it to "https://gateway.marvel.com/v1/public"
   - `API_PUBLIC_KEY`: Your Marvel API public key
   - `API_PRIVATE_KEY`: Your Marvel API private key
   - `PORT`: Set it to 3000
7. Start the development server for both the client and server:
   - In the client directory: `npm run dev`
   - In the server directory: `npm start`
8. Open your browser and visit [http://localhost:5173] to view the app.

Please make sure to replace `<repository-url>` with the actual URL of your repository, and update the Marvel API public and private keys with your own keys.

If you have any issues or further questions, please feel free to ask.


## Usage

Once the application is running, you can:

- Explore various sections of the Marvelverse, such as comics, characters, events, series, and creators.
- Utilize the search functionality to find specific elements within the Marvel universe.
- Click on individual items to view more details and information.
- Enjoy a visually appealing and responsive user interface.
- Interact with the app seamlessly, thanks to the efficient state management provided by Redux Toolkit.

## Deployment

To deploy the app to a production environment, follow these steps:

1. Build the app: `npm run build`
2. The build folder will contain the optimized and minified production-ready code.
3. Deploy the contents of the build folder to your preferred hosting platform.

## Contributing

Contributions to The Marvelverse are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Make sure to follow the existing code style and guidelines.

## License

The Marvelverse is open-source and licensed under the [MIT License](LICENSE). Feel free to modify and distribute the code as per the license terms.

## Acknowledgments

The Marvelverse app relies on the Marvel API to provide its functionality. Special thanks to Marvel for providing the API and making it accessible to developers.

Thank you for using The Marvelverse! Enjoy exploring the Marvel universe in a visually captivating way.
