import client from '$lib/sanityClient';

export async function load() {

    // Build history items list
    const history = await client.fetch(`*[_type == 'history']{title, body}`);

    if (history) {
        let historyItemsList = []
        for (let i = 0;  i < history.length; i++) {
            historyItemsList.push({
                title: history[i].title,
                body: history[i].body,
            })
        }
        return {historyItemsList}
    }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    }
}