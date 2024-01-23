import express, { request, response } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "server is running on port 3000" });
});
app.listen(3000);
