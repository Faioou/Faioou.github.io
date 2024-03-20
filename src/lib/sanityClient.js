import { createClient } from "@sanity/client"
// import { PUBLIC_SANITY_PRJ_ID } from '$env/dynamic/public'

const client = createClient({
    projectId: "94cqfhj8",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false
})

export default client;