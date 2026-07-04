import db from "#db/client";
import { faker } from "@faker-js/faker";
import { createEmployee } from "./queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  for (let i = 0; i < 10; i++) {
    const name = faker.person.fullName();
    const birthday = faker.person.birthday();
    const salary = faker.number.int();
    await createEmployee({ name, birthday, salary });
  }
}
