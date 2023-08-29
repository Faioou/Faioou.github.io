<script>
    import Header from '$lib/components/Header.svelte';
    import Banner from '$lib/components/Banner.svelte';
    import Footer from '$lib/components/Footer.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
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
        </div>
    </div>

    <Gallery />

    <!-- Contacts -->
    <div class = "contacts">
        <div class = "contacts-container">
            <div class = "contacts-title">
                <h1>Contactos</h1>
            </div>
            <hr>
            <div class = "contacts-content">
                <h2>e-mail@tea.pt</h2>
                <p>Rua da Associação 123<br />
                    XXXX-XXX Porto<br />
                <a href = "">[ver mapa]</a><br />
                +3510000000</p>
            </div>
        </div>
    </div>

    <Footer />
</div>



