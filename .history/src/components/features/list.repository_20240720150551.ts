import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
class ListRepository {
  getList = cache((): Promise<ListElement[]> => dbClient.course.findMany());

  createCourseElement = (
    command: CreateCourseListElementCommand,
  ): Promise<CourseListElement> => {
    return dbClient.course.create({
      data: command,
    });
  };
  deleteCourseElement = (command: DeleteCourseListElementCommand) => {
    return dbClient.course.delete({
      where: { id: command.id },
    });
  };
}

export const coursesRepository = new CoursesRepository();
