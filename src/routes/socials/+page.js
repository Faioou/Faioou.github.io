import client from '$lib/sanityClient';

export async function load() {
    const socials = await client.fetch(`*[_type == 'socials']{title, body}`);

    if (socials) {
        let socialsData = []
        for (let i = 0;  i < socials.length; i++) {
            socialsData.push({
                title: socials[i].title,
                body: socials[i].body
            })
        }
        return {socialsData}
        }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    };
}