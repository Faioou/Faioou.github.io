<script>
    import PortableText from '$lib/components/PortableText.svelte';

    export let data;
</script>

<div class = "wrapper">

    <!-- About Us-->
    <div class = "content">
        <div class = "content-container">
            <div class = "content-title">
                <h1>{data.title}</h1>
            </div>
            <hr>
            <div class = "content-content" id = "content-content-body">
                <PortableText content = {data.body}/>
            </div>
        </div>
    </div>

</div>