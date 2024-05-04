import "server-only";
import {db} from "./db";
import {posts} from "./db/schema";

export async function addPostQuery(name: string) {
  await db.insert(posts).values({name})
}

export async function allPostsQuery() {
  const posts = await db.query.posts.findMany()
  return posts
}