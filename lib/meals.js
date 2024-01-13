import sql from "better-sqlite3"
const db = sql('meals.db')

export async function getMeals() {
    await new Promise((resolve, reject) => setTimeout(resolve, 2000))
    return await db.prepare('SELECT*FROM meals').all();
}

export async function getMeal(slug) {
    return await db.prepare("SELECT * FROM meals where slug = ?").get(slug);
}