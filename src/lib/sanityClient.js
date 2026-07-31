import { createClient } from "@sanity/client"

const client = createClient({
    projectId: "94cqfhj8",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false
})

export default client;