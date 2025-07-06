import client from '$lib/sanityClient';

export async function load() {
    // Build products list
    const products = await client.fetch(`*[_type == "products"]{title, "imageUrl": image.asset->url, description, price, "category": *[_type == "categories" && _id == ^.category[0]._ref]}`);
    let productsList = []

    if (products) {
        for (let i = 0;  i < products.length; i++) {
            productsList.push({
                title: products[i].title,
                image: products[i].imageUrl,
                description: products[i].description,
                price: products[i].price,
                category: products[i].category[0].description
            })
        }
    }

    // Build categories list
    const categories = await client.fetch(`*[_type == "categories"]{title}`)
    let categoriesList = []

    if (categories) {
        for (let i = 0;  i < categories.length; i++) {
            categoriesList.push({
                title: categories[i].title,
            })
        }
    }

    if (productsList && categoriesList) {
        return {categoriesList, productsList}
    }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    }
}