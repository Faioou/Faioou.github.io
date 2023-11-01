<script>
    import Header from '$lib/components/Header.svelte';
    import Gallery from '$lib/components/Gallery.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import PortableText from '$lib/components/PortableText.svelte';

    export let data;
</script>

<div class = "wrapper">
    <Header />

    <!-- Events -->
    <div class = "content">
        <div class = "content-container">
            <div class = "content-title">
                <h1>Eventos</h1>
            </div>
            <hr>
            <div class = "content-content">
                <div class = "showcase-events">
                        {#each data.eventsList as block}
                            <div class = "showcase-events-item">
                                <h3>{block.title}</h3>
                                <PortableText content = {block.description} />
                                <p id = "highlight"><span>{block.date}</span></p>
                            </div>
                        {/each}

                </div>

            </div>
        </div>
    </div>

    <Footer />
</div>

