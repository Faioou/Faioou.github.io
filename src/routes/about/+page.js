import {createClient} from "@sanity/client";

const client = createClient({
projectId: "94cqfhj8",
dataset: "production",
apiVersion: "2021-10-21",
useCdn: false
});

export async function load() {
    const aboutUs = await client.fetch(`*[_type == 'about'] | {title, body}`);

    if (aboutUs) {
    return {
        title: aboutUs[0]['title'],
        body: aboutUs[0]['body'][0]['children'][0]['text']
    };
    }
    return {
    status: 500,
    body: new Error("Internal Server Error")
    };
}