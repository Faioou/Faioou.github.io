import { createClient } from "@sanity/client"
// import { PUBLIC_SANITY_PRJ_ID } from '$env/dynamic/public'

const client = createClient({
    projectId: "94cqfhj8",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false
})

export default client;

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