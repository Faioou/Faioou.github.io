<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import PortableText from '$lib/components/PortableText.svelte';

    export let data;
</script>

<div class = "wrapper">
    <Header />

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

    <!-- <Footer /> -->
</div>