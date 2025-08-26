<script>
    import banner from '$lib/assets/banner.jpg';

    function openLink(url) {
        window.open(url, '_blank');
    }
</script>

<div class="banner">
    <div class="banner-content">
        <div class="banner-content-image">
            <img src={banner} alt="">
        </div>
        <div class="banner-content-text">
            <div class="text-block">
                <h1>Testemunhar É Ajudar</h1>
                <p>A TESTEMUNHAR É AJUDAR (TEA), tem como fim apoiar o doente oncológico, familiares e amigos, desde o momento em que é diagnosticado o cancro. Este apoio baseia-se no contacto pessoal entre o doente e o voluntário (que vivenciou uma situação semelhante), inclusive com fornecimento de bens materiais ao doente. A doação de bens e apoio à investigação clínica do Centro de Mama – CHUSJ, são também objetivos principais da associação. A associação tem ainda como intuito a organização e desenvolvimento de eventos, workshops, ações de formação e educação médica, bem como atividades culturais e recreativas, sendo para isso possível o intercâmbio com outras associações nacionais e internacionais, com o propósito de representar, perante a administração pública, os interesses dos seus associados.</p>
            </div>
            <div class="options">
                <button on:click={() => openLink('/doar')}>Quero Ajudar</button>
                <button on:click={() => openLink('https://google.com/')}>Tornar-me Sócio</button>
            </div>
        </div>
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