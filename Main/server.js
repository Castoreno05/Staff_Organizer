// Need express to be imported
const express = require("express");
// Need mysql2
const mysql = require("mysql2");

// Enable a port and access to express in a variable
const PORT = process.env.PORT || 9001;
const app = express();

// Middleware for express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Need to connect to the database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    // password is used for this account. If your connection
    // requires a password please insert here
    password: "I69@WdHOH)(E1[E",
    database: "staff_db",
  },
  console.log("You have been connected to the staff_database.")
);
