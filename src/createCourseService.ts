interface Market {
  name: string;
}
class CreateCourseService {
  execute({ name }: Market) {
    console.log(name);
  }
}
export default new CreateCourseService();
