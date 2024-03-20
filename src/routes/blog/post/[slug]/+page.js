// import { createClient } from "@sanity/client"
// import { PUBLIC_SANITY_PRJ_ID } from '$env/static/public'

// const client = createClient({
//     projectId: PUBLIC_SANITY_PRJ_ID,
//     dataset: "production",
//     apiVersion: "2021-10-21",
//     useCdn: false
// })
import client from '$lib/sanityClient';

export async function load(data) {
    // const posts = await client.fetch(`*[_type == 'blog']{title, slug, publishedAt, description, content}`);

    console.log(data[0])

    // if (posts) {
    //     let postsList = []
    //     for (let i = 0;  i < posts.length; i++) {
    //         postsList.push({
    //             title: posts[i].title,
    //             slug: posts[i].slug,
    //             publishedAt: posts[i].publishedAt,
    //             description: posts[i].description,
    //             content: posts[i].content
    //         })
    //     }
    //     return {postsList}
    // }
    //     return {
    //     status: 500,
    //     body: new Error("Internal Server Error")
    // }
}