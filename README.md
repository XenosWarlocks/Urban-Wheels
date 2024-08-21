![Logo](assests/images/urban-wheels-logo.jpg)

# Urban Wheels

Urban Wheels is a full-stack mobile application built as an Uber clone. This project leverages modern technologies to create a seamless, responsive, and feature-rich mobile app experience. The primary goal is to showcase the developer's proficiency in full-stack mobile development.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **React Native** for building a cross-platform mobile application with a smooth and responsive user interface.
- **Google Maps** integration for real-time map rendering, location tracking, and directions.
- **Stripe** for secure and reliable payment processing.
- **Serverless Postgres** for managing the application's data with a scalable and efficient database solution.
- **TailwindCSS** for clean, responsive, and customizable styling.

## Tech Stack

- **React Native:** Handles the user interface, providing a native-like experience on both iOS and Android.
- **Google Maps API:** Renders maps and provides real-time directions and location tracking.
- **Stripe API:** Manages payments within the app, ensuring secure transactions.
- **Serverless Postgres:** A scalable database solution that stores and manages user and transaction data.
- **TailwindCSS:** Applies utility-first styling to create a responsive and modern user interface.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/YourUsername/Urban-Wheels.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Urban-Wheels
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Set up the environment variables:

    Create a `.env` file in the root directory and add your API keys and configuration settings.

    ```bash
    GOOGLE_MAPS_API_KEY=your-google-maps-api-key
    STRIPE_API_KEY=your-stripe-api-key
    POSTGRES_CONNECTION_STRING=your-postgres-connection-string
    ```

5. Start the application:

    ```bash
    npm run start
    ```

## Usage

After setting up the project, you can run it on your preferred mobile platform (iOS or Android). The application provides a full Uber-like experience with map navigation, ride requests, and payment processing.

## Contributing

Contributions are welcome! If you'd like to contribute to Urban Wheels, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add YourFeature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

## License

Urban Wheels is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
