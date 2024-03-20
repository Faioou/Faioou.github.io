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
    const faqs = await client.fetch(`*[_type == 'faqs']{question, answer}`);

    if (faqs) {
        let faqsList = []
        for (let i = 0;  i < faqs.length; i++) {
            faqsList.push({
                question: faqs[i].question,
                answer: faqs[i].answer,
            })
        }
        return {faqsList}
    }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    }
}