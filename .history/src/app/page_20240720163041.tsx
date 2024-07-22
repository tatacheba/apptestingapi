import { CreateListForm } from "@/components/features/pub/create-list";
import { List } from "@/components/features/pub/list";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-8">
      <CreateListForm />
      <List />
    </main>
  );
}
