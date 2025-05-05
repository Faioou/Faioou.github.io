import client from '$lib/sanityClient';

export async function load() {

    // Build partners list
    const partners = await client.fetch(`*[_type == 'partners']{title, url, "imageUrl": image.asset->url, description}`)
    let partnersList = []

    if (partners) {
        
        for (let i = 0;  i < partners.length; i++) {
            partnersList.push({
                image: partners[i].imageUrl,
                url: partners[i].url,
                description: partners[i].description,
            })
        }
    }

    // Build events list
    const events = await client.fetch(`*[_type == 'events']{title, description, body, date}`);
    let eventsList = []

    if (events) {
        for (let i = 0;  i < 2; i++) {
            eventsList.push({
                title: events[i].title,
                description: events[i].description,
                body: events[i].body,
                date: events[i].date,
            })
        }
    }

    if (partnersList && eventsList) {
        return {partnersList, eventsList}
    }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    }
}