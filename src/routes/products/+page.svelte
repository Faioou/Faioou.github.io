<script>
    import Header from '$lib/components/Header.svelte';
    import Gallery from '$lib/components/Gallery.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import PortableText from '$lib/components/PortableText.svelte';

    export let data;
    console.log(data)
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
                <div class = "showcase">
                    <div class = "showcase-container">
                        {#each data.productsList as block}
                            <div class = "showcase-card">
                                <h3>{block.title}</h3>
                                <img src="{block.image}" alt="">
                                <PortableText content = {block.description} />
                            </div>
                        {/each}
                    </div>
                </div>

            </div>
        </div>
    </div>

    <Footer />
</div>

