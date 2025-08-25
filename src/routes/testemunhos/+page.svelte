<script>
    import PortableText from "$lib/components/PortableText.svelte"
    export let data
</script>

<div class = "testimonies">
    <div class="testimonies-content">
        <div class="testimonies-content-section">
            <div class = "text-block">
                <h1>Testemunhos</h1>
                
            </div>
        </div>

    </div>
</div>

<style>
    .testimonies {
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .testimonies-content { width: 60%; }

    .testimonies-content-section {
        padding: 3rem 0 3rem 0;
    }

</style>