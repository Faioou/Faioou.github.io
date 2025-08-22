<script>
    import PortableText from "$lib/components/PortableText.svelte"
    export let data
</script>

<div class = "mission">
    <div class="mission-content">
        <div class="mission-content-section">
            <div class = "text-block">
                {#each data.missionList as block}
                    <h2>{block.title}</h2>
                    <img src="{block.image}" alt="">
                    <PortableText content ={block.body} />
                {/each}
            </div>
        </div>

    </div>
</div>

<style>
    .mission {
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .mission-content { width: 60%; }

    .mission-content-section {
        padding: 3rem 0 3rem 0;
        display: flex;
        flex-direction: column;
        gap: 2rem ;
    }

</style>