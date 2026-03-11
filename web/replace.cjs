const fs = require('fs');
const files = [
  "b:\\growly\\app\\dashboard\\habits\\types.ts",
  "b:\\growly\\app\\dashboard\\habits\\routines\\[id]\\edit\\page.tsx",
  "b:\\growly\\app\\dashboard\\habits\\routines\\page.tsx",
  "b:\\growly\\app\\dashboard\\components\\todos-widget.tsx",
  "b:\\growly\\app\\dashboard\\analytics\\page.tsx",
  "b:\\growly\\app\\dashboard\\analytics\\analytics-client.tsx",
  "b:\\growly\\app\\api\\routines\\[id]\\route.ts",
  "b:\\growly\\app\\api\\todos\\route.ts",
  "b:\\growly\\app\\api\\todos\\[id]\\route.ts",
  "b:\\growly\\app\\api\\should-dos\\[id]\\like\\route.ts",
  "b:\\growly\\app\\api\\habits\\daily-progress\\route.ts",
  "b:\\growly\\app\\api\\habits\\[id]\\route.ts",
  "b:\\growly\\app\\api\\habits\\[id]\\reset\\route.ts",
  "b:\\growly\\app\\api\\habits\\[id]\\progress\\route.ts",
  "b:\\growly\\lib\\habit-analytics.ts"
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/@prisma\/client/g, '@/lib/generated/prisma');
    fs.writeFileSync(file, content, 'utf8');
    console.log("Updated " + file);
  } else {
    console.log("Not found: " + file);
  }
}
