"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function updateProfileAction(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");

  if (!name || !email) {
    throw new Error("Name and email are required to update your profile.");
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;

  if (!userId) {
    throw new Error("Unable to locate your account. Please sign in again.");
  }

  const username = formData.get("username")?.toString().trim().toLowerCase().replace(/^@/, "") || null;
  const bio = formData.get("bio")?.toString().trim() || null;
  const location = formData.get("location")?.toString().trim() || null;
  const focusArea = formData.get("focusArea")?.toString().trim() || null;
  const privateAccount = formData.get("privateAccount") === "true";
  const bannerColor = formData.get("bannerColor")?.toString().trim() || "#e2e8f0";

  if (username) {
    const existing = await prisma.user.findUnique({
      where: { username },
      select: { id: true },
    });
    if (existing && existing.id !== userId) {
      throw new Error("That username is already taken. Please choose another.");
    }
  }

  await prisma.user.update({
    where: { id: userId },
    data: {
      name: name.toString().trim(),
      email: email.toString().trim().toLowerCase(),
      username,
      bio,
      location,
      focusArea,
      privateAccount,
      bannerColor,
    },
  });

  revalidatePath("/account");
}
