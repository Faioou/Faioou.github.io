import client from '$lib/sanityClient';

export async function load() {
    const posts = await client.fetch(`*[_type == 'blog']{title, slug, publishedAt, description, content}`);

    if (posts) {
        let postsList = []
        for (let i = 0;  i < posts.length; i++) {
            postsList.push({
                title: posts[i].title,
                slug: posts[i].slug,
                publishedAt: editDate(posts[i].publishedAt),
                description: posts[i].description,
                content: posts[i].content
            })
        }
        return {postsList}
    }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    }
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