import client from '$lib/sanityClient';

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