const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const connectDB = require('./config/db')
connectDB()
const userRoutes = require('./routes/auth.routes')
app.use('/user', userRoutes)

// res.send

// app.get("/", (req, res) => {
//   res.send("Backend is working");
// });

// //req.query

// app.get("/profile", (req, res) => {
//   const { name, age, address } = req.query;
//   res.send(`Hello I am ${name}, and I'm ${age} year old, I am from ${address}`);
// });

// //

// app.get("/user", (req, res) => {
//   const { name, city } = req.query;

//   if (name && city) {
//     return res.send(`I am ${name} from ${city}`);
//   } else if (name) {
//     return res.send(`I am ${name}`);
//   } else if (city) {
//     return res.send(`From ${city}`);
//   } else {
//     res.send("All user");
//   }
// });

// //req.params

// app.get("/user/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send("User id is" + " " + userId);
// });


// app.get("/product/:category/:id", (req, res) => {
//   const { category, id } = req.params;
//   res.send(`Category ${category} Product Id ${id}`);
// });

// app.get("/student/:name/:age", (req, res) => {
//   const { name, age } = req.params;
//   res.send(`Name: ${name} Age: ${age}`);
// });


// app.post("/login", (req, res) => {
//   console.log(req.body);
//   res.send("Login route working");
// });


app.listen(port, () => {
  console.log(`Server is runnig on ${port}`);
});