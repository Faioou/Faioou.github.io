<script>
    // import BlogNavBar from "$lib/components/BlogNavBar.svelte"
    import PortableText from '$lib/components/PortableText.svelte'

    export let data
</script>

<div class = "post">
    <div class="post-content">
        <div class="post-content-section">
            <h2>{data.postContent.title}</h2>
            <div class = "post-content">
                <PortableText content = {data.postContent.content} />
            </div>
        </div>
    </div>
</div>

<style>
    .post {
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .post-content { width: 60%; }

    .post-content-section {
        padding: 3rem 0 3rem 0;
    }
</style>