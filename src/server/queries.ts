import "server-only";
import {db} from "./db";
import {posts} from "./db/schema";

export async function addPostQuery(name: string) {
  await db.insert(posts).values({name})
}

export async function allPostsQuery() {
  return await db.query.posts.findMany()
    .then((r) => r);
}