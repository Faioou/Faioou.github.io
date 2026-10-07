<script>
    import logo from '$lib/assets/TEA_web.svg';
</script>

<header class="header">
    <div class="header-content">
        <div class="header-logo">
            <a href="/"><img src={logo} alt="Logótipo TEA"></a>
        </div>
        <div class="header-navbar">

            <div class="header-navbar-menu">
                <a href="/">TEA</a>
                <a href="/missao">Missão e Propósito</a>
                <!-- <div class="navbar-item-with-submenu">
                    <a href="/">TEA  ⌄</a>
                    <div class="navbar-item-sub-menu">
                        <!-- <p><a href="/estatutos">Estatutos</a></p>
                        <p><a href="/orgaos">Órgãos Sociais</a></p>
                        <p><a href="/historia">História</a></p>
                        <p><a href="/missao">Missão e Propósito</a></p>
                    </div>
                </div>
                <!-- <div class="navbar-item-with-submenu">
                    <a href="/">Ajuda  ⌄</a>
                    <div class = "navbar-item-sub-menu">
                        <p><a href="/">Sócios</a></p>
                        <p><a href="/">Donativos</a></p>
                        <p><a href="/">Voluntariado</a></p>
                    </div>
                </div>
                <a href="/atividades">Atividades</a>
                <a href="/testemunhos">Testemunhos</a>
                <a href="/merchandising">Merchandising</a>
                <a href="/blog">Blog</a>
                <a href="/info">Info</a>-->
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

    .navbar-item-with-submenu {
        position: relative;
        display: inline-block;
    }

    .navbar-item-sub-menu {
        padding: 0.5rem;
        width: 200px;
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background: white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        text-align: left;
        z-index: 10;
    }

    .navbar-item-with-submenu:hover .navbar-item-sub-menu {
        display: block;
    }
</style>
