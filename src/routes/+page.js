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

    // Build homepage
    const homepage = await client.fetch(`*[_type == 'homepage']{title, body, "imageUrl": image.asset->url}`);
    let homepageList = []

    if (homepage) {
        for (let i = 0;  i < homepage.length; i++) {
            homepageList.push({
                title: homepage[i].title,
                body: homepage[i].body,
                image: homepage[i].imageUrl
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
                date: editDate(events[i].date),
            })
        }
    }

    if (partnersList && eventsList && homepageList) {
        return {partnersList, eventsList, homepageList}
    }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    }

    // Edit the date format to 'YYYY-MM-DD HH:MM'
    function editDate(date) {
        const dateObj = new Date(date);

        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(dateObj.getDate()).padStart(2, '0');
        const hours = String(dateObj.getHours()).padStart(2, '0');
        const minutes = String(dateObj.getMinutes()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
        return formattedDate;
    }
}