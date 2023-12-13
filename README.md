
# SunbaseData Project README

# Introduction

This project is developed using Spring Boot for the backend and React for the frontend. The aim of this project is to provide a platform for managing customer information with functionalities such as viewing, updating, deleting, adding customers, and user authentication (login and signup).

# Project Structure

The project is divided into two main components: the backend (Spring Boot) and the frontend (React).
Backend (Spring Boot)
The backend is responsible for handling API requests related to customer management and user authentication. The backend folder structure may look like the following:
Copy code
/sunbasedata-backend
|-- src
|   |-- main
|       |-- java
|           |-- com
|               |-- chinmay
|                   |-- customer
|                       |-- controller
|                       |-- entity
|                       |-- repository
|                       |-- service,serviceimplementation
|                       |-- PracticeSpringBootapplication.java
|-- pom.xml

# Frontend (React)

The frontend is responsible for providing a user interface to interact with the customer data and authentication features. The frontend folder structure may look like the following:
Copy code
/CustomerRestApiFrontend
|-- src
|   |-- components
|   |-- App.js
|   |-- index.js
|-- public
|-- package.json
|-- README.md
Before running the React app, make sure to install the required dependencies. 

# You can do this by navigating to the frontend directory using the following commands:
bash
Copy code
cd .\customer\
npm start 
This will start the development server, and you can access the application by visiting http://localhost:3000 in your web browser.
Running the Application

# Backend (Spring Boot)

Make sure you have Java and Maven installed. 

# Navigate to the backend directory and run the following commands:
bash
Copy code
cd CustomerRestapiBackend
mvn spring-boot:run
Backend will run on port number 8080 as i specified it in the code 
Frontend (React)
