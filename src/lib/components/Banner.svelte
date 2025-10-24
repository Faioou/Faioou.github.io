<script>
    import PortableText from "$lib/components/PortableText.svelte"
    export let content;

    function openLink(url) {
        window.open(url, '_blank');
    }
</script>

<div class="banner">
    <div class="banner-content">
        {#each content as item}
        <div class="banner-content-image">
            <img src={item.image} alt="">
        </div>
        <div class="banner-content-text">
            <div class="text-block">
                <h1>{item.title}</h1>
                <PortableText content = {item.body} />
            </div>
            <div class="options">
                <!-- <button on:click={() => openLink('/doar')}>Quero Ajudar</button> -->
                 <button>Quero Ajudar</button>
                <button on:click={() => openLink('https://google.com/')}>Tornar-me Sócio</button>
            </div>
        </div>
        {/each}
    </div>
</div>

<style>
    .banner {
        background-color: var(--pink-light);
    }

    .banner-content {
        padding: 4rem 2rem;
        display: flex;
        flex-direction: row;
        gap: 5rem;
    }

    .banner-content-image {
        padding: 1rem;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .banner-content-image img {
        max-width: 100%;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .banner-content-text {
        padding: 1rem;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .options {
        margin-top: .5rem;
        width: 100%;
        display: flex;
        gap: 2rem;
    }

</style>