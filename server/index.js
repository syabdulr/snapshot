import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// Import routes
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

// Initialize app
const app = express();

// For sending requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Routes and Middleware
app.use("/posts", postRoutes); // Each route start with /posts/route
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello to Memories API");
});
// Connect to DB
const CONNECTION_URL = 'mongodb+srv://abdulsyed:abdulsyed123@cluster0.y0bbics.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8082;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
