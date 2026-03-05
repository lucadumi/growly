import { redirect } from "next/navigation";

export default async function EditHabit() {
  redirect("/dashboard/habits");
}
