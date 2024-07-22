import { CreateListForm } from "@/components/features/pub/create-list";
import { List } from "@/components/features/pub/list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-8">
      <CreateListForm revalidatePagePath="/" className="" />
      <List revalidatePagePath="/" />
    </main>
  );
}
