import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/home", (req, res) => {
  res.render("index.ejs");
});
app.get("/cst", (req, res) => {
  res.render("cst.ejs");
});
app.get("/che", (req, res) => {
  res.render("che.ejs");
});
app.get("/me", (req, res) => {
  res.render("me.ejs");
});
app.get("/faculty", (req, res) => {
  res.render("faculty.ejs");
});
app.get("/admission", (req, res) => {
  res.render("admisson.ejs");
});
app.get("/Scholarship", (req, res) => {
  res.render("scholarship.ejs");
});
app.get("/check", (req, res) => {
  res.render("scholarship_checker.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
