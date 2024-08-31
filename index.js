require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;

//for json data
const githubData=
    {
        "name": "Saurabh Kumar",
        "age": 25,
        "email": "saurabhkr.student.com",
        "occupation": "Student",
        "interests": [
          "Backend Logic Building",
          "Machine Learning",
          "Data Analysis",
          "Low Level Development"
        ],
        "projects": [
          {
            "name": "CGPA Calculator",
            "description": "A web application to calculate CGPA for students.",
            "technologies": ["HTML", "CSS", "JavaScript"]
          },
          
          {
            "name": "Expense Tracker",
            "description": "A web app for tracking expenses and managing pocket money.",
            "technologies": ["JavaScript", "Node.js", "Express"]
          }
        ],
        "goals": [
          "Become a Data Analyst",
          "Transition to ML Engineer",
          "Become a DevOps Engineer"
        ]
      }
      

app.get("/", (req, res) => {
  res.send("Hello!Saurabh");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at B6IX</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>Welcome to chai aur code</h2>");
});

//for json file on server
app.get("/github", (req, res) => {
    res.json(githubData);
  });

//to access .env file
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
