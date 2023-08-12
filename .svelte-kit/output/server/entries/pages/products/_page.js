import { createClient } from "@sanity/client";
const client = createClient({
  projectId: "94cqfhj8",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false
});
async function load() {
  const postsList = await client.fetch(`*[_type == 'post'] | {_id, title, _createdAt}`);
  if (postsList) {
    return {
      posts: postsList
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}
export {
  load
};
