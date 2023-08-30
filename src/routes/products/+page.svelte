<script>
    import Header from '$lib/components/Header.svelte';
    import Gallery from '$lib/components/Gallery.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class = "wrapper">
    <Header />

    <!-- Products -->
    <div class = "about">
        <div class = "about-container">
            <div class = "about-title">
                <h1>Produtos</h1>
            </div>
            <hr>
            <div class = "about-content">
                <Gallery />
            </div>
        </div>
    </div>

    <Footer />
</div>

