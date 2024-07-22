import { prismaClientBD } from "@/lib/db";
import { cache } from "react";
class ListRepository {
  getList = cache(
    (): Promise<ListElement[]> => prismaClientBD.course.findMany(),
  );

  createListElement = (
    command: CreateListElementCommand,
  ): Promise<ListElement> => {
    return prismaClientBD.course.create({
      data: command,
    });
  };
  deleteCourseElement = (command: DeleteListElementCommand) => {
    return prismaClientBD.course.delete({
      where: { id: command.id },
    });
  };
}

export const coursesRepository = new ListRepository();
