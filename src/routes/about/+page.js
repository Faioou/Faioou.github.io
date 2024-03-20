import client from '$lib/sanityClient';

export async function load() {
    const aboutUs = await client.fetch(`*[_type == 'about'][0]{title, body, "imageUrl": image.asset->url}`);

    if (aboutUs) {
        return {
            title: aboutUs.title,
            body: aboutUs.body
        };
        }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    };
}