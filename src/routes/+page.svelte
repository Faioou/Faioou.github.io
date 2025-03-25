<script>
    import Banner from "$lib/components/Banner.svelte";

    // List to receive images content
    export let data
</script>

<Banner />

<main class="main">
    <div class="main-content">
        <div class="main-content-section">
            <div class = "text-block">
                <h1>Testemunhar É Ajudar</h1>
                <p>A TESTEMUNHAR É AJUDAR (TEA), tem como fim apoiar o doente oncológico, familiares e amigos, desde o momento em que é diagnosticado o cancro. Este apoio baseia-se no contacto pessoal entre o doente e o voluntário (que vivenciou uma situação semelhante), inclusive com fornecimento de bens materiais ao doente. A doação de bens e apoio à investigação clínica do Centro de Mama – CHUSJ, são também objetivos principais da associação. A associação tem ainda como intuito a organização e desenvolvimento de eventos, workshops, ações de formação e educação médica, bem como atividades culturais e recreativas, sendo para isso possível o intercâmbio com outras associações nacionais e internacionais, com o propósito de representar, perante a administração pública, os interesses dos seus associados.</p>
            </div>
        </div>

        <div class="main-content-section">
            <div class="h2-header">
                <h2>- Parceiros -</h2>
            </div>
            <div class="partners-logos">
                {#each data.partnersList as item}
                    <a href = "{item.url}"><img src = "{item.image}" alt = "{item.description}"></a>
                {/each}
            </div>
        </div>
    </div>
</main>

<style>
    .main {
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .main-content { width: 60%; }

    .main-content-section {
        padding: 3rem 0 3rem 0;
    }

    .partners-logos {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        justify-items: center;
        align-items: center;
    }

    .partners-logos img {
        margin: 1rem;
        max-width: 100px;
    }

</style>