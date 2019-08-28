import express from "express";
import path from "path";

const PORT = 3000;
const app = express();

const projectPath = __dirname;

// Static path
// app.use("/assets", express.static(path.join(projectPath, "src/public")));
app.use("/build", express.static(path.join(projectPath, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(projectPath, "build/index.html"));
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});