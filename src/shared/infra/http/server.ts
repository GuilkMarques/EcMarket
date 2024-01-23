import express, { request, response } from "express";
import { cnaesRoutes } from "./routes/cnaes-routes";

const app = express();

app.use(express.json());

app.use("/cnaes", cnaesRoutes);

app.listen(3000, () => console.log("server is running on port 3000"));
