import { CreateListForm } from "@/components/features/pub/create-list";
import { List } from "@/components/features/pub/list";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-8">
      <CreateListForm revalidatePagePath="/" className="max-w-[300px]" />
      <List revalidatePagePath="/" />
    </main>
  );
}
