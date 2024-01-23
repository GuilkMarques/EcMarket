import { Response, Request } from "express";
import createCourseService from "./createCourseService";

export function createCourse(request: Request, response: Response) {
  createCourseService.execute({ name: "EcMarket" });

  return response.send();
}
