<script>
    import PortableText from '$lib/components/PortableText.svelte'

    export let data;
</script>

<div class = "wrapper">

    <!-- Blog -->
    <div class="blog">
        <h1>Blog</h1>
        <hr>
        <div class="blog-content">
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

<style>
    /* Blog */
    .blog {
        padding: 0 2rem 2rem;
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000;
    }

    .blog-content {
        width: 100%;
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: center;
        align-items: center;
    }

    .blog-content a {
        padding: 0;
        text-decoration: none;
    }

    .blog-post {
        padding-bottom: 1rem;
        width: 70%;
        display: flex;
        flex-direction: column;
        line-height: 2;
        border-bottom: 2px solid var(--pink);
    }

    @media (max-width: 1280px) {
        .blog {
            padding: 0 1rem 2rem;
            width: 100%;
        }
    }
</style>