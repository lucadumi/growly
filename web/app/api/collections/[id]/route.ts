import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const requireUserId = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  return session.user.id;
};

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id: collectionId } = await context.params;
    if (!collectionId) {
      return NextResponse.json(
        { error: "Collection ID is required" },
        { status: 400 }
      );
    }

    const userId = await requireUserId();
    const body = await request.json();
    const { todoId, action } = body;

    if (!todoId || action !== "add") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const collection = await prisma.collection.findFirst({
      where: { id: collectionId, userId },
    });

    if (!collection) {
      return NextResponse.json(
        { error: "Collection not found" },
        { status: 404 }
      );
    }

    await prisma.collectionTodo.upsert({
      where: { collectionId_todoId: { collectionId, todoId } },
      create: { collectionId, todoId },
      update: {},
    });

    const updated = await prisma.collection.findUnique({
      where: { id: collectionId },
      include: { items: { select: { todoId: true } } },
    });

    return NextResponse.json({
      collection: {
        id: updated!.id,
        name: updated!.name,
        description: updated!.description,
        todoIds: updated!.items.map((item) => item.todoId),
      },
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json(
      { error: "Unable to update collection" },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id: collectionId } = await context.params;
    if (!collectionId) {
      return NextResponse.json(
        { error: "Collection ID is required" },
        { status: 400 }
      );
    }

    const userId = await requireUserId();

    const deleted = await prisma.collection.deleteMany({
      where: { id: collectionId, userId },
    });

    if (deleted.count === 0) {
      return NextResponse.json(
        { error: "Collection not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ deleted: deleted.count });
  } catch (error) {
    console.error(error);
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json(
      { error: "Unable to delete collection" },
      { status: 400 }
    );
  }
}
