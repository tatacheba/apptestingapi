"use server";

import { revalidatePath } from "next/cache";
import { listRepository } from "./list.repository";

export const createListAction = async (
  command: CreateListElementCommand,
  revalidatePagePath: string,
) => {
  await listRepository.createListElement(command);
  revalidatePath(revalidatePagePath);
};
