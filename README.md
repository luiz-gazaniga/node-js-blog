# Node Blog MVC

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview
This is a web application built with Node.js, Express, and MongoDB. It provides a solid foundation for building high-quality web applications using the most popular server-side framework - Node.js. The application incorporates various features and technologies to enhance the development process and deliver a seamless user experience.

## Libraries
- **Node.js**: Utilize the power of Node.js to build scalable and efficient server-side applications.
- **Express Framework**: Benefit from the widely adopted Express framework to create robust and feature-rich web servers.
- **Mongoose ODM**: Communicate with the MongoDB database seamlessly using the Mongoose Object-Data Modeling (ODM) library.
- **Express Sessions**: Implement user sessions to enable stateful interactions with the application.
- **Mongoose Data Validation**: Ensure the integrity of data by applying validation rules using Mongoose.
- **Express Middleware & Request Interception**: Customize the request and response flow using middleware and interception techniques in Express.
- **User Authentication and Authorization**: Secure the application by implementing user authentication and authorization features.
- **Dynamic Views with Templating Engines**: Generate dynamic HTML views using templating engines in Node.js.
- **Model-View-Controller (MVC) Design Pattern**: Follow the MVC pattern for a structured and maintainable codebase.
- **Password Security and Hashing**: Safeguard user passwords using secure hashing techniques.
- **Mongoose Model Hooks**: Execute predefined actions before or after specific events on MongoDB models.

## Database
- **MongoDB**: Store and manage application data using MongoDB, a popular NoSQL database.

## Concepts
- Build high-quality web applications using Node.js, Express, and MongoDB.
- Store and retrieve data using the MongoDB database.
- Harness the latest features of ES6/ES7 JavaScript.
- Create robust Express web servers.
- Implement user sessions and authentication in Node.js applications.
- Interact with the MongoDB database using the Mongoose Object-Data Modeling (ODM) library.

## Prerequisites
- MongoDB
- Docker.

## Install
```
> npm install 
```

## Test
```
> npm test 
```

## Run Local
1. Create an account on Cloudinary.
2. Access the dashboard.
3. Create an `.env` file in the root folder.
4. Fill it with the following information:
```
CLOUDINARY_NAME=[CLOUDINARY_NAME]
CLOUDINARY_API_KEY=[CLOUDINARY_API_KEY]
CLOUDINARY_API_SECRET=[CLOUDINARY_API_SECRET]
EXPRESS_SESSION_KEY=[EXPRESS_SESSION_KEY] ////Can use any key
DB_URI=mongodb://localhost/node-js-blog
PORT=4000
```
5. Run
```
> npm start
```

## docker-compose
1. Create an account on https://cloudinary.com/
2. Access the dashboard.
3. Open the file `docker-compose.yml`.
4. Replace the envoriments variables with the information of the Cloudinary
```
- CLOUDINARY_NAME=[CLOUDINARY_NAME]
- CLOUDINARY_API_KEY=[CLOUDINARY_API_KEY]
- CLOUDINARY_API_SECRET=[EXPRESS_SESSION_KEY] //Can use any key
- EXPRESS_SESSION_KEY=RANDOM
```
5. Run docker-compose up -d

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
