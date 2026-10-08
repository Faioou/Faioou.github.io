<script>

    // =========================================================
    // INÍCIO DOS IMPORTS
    // =========================================================

    import '../app.css';

    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    // =========================================================
    // FIM DOS IMPORTS
    // =========================================================


    // Dados recebidos do +layout.server.js
    export let data;

</script>


<!-- =========================================================
     INÍCIO DA ESTRUTURA GLOBAL DO SITE
     ========================================================= -->


<!-- Cabeçalho -->
<Header />


<!-- Conteúdo de cada página -->
<slot />


<!--
    O Footer está fora das páginas individuais.

    Portanto aparece automaticamente em:
    /
    /missao
    /atividades
    /blog
    /doar
    /testemunhos
    etc.
-->
<Footer
    partnersList={data?.partnersList ?? []}
/>


<!-- =========================================================
     FIM DA ESTRUTURA GLOBAL DO SITE
     ========================================================= -->