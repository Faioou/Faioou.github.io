<script>
    import BlogNavBar from "$lib/components/BlogNavBar.svelte"
    import PortableText from '$lib/components/PortableText.svelte'

    export let data
</script>

<div class = "wrapper">

    <!-- Post -->
    <div class = "blog">
        <BlogNavBar />
        <header>
            <h2>{data.postContent.title}</h2>
        </header>
        <div class = "post-content">
            <PortableText content = {data.postContent.content} />
        </div>
    </div>

</div>

<style>
    /* Blog */
    .blog {
        padding: 0 2rem 2rem;
        height: auto;
        width: 50%;
        display: flex;
        flex-direction: column;
        color: #000;
    }

    header { margin-top: 2rem; }

    .post-content {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    @media (max-width: 1280px) {
        .blog {
            width: 100%;
        }
    }
</style>