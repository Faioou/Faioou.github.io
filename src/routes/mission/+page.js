import client from '$lib/sanityClient';

export async function load() {
    const mission = await client.fetch(`*[_type == 'mission']{title, body}`);

    if (mission) {
        let missionData = []
        for (let i = 0;  i < mission.length; i++) {
            missionData.push({
                title: mission[i].title,
                body: mission[i].body
            })
        }
        return {missionData}
        }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    };
}