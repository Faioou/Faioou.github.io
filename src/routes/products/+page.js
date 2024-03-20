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
    const products = await client.fetch(`*[_type == "products"]{title, "imageUrl": image.asset->url, description, price, "category": *[_type == "category" && _id == ^.category[0]._ref]}`);

    if (products) {
        let productsList = []
        for (let i = 0;  i < products.length; i++) {
            productsList.push({
                title: products[i].title,
                image: products[i].imageUrl,
                description: products[i].description,
                price: products[i].price,
                category: products[i].category[0].description
            })
        }
        return {productsList}
    }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    }
}