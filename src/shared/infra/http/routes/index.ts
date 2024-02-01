import { Router } from "express";
import { cnaesRoutes } from "./cnaes-routes";

const router = Router();

router.use("/cnaes", cnaesRoutes);

export { router };
