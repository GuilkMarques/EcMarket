import express from "express";
import { router } from "./routes";
const app = express();
//ss
app.use(express.json());
app.use(router);

app.listen(3000, () => console.log("server is running on port 3000"));
