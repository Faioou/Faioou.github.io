<script>
    import Footer from "$lib/components/Footer.svelte";

    export let data
</script>
<slot></slot>
<Footer content = {data} />