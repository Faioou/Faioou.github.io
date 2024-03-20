import { createClient } from "@sanity/client"
import { PUBLIC_SANITY_PRJ_ID } from '$env/dynamic/private'

const client = createClient({
    projectId: PUBLIC_SANITY_PRJ_ID,
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false
})

export default client;