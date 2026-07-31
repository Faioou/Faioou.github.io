import client from '$lib/sanityClient';

export async function load() {

    // Build mission list
    const mission = await client.fetch(`*[_type == 'mission']{title, body, "imageUrl": image.asset->url}`);

    if (mission) {
        let missionList = []
        for (let i = 0;  i < mission.length; i++) {
            missionList.push({
                title: mission[i].title,
                body: mission[i].body,
                image: mission[i].imageUrl
            })
        }
        missionList.reverse() // Show most recent first
        return {missionList}
    }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    }
}