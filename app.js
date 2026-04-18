const express = require('express');
const app = express();

// Serve static files FIRST
app.use(express.static('public'));

// Import route
const furnitureRoutes = require("./furnitureRoutes");

// Use furniture route
app.use("/furniture", furnitureRoutes);

// Homepage route
app.get("/", (req, res) => {
    res.send("Homepage Working 🚀");
});

// Start server (ONLY ONCE)
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
