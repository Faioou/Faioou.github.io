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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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



