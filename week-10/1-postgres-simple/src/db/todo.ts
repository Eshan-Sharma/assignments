import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const result = `INSERT INTO todos (user_id, title,description) VALUES ($1,$2,$3) RETURNING title, description, done, id;`;
    return (await client.query(result,[userId,title,description])).rows[0];
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const result = `UPDATE todos set done = true where id=$1 RETURNING title, description, done, id;`;
    return (await client.query(result,[todoId])).rows[0];
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const result = `SELECT * from todos where user_id=$1;`;
    return (await client.query(result,[userId])).rows;
}