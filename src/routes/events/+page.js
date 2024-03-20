import client from '$lib/sanityClient';

export async function load() {
    const events = await client.fetch(`*[_type == 'events']{title, description, date}`);

    if (events) {
        let eventsList = []
        for (let i = 0;  i < events.length; i++) {
            eventsList.push({
                title: events[i].title,
                description: events[i].description,
                date: events[i].date
            })
        }
        return {eventsList}
    }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    }
}