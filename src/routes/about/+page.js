import {createClient} from "@sanity/client"
import {toPlainText} from '@portabletext/svelte'

const client = createClient({
projectId: "94cqfhj8",
dataset: "production",
apiVersion: "2021-10-21",
useCdn: false
});

export async function load() {
    const aboutUs = await client.fetch(`*[_type == 'about'][0]{title, body}`);

    console.log(aboutUs)
    console.log(toPlainText(aboutUs.body))

    if (aboutUs) {
    return {
        title: aboutUs.title,
        body: toPlainText(aboutUs.body)
    };
    }
    return {
    status: 500,
    body: new Error("Internal Server Error")
    };
}