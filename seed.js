import "dotenv/config";
import { db } from "./libs/dbConnect.js";

const users = [
  {
    username: "nathan121",
    email: "nathan@mail.com",
    password: "$2b$10$vD5yRWdxLp1j6riuSi/Ozu71x145viXeGC7AHT5R0WcycGalmYTae",
    avatar: "https://g.codewithnathan.com/default-user.png",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    username: "jane78",
    email: "jane@mail.com",
    password: "$2b$10$vD5yRWdxLp1j6riuSi/Ozu71x145viXeGC7AHT5R0WcycGalmYTae",
    avatar: "https://g.codewithnathan.com/default-user.png",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const tasks = [
  {
    name: "Read Atomic Habits",
    description: "Finish reading Atomic Habits by James Clear",
    priority: "not urgent",
    due: new Date().toISOString(),
    status: "open",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    name: "Learn MERN Stack",
    description:
      "Learn the MERN stack and build a full-stack application with it",
    priority: "urgent",
    due: new Date().toISOString(),
    status: "open",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

try {
  // Seeding Users
  let collection = await db.collection("users");
  console.log("[seed]", "Seeding users...");
  const result = await collection.insertMany(users);
  console.log(result.insertedIds);
  console.log("[seed]", "Seeding users done");
  //   Seeding tasks
  tasks[0].owner = result.insertedIds[0];
  tasks[1].owner = result.insertedIds[1];

  collection = await db.collection("tasks");
  console.log("[seed]", "Seeding tasks...");
  await collection.insertMany(tasks);
  console.log("[seed]", "Seeding tasks done");

  console.log("[seed]", "All done");
} catch (err) {
  console.log("[seed]", "Error: ", err);
}

process.exit();
