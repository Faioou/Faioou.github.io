<script>
    import PortableText from '$lib/components/PortableText.svelte'

    export let data;
</script>

<div class = "wrapper">

    <!-- Blog -->
    <div class = "content">
        <div class = "content-container">
            <div class = "content-title">
                <h1>Blog</h1>
            </div>
            <hr>
            <div class = "content-content">
                <div class="showcase-faqs">
                    {#each data.postsList as block}
                        <div class = "showcase-faqs-item">
                            <a href = {`/blog/post/${block.slug.current}`} data><h2>{block.title}</h2></a>
                            <PortableText content = {block.description} />
                            <p>{block.publishedAt}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>

</div>