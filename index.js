require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

connectDB();

const app = express();

app.use(express.json());

app.use(cors());

// app.use(
//   cors({
//     // origin: ["http://localhost:3000", "https://filter-app.onrender.com"],
//     origin: ["https://filter-app.onrender.com"],
//   })
// );

app.use("/api/bootcamps", require("./routes/bootcampRoutes"));

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
