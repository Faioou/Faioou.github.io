import {createClient} from "@sanity/client";

const client = createClient({
  projectId: "94cqfhj8",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false
});

export async function load() {
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





// skch9trl1KlFe0cjqbfcxJyU6MFbDXuW4cMtzPsRZgNgju3IWGprkcB3WdFsUgQIuoigksmo6xE46Q4l1Jh1lVTgwIoLxiquHzL9WqVw0sqPXiCxmMdeDG6GDPNCj9nyn9TJF1e1RZg2WW7wlA4Gg9leij3nPOKspnLIXrUTDBT1p83rov2y