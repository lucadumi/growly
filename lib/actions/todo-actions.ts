"use server";

import { headers } from "next/headers";

import { auth } from "../auth";
import { prisma } from "../prisma";

type TodoPriority = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
type TodoStatus = "PLANNED" | "IN_PROGRESS" | "COMPLETED" | "MISSED";

export interface TodoInput {
  title: string;
  description?: string;
  category?: string;
  priority?: TodoPriority;
  status?: TodoStatus;
  tags?: string;
  iconName?: string;
  iconColor?: string;
  location?: string;
}

const requireUserId = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  return session.user.id;
};

const normalizePriority = (priority?: string): TodoPriority => {
  const upper = priority?.toUpperCase();
  if (
    upper === "LOW" ||
    upper === "MEDIUM" ||
    upper === "HIGH" ||
    upper === "CRITICAL"
  ) {
    return upper;
  }
  return "MEDIUM";
};

const normalizeStatus = (status?: string): TodoStatus => {
  const upper = status?.toUpperCase();
  if (
    upper === "PLANNED" ||
    upper === "IN_PROGRESS" ||
    upper === "COMPLETED" ||
    upper === "MISSED"
  ) {
    return upper;
  }
  return "PLANNED";
};

export async function deleteTodo(id: string) {
  const userId = await requireUserId();

  await prisma.todo.delete({
    where: {
      id_userId: {
        id,
        userId,
      },
    },
  });

  return { success: true };
}

export async function getTodo(id: string) {
  const userId = await requireUserId();

  const todo = await prisma.todo.findUnique({
    where: {
      id_userId: {
        id,
        userId,
      },
    },
  });

  return todo;
}

export async function listTodos(limit = 10) {
  const userId = await requireUserId();

  const todos = await prisma.todo.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: limit,
  });

  return todos;
}
