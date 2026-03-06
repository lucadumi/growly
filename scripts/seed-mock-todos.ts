import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findFirst({ orderBy: { createdAt: "asc" } });
  if (!user) {
    console.error("No user found. Sign up first then re-run this script.");
    process.exit(1);
  }

  console.log(`Seeding for user: ${user.email}`);

  // Create standalone todos (no collection)
  const standalone = await Promise.all([
    prisma.todo.create({
      data: {
        userId: user.id,
        title: "Review Q2 product roadmap",
        description: "Go through the updated roadmap doc and leave comments.",
        category: "Work",
        priority: "HIGH",
        status: "IN_PROGRESS",
        iconName: "Map",
        iconColor: "#6366f1",
      },
    }),
    prisma.todo.create({
      data: {
        userId: user.id,
        title: "Book dentist appointment",
        category: "Health",
        priority: "MEDIUM",
        status: "PLANNED",
        iconName: "Calendar",
        iconColor: "#f97316",
      },
    }),
    prisma.todo.create({
      data: {
        userId: user.id,
        title: "Read Atomic Habits (ch. 7–10)",
        category: "Learning",
        priority: "LOW",
        status: "PLANNED",
        iconName: "BookOpen",
        iconColor: "#22c55e",
      },
    }),
    prisma.todo.create({
      data: {
        userId: user.id,
        title: "Set up weekly review template",
        category: "Productivity",
        priority: "MEDIUM",
        status: "COMPLETED",
        iconName: "CheckSquare",
        iconColor: "#6366f1",
      },
    }),
    prisma.todo.create({
      data: {
        userId: user.id,
        title: "Fix nav bar responsiveness on mobile",
        category: "Work",
        priority: "HIGH",
        status: "IN_PROGRESS",
        iconName: "Code",
        iconColor: "#ec4899",
      },
    }),
    prisma.todo.create({
      data: {
        userId: user.id,
        title: "Update LinkedIn headline",
        category: "Personal",
        priority: "LOW",
        status: "MISSED",
        iconName: "User",
        iconColor: "#64748b",
      },
    }),
  ]);

  // Create collection: "Product Launch"
  const launchCol = await prisma.collection.create({
    data: {
      userId: user.id,
      name: "Product Launch",
      description: "Everything needed to ship v1.0 on time.",
    },
  });

  const launchTodos = await Promise.all([
    prisma.todo.create({
      data: {
        userId: user.id,
        title: "Write launch announcement blog post",
        category: "Marketing",
        priority: "HIGH",
        status: "IN_PROGRESS",
        iconName: "FileText",
        iconColor: "#6366f1",
      },
    }),
    prisma.todo.create({
      data: {
        userId: user.id,
        title: "QA all critical user flows",
        category: "Work",
        priority: "CRITICAL",
        status: "PLANNED",
        iconName: "ShieldCheck",
        iconColor: "#ef4444",
      },
    }),
    prisma.todo.create({
      data: {
        userId: user.id,
        title: "Set up error monitoring (Sentry)",
        category: "Work",
        priority: "HIGH",
        status: "COMPLETED",
        iconName: "AlertTriangle",
        iconColor: "#f59e0b",
      },
    }),
    prisma.todo.create({
      data: {
        userId: user.id,
        title: "Draft social media rollout plan",
        category: "Marketing",
        priority: "MEDIUM",
        status: "PLANNED",
        iconName: "Share2",
        iconColor: "#22c55e",
      },
    }),
  ]);

  await Promise.all(
    launchTodos.map((todo) =>
      prisma.collectionTodo.create({
        data: { collectionId: launchCol.id, todoId: todo.id },
      })
    )
  );

  // Create collection: "Personal Growth"
  const growthCol = await prisma.collection.create({
    data: {
      userId: user.id,
      name: "Personal Growth",
      description: "Habits, learning, and self-improvement tasks.",
    },
  });

  const growthTodos = await Promise.all([
    prisma.todo.create({
      data: {
        userId: user.id,
        title: "Complete online TypeScript course",
        category: "Learning",
        priority: "MEDIUM",
        status: "IN_PROGRESS",
        iconName: "Code",
        iconColor: "#3b82f6",
      },
    }),
    prisma.todo.create({
      data: {
        userId: user.id,
        title: "Journal 3 things I'm grateful for",
        category: "Wellbeing",
        priority: "LOW",
        status: "COMPLETED",
        iconName: "Heart",
        iconColor: "#ec4899",
      },
    }),
    prisma.todo.create({
      data: {
        userId: user.id,
        title: "Plan a no-screen evening routine",
        category: "Wellbeing",
        priority: "MEDIUM",
        status: "PLANNED",
        iconName: "Moon",
        iconColor: "#8b5cf6",
      },
    }),
  ]);

  await Promise.all(
    growthTodos.map((todo) =>
      prisma.collectionTodo.create({
        data: { collectionId: growthCol.id, todoId: todo.id },
      })
    )
  );

  console.log(`Done!`);
  console.log(`  ${standalone.length} standalone todos`);
  console.log(`  Collection "${launchCol.name}" with ${launchTodos.length} todos`);
  console.log(`  Collection "${growthCol.name}" with ${growthTodos.length} todos`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
