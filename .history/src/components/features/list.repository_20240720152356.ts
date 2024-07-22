import { prismaClientBD } from "@/lib/db";
import { cache } from "react";
class ListRepository {
  getItemList = cache(
    (): Promise<ListElement[]> => prismaClientBD.list.findMany(),
  );

  createListElement = (
    command: CreateListElementCommand,
  ): Promise<ListElement> => {
    return prismaClientBD.list.create({
      data: command,
    });
  };
  deleteCourseElement = (command: DeleteListElementCommand) => {
    return prismaClientBD.list.delete({
      where: { id: command.id },
    });
  };
}

export const listRepository = new ListRepository();
