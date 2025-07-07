<script>
    import PortableText from '$lib/components/PortableText.svelte'

    export let data;
</script>

<div class = "blog">
    <div class="blog-content">
        <div class="blog-content-section">
            <h1>Blog</h1>
            <div class="blog-posts-container">
                {#each data.postsList as block}
                    <div class = "blog-post">
                        <a href = {`/blog/post/${block.slug.current}`} {block}><h2>{block.title}</h2></a>
                        <PortableText content = {block.description} />
                        <p><span>{block.publishedAt}</span></p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>


<style>
    .blog {
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .blog-content { width: 60%; }

    .blog-content-section {
        padding: 3rem 0 3rem 0;
    }

    .blog-posts-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
        box-sizing: border-box;
    }

    .blog-post {
        padding: 1rem;
        max-width: 300px;
        display: flex;
        flex-direction: column;
        line-height: 2;
    }

    .blog-post a {
        text-decoration: none;
    }

    @media (max-width: 1280px) {
        .blog {
            padding: 0 1rem 2rem;
            width: 100%;
        }
    }
</style>