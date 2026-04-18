const express = require('express');
const app = express();

// import route
const furnitureRoutes = require("./furnitureRoutes");

// IMPORTANT LINE 👇
app.use("/furniture", furnitureRoutes);

app.get("/", (req, res) => {
    res.send("Homepage Working");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
