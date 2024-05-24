<script>
    import Banner from '$lib/components/Banner.svelte';
    import Button from '$lib/components/Button.svelte';
    import pic1 from '$lib/assets/pic1.jpg'

    export let data;
</script>

<Banner />

<div class = "wrapper">
    <div class = "text-container">
        <h1>Testemunhar É Ajudar</h1>
        <div class = "text-block">
            <p>A TESTEMUNHAR É AJUDAR (TEA), tem como fim apoiar o doente oncológico, familiares e amigos, desde o momento em que é diagnosticado o cancro. Este apoio baseia-se no contacto pessoal entre o doente e o voluntário (que vivenciou uma situação semelhante), inclusive com fornecimento de bens materiais ao doente. A doação de bens e apoio à investigação clínica do Centro de Mama – CHUSJ, são também objetivos principais da associação. A associação tem ainda como intuito a organização e desenvolvimento de eventos, workshops, ações de formação e educação médica, bem como atividades culturais e recreativas, sendo para isso possível o intercâmbio com outras associações nacionais e internacionais, com o propósito de representar, perante a administração pública, os interesses dos seus associados.</p>
        </div>

        <div class="text-block">
            <div class="gallery">
                <div class="gallery-item"><img src={pic1} alt=""></div>
                <div class="gallery-item"><img src={pic1} alt=""></div>
                <div class="gallery-item"><img src={pic1} alt=""></div>
            </div>
        </div>

        <!-- <div class="intro-donate">
            <Button />
        </div> -->

        <h2>Testemunhos</h2>
        <div class="text-block">
            <div class="quotes-container">
                <div class="quote">
                    <p><i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</i></p>
                    <!-- <div class="quote-author"><p><b>Maria Santos</b></p></div> -->
                </div>
                <div class="quote">
                    <p><i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</i></p>
                    <!-- <div class="quote-author"><p><b>Maria Santos</b></p></div> -->
                </div>
                <div class="quote">
                    <p><i>Testemunho e Memórias de uma tormenta avassaladora que a 21 julho 2019 me invadiu. Sem saber o que iria enfrentar fui assaltada pelo medo, pela tristeza e incerteza. Cancro da mama invasivo com metástases na axila. Literalmente vivendo um dia de cada vez...Mas sempre munida de uma força destemida. Não vos falo do que passei até aqui, porque de uma forma ou outra o sofrimento só nós é que o sentimos e é uma solidão aterradora.</i></p>
                    <!-- <div class="quote-author"><p><b>Maria Santos</b></p></div> -->
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .gallery {
        width: 100%;
        margin-top: 4rem;
        margin-bottom: 4rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        align-content: center;
    }

    .gallery-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .gallery-item img {
        max-width: 350px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .quotes-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    .quote {
        padding: 2rem;
        background-color: var(--pink);
        color: #FFF;
        border-radius: 25px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .quote-author {
        padding: 0 2rem;
        text-align: right;
    }

    @media screen and (max-width: 1280px) {
        .quotes-container { grid-template-columns: repeat(1, 1fr); }
    }
</style>
