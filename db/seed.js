import db from "#db/client";
import { faker } from "@faker-js/faker";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  for (let i = 0; i < 10; i++) {
    const name = faker.person.fullName();
    const birthday = faker.date.birthdate();
    const salary = faker.number.int({ min: 30000, max: 150000 });
    await createEmployee({ name, birthday, salary });
  }
}
