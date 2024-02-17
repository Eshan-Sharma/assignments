import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const result = `INSERT INTO users (username, password, name) VALUES ($1,$2,$3);`;
    await client.query(result, [username, password,name]);
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const result = `SELECT * from users where id=$1;`;
    return (await client.query(result,[userId])).rows[0];
}
