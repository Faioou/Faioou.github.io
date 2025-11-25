import client from '$lib/sanityClient';

export async function load() {

    // Build statutes list
    const statutes = await client.fetch(`*[_type == 'statutes']{title, body}`);

    if (statutes) {
        let statutesList = []
        for (let i = 0;  i < statutes.length; i++) {
            statutesList.push({
                body: statutes[i].body,
            })
        }
        return {statutesList}
    }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    }
}