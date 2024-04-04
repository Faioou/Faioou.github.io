<script>
    import PortableText from '$lib/components/PortableText.svelte'

    export let data
</script>

<div class = "wrapper">

    <!-- Post -->
    <div class = "content">
        <div class = "content-container">
            <div class = "content-title">
                <h1>{data.postContent.title}</h1>
            </div>
            <hr>
            <div class = "content-content">
                <PortableText content = {data.postContent.content} />
            </div>
        </div>
    </div>

</div>