import { revalidatePath } from "next/cache";
import { coursesRepository } from "../list.repository";
import { ListItem } from "../ui/list-item";

export async function CoursesList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const coursesList = await coursesRepository.getCoursesList();

  const hanldeDeleteAction = async (courseId: string) => {
    "use server";

    await coursesRepository.deleteCourseElement({ id: courseId });
    revalidatePath(revalidatePagePath);
  };

  return (
    <div className="flex flex-col gap-3">
      {coursesList.map((course) => (
        <ListItem
          key={course.id}
          course={course}
          onDelete={hanldeDeleteAction.bind(null, course.id)}
        />
      ))}
    </div>
  );
}
