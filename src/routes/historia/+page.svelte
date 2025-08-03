<script>
    import PortableText from "$lib/components/PortableText.svelte"
    export let data
</script>

<div class = "history">
    <div class="history-content">
        <div class="history-content-section">
            <div class = "text-block">
                <h1>História</h1>

            </div>
        </div>

    </div>
</div>

<style>
    .history {
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .history-content { width: 60%; }

    .history-content-section {
        padding: 3rem 0 3rem 0;
    }

</style>