<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    export let data;
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
                {#each data['posts'] as post}
                    {post.title}
                {/each}
            </div>
        </div>
    </div>

    <Footer />
</div>

