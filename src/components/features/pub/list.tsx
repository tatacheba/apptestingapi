import { revalidatePath } from "next/cache";
import { listRepository } from "../list.repository";
import { ListItem } from "../ui/list-item";

export async function List({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const itemList = await listRepository.getItemList();

  const hanldeDeleteAction = async (itemId: string) => {
    "use server";

    await listRepository.deleteCourseElement({ id: itemId });
    revalidatePath(revalidatePagePath);
  };

  return (
    <div className="flex flex-col gap-3">
      {itemList.map((item) => (
        <ListItem
          key={item.id}
          list={item}
          onDelete={hanldeDeleteAction.bind(null, item.id)}
        />
      ))}
    </div>
  );
}
