<script>
    import Header from '$lib/components/Header.svelte';
    import PortableText from '$lib/components/PortableText.svelte'
    import Footer from '$lib/components/Footer.svelte';

    export let data;
</script>

<div class = "wrapper">
    <Header />

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
                            <h2>{block.title}</h2>
                            <PortableText content = {block.description} />
                            <p>{block.publishedAt}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>

    <!-- <Footer /> -->
</div>