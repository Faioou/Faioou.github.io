import { createClient } from "@sanity/client"
// import { PUBLIC_SANITY_PRJ_ID } from '$env/dynamic/public'

const client = createClient({
    projectId: "94cqfhj8",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false
})

export default client;

export async function load() {
    const posts = await client.fetch(`*[_type == 'blog']{title, slug, publishedAt, description, content}`);

    if (posts) {
        let postsList = []
        for (let i = 0;  i < posts.length; i++) {
            postsList.push({
                title: posts[i].title,
                slug: posts[i].slug,
                publishedAt: posts[i].publishedAt,
                description: posts[i].description,
                content: posts[i].content
            })
        }
        return {postsList}
    }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    }
}