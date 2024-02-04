<script>
    import Header from '$lib/components/Header.svelte';
    import Banner from '$lib/components/Banner.svelte';
    import Gallery from '$lib/components/Gallery.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Button from '$lib/components/Button.svelte';

    export let data;
</script>

<div class = "wrapper">
    <Header />
    <Banner />

    <!-- Intro-->
    <div class = "intro">
        <div class = "intro-container">
            <div class = "intro-title">
                <h1>Testemunhar É Ajudar</h1>
            </div>
            <hr>
            <div class = "intro-content">
                <p>O TESTEMUNHAR É AJUDAR (TEA), tem como fim apoiar o doente oncológico, familiares e amigos, desde o momento em que é diagnosticado o cancro. Este apoio baseia-se no contacto pessoal entre o doente e o voluntário (que vivenciou uma situação semelhante), inclusive com fornecimento de bens materiais ao doente. A doação de bens e apoio à investigação clínica do Centro de Mama – CHUSJ, são também objetivos principais da associação. A associação tem ainda como intuito a organização e desenvolvimento de eventos, workshops, ações de formação e educação médica, bem como atividades culturais e recreativas, sendo para isso possível o intercâmbio com outras associações nacionais e internacionais, com o propósito de representar, perante a administração pública, os interesses dos seus associados.</p>
            </div>
            <div class="intro-donate">
                <Button />
            </div>
        </div>
    </div>

    <Gallery />

    <!-- Partners -->
    <div class = "partners">
        <div class = "partners-container">
            <div class = "partners-title">
                <h1>Parceiros</h1>
            </div>
            <hr>

            <div class = "partners-gallery">
                {#each data.partnersList as block}
                    <div class="partners-card">
                        <img src="{block.image}" alt="">
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <Footer />
</div>
