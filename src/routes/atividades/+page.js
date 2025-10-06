import client from '$lib/sanityClient';

export async function load() {

    // Build events list
    const events = await client.fetch(`*[_type == 'activities']{title, description, body, "cover": cover.asset->url, date}`);

    if (events) {
        let eventsList = []
        for (let i = 0;  i < events.length; i++) {
            console.log(events[i].cover);
            eventsList.push({
                title: events[i].title,
                description: events[i].description,
                body: events[i].body,
                cover: events[i].cover,
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