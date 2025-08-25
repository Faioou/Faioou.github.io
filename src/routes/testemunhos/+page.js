import client from '$lib/sanityClient';

export async function load() {

    // Build events list
    const events = await client.fetch(`*[_type == 'events']{title, body}`);

    if (events) {
        let eventsList = []
        for (let i = 0;  i < events.length; i++) {
            eventsList.push({
                title: events[i].title,
                body: events[i].body,
            })
        }
        return {eventsList}
    }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    }
}