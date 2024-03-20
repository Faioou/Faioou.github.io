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
    const partners = await client.fetch(`*[_type == 'partners']{title, url, "imageUrl": image.asset->url, description}`)

    if (partners) {
        let partnersList = []
        for (let i = 0;  i < partners.length; i++) {
            partnersList.push({
                image: partners[i].imageUrl,
                url: partners[i].url,
                description: partners[i].description,
            })
        }
        return {partnersList}
    }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    }
}