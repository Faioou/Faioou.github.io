import client from '$lib/sanityClient';

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