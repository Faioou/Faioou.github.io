<script>
    import logo from '$lib/assets/logo-tea.jpg';
</script>

<header class="header">
    <div class="header-content">
        <div class="header-logo">
            <a href="/"><img src={logo} alt="Logótipo TEA"></a>
        </div>
        <div class="header-navbar">
            <ul>
                <li>
                    <a href="">TEA  ⌄</a>
                    <!-- <div class = "navbar-item-sub-menu">
                        <p><a href="/statutes">Estatutos</a></p>
                        <p><a href="/socials">Órgãos Sociais</a></p>
                        <p><a href="/history">História</a></p>
                        <p><a href="/mission">Missão e Propósito</a></p>
                        <p><a href="/events">Iniciativas e Eventos</a></p>
                    </div> -->
                </li>
                <li>
                    <a href="/events">Eventos</a>
                </li>
                <li>
                    <a href="/testimonies">Testemunhos</a>
                </li>
                <li>
                    <a href="/products">Produtos</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="/infos">Infos</a>
                </li>
    
            </ul>
        </div>
    </div>
</header>

<style>
    .header {
        width: 100%;
        border-bottom: 5px solid var(--pink);
    }

    .header-content {
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
        justify-content: center;
        background-color: var(--pink);
    }

    .header-navbar ul { 
        padding: 0;
        display: flex;
        flex-direction: row;
    }

    .header-navbar li {
        padding: 0 1.5rem 0 1.5rem;
        list-style: none;
    }

    .header-navbar a {
        text-decoration: none;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 500;
        color: #FFFFFF;
    }
</style>