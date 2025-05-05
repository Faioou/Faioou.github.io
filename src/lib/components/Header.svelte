<script>
    import logo from '$lib/assets/logo-tea.jpg';
</script>

<header class="header">
    <div class="header-content">
        <!-- <div class="header-logo">
            <a href="/"><img src={logo} alt="Logótipo TEA"></a>
        </div> -->
        <div class="header-navbar">

            <div class="header-navbar-menu">
                <a href="">TEA  ⌄</a>
                <!-- <div class = "navbar-item-sub-menu">
                    <p><a href="/statutes">Estatutos</a></p>
                    <p><a href="/socials">Órgãos Sociais</a></p>
                    <p><a href="/history">História</a></p>
                    <p><a href="/mission">Missão e Propósito</a></p>
                    <p><a href="/events">Iniciativas e Eventos</a></p>
                </div> -->
                <a href="/events">Eventos</a>
                <a href="/testimonies">Testemunhos</a>
                <a href="/products">Produtos</a>
                <a href="/blog">Blog</a>
                <a href="/infos">Infos</a>
            </div>

            
        </div>
    </div>
</header>

<style>
    .header {
        width: 100%;
    }

    .header-content {
        padding: .875rem 0 .875rem 0;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .header-logo {
        padding: 1rem;
        display: flex;
        justify-content: center;
    }

    .header-logo img { width: 100px; }

    .header-navbar {
        display: flex;
        justify-content: space-evenly;
    }

    .header-navbar-menu {
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .header-navbar-menu a {
        padding: 0.5rem 1rem;
        text-decoration: none;
        font-weight: 500;
    }
</style>