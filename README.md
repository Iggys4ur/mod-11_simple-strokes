
# [Module 11] Simple Strokes: Express.js Note Taker

## Overview

Simple Strokes is a web application that allows users to write, save, and manage notes efficiently. Built using Express.js, this application serves as a digital notebook for small business owners or anyone who needs to keep track of various notes. The application provides a user-friendly interface for creating and storing notes, and it saves all data to a JSON file on the server, making it easy to retrieve and manage notes over time.

## Features

- **Note Creation**: Users can write and save notes with a simple and intuitive interface.
- **Note Retrieval**: Previously saved notes can be viewed and accessed easily.
- **Data Persistence**: Notes are stored in a JSON file on the server, ensuring that they persist across sessions.
- **Express.js Backend**: A robust back end built with Express.js handles note saving and retrieval operations.

## Technologies Used

- **Express.js**: To create the server and manage routing for the application.
- **Node.js**: For running JavaScript on the server side.
- **JSON**: Used for storing note data.
- **HTML/CSS**: For the front-end interface of the application.
- **JavaScript**: For client-side interactivity.

## Installation

To install and run Simple Strokes locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Iggys4ur/mod-11_simple-strokes.git
   ```
2. Navigate to the project directory:
   ```bash
   cd simple-strokes
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server using Node.js:
   ```bash
   node server.js
   ```
2. Open your web browser and navigate to:
   ```plaintext
   http://localhost:3000
   ```
3. Use the interface to create, save, and manage your notes.

## User Story

```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- Thanks to the Express.js community for providing resources and tools that made building this application possible.
- Special thanks to all contributors who provided feedback and support during the development of Simple Strokes.
