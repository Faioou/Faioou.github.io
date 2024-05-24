<script>
    import logo from '$lib/assets/logo-tea.jpg';
</script>

<header>
    <div class="wrapper wrapper-no-margin">

        <nav>
            <a href = "/"><img src = {logo} alt = "Website logo"></a>
            <ul class = "navbar-items">
                <li id = "about-us-link" class = "navbar-item">
                    <a class = "navbar-link" href = "">TEA</a>
                    <div class = "navbar-item-sub-menu">
                        <p><a href="/statutes">Estatutos</a></p>
                        <p><a href="/socials">Órgãos Sociais</a></p>
                        <p><a href="/history">História</a></p>
                        <p><a href="/mission">Missão e Propósito</a></p>
                        <p><a href="/events">Iniciativas e Eventos</a></p>
                    </div>
                </li>
                <li class = "navbar-item">
                    <a class = "navbar-link" href = "/products">Produtos</a>
                </li>
                <li class = "navbar-item">
                    <a class = "navbar-link" href = "/blog">Blog</a>
                </li>
                <li class = "navbar-item">
                    <a class = "navbar-link" href = "/infos">Info</a>
                </li>
                <!-- <li class = "navbar-item">
                    <a class = "navbar-link" id = "highlight" href = "https://forms.gle/ACZUpTC84fZFgQ3x8" target = "_blank"><span>QUERO TORNAR-ME SÓCIO</span></a>
                </li> -->
            </ul>
        </nav>

    </div>
</header>

<style>
    nav {
        padding: 0.5rem 0 .5rem 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    nav img { max-height: 150px; }

    .navbar-items {
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        border-top: 2px solid var(--light-grey);
        border-bottom: 2px solid var(--light-grey);
    }

    .navbar-item {
        padding: 1rem;
        display: inline;
        list-style: none;
    }

    .navbar-link {
        padding: 1rem;
        font-size: 0.9rem;
        color: black;
        text-decoration: none;
    }

    .navbar-item-sub-menu {
        padding: 1rem 1rem 0 1rem;
        display: none;
        line-height: 1;
        position: absolute;
        z-index: 5;
        background-color: #FFF;
        border-radius: 25px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .navbar-item-sub-menu a {
        padding: .5rem;
        font-size: .9rem;
        text-decoration: none;
        color: #000;
    }

    #about-us-link:hover .navbar-item-sub-menu {
        display: block;
    }

    @media screen and (max-width: 1280px) {
        .navbar-items { width: 100%; }

        .navbar-link { font-size: 0.8rem; }
    }
</style>