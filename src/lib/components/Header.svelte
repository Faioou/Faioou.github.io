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
                <a href="/">TEA  ⌄</a>
                <!-- <div class = "navbar-item-sub-menu">
                    <p><a href="/statutes">Estatutos</a></p> - Link to download PDF - Estatutos
                    <p><a href="/socials">Órgãos Sociais</a></p> - Page with list of members
                    <p><a href="/history">História</a></p> - Page with history of TEA
                    <p><a href="/mission">Missão e Propósito</a></p> - Page with mission and purpose of TEA
                </div> -->
                <a href="/">Ajuda  ⌄</a>
                <!-- <div class = "navbar-item-sub-menu">
                    <p><a href="/">Sócios</a></p>
                    <p><a href="/">Donativos</a></p>
                    <p><a href="/">Voluntariado</a></p>
                </div> -->
                <a href="/atividades">Atividades</a>
                <a href="/testemunhos">Testemunhos</a>
                <a href="/loja">Loja</a>
                <!-- <a href="/blog">Blog</a> -->
                <a href="/info">Info</a>
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