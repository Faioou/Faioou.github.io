import client from '$lib/sanityClient';

export async function load() {

    // Build socials list
    const socials = await client.fetch(`*[_type == 'socials']{name, title, area, "imageUrl": image.asset->url}`);

    if (socials) {
        let socialsList = []
        for (let i = 0;  i < socials.length; i++) {
            socialsList.push({
                name: socials[i].name,
                title: socials[i].title,
                area: socials[i].area,
                photo: socials[i].imageUrl
            })
        }
        return {socialsList}
    }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    }
}