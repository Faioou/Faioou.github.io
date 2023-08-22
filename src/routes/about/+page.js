import {createClient} from "@sanity/client"
import {toPlainText} from '@portabletext/svelte'

import {toHTML} from '@portabletext/to-html'


const client = createClient({
projectId: "94cqfhj8",
dataset: "production",
apiVersion: "2021-10-21",
useCdn: false
});

export async function load() {
    const aboutUs = await client.fetch(`*[_type == 'about'][0]{title, body}`);

    const body = toHTML(aboutUs.body,{components: {},})

    if (aboutUs) {
    return {
        title: aboutUs.title,
        // body: toPlainText(aboutUs.body)
        body: aboutUs.body
    };
    }
    return {
    status: 500,
    body: new Error("Internal Server Error")
    };
}