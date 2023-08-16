<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    export let data;
</script>

<div class = "wrapper">
    <Header />

    <!-- About Us-->
    <div class = "about">
        <div class = "about-container">
            <div class = "about-title">
                <h1>{data.title}</h1>
            </div>
            <hr>
            <div class = "about-content">
                <p>{data.body}</p>
            </div>
        </div>
    </div>

    <Footer />
</div>