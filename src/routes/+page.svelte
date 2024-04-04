<script>
    import Header from '$lib/components/Header.svelte';
    import Banner from '$lib/components/Banner.svelte';
    import Gallery from '$lib/components/Gallery.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Button from '$lib/components/Button.svelte';

    // Temp
    import pic4 from '$lib/assets/pic4.jpg';

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

    <!-- Latest news -->
    <div class = "intro">
        <div class = "intro-container">
            <div class = "intro-title">
                <h1>Testemunhos</h1>
            </div>
            <hr>
            <div class="testemony-container">
                <div class="testemony-content">
                    <!-- <p><iframe height="auto" src="https://www.youtube.com/embed/o5ycjPqf94Y?si=JXwMkWNq6SWuH2fj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p> -->
                </div>
                <div class="testemony-content">
                    <img src="{pic4}" alt="">
                    <p>
                        <i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</i>
                        - <b>Maria Santos</b>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- <Footer content = {data} /> -->
</div>
