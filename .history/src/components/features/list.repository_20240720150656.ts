import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
class ListRepository {
  getList = cache((): Promise<ListElement[]> => dbClient.course.findMany());

  createListElement = (
    command: CreateListElementCommand,
  ): Promise<ListElement> => {
    return dbClient.course.create({
      data: command,
    });
  };
  deleteCourseElement = (command: DeleteListElementCommand) => {
    return dbClient.course.delete({
      where: { id: command.id },
    });
  };
}

export const coursesRepository = new ListRepository();
