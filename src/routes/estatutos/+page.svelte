<script>
    import PortableText from "$lib/components/PortableText.svelte"
    export let data
</script>

<div class = "statuses">
    <div class="statuses-content">
        <div class="statuses-content-section">
            <div class = "text-block">
                <h1>Estatutos</h1>
                {#each data.statutesList as block}
                    <PortableText content = {block.body} />
                {/each}
            </div>
        </div>

    </div>
</div>

<style>
    .statuses {
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .statuses-content { width: 60%; }

    .statuses-content-section {
        padding: 3rem 0 3rem 0;
    }

</style>