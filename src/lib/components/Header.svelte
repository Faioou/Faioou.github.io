<script>
    import logo from '$lib/assets/logo-tea.jpg';

    const navbarBurguerClick = () => {
        const navbarBurguer = document.querySelector('.navbar-burguer');
        const navbarLinks = document.querySelector('.navbar-items');
        const navbarUniqueLinks = document.querySelectorAll('.navbar-items li');
        const navbarLinksItems = document.querySelectorAll('.navbar-link');

        // on click, enable 'navbar-burguer-active' class
        navbarLinks.classList.toggle('navbar-burguer-active');

        // change the links color
        navbarLinksItems.forEach((link) => {
            link.style.color = "black";
        })

        // animate links
        navbarUniqueLinks.forEach((link, index) => { // 'index' is used to select each link id
            if (link.style.animation) { // if animation is set, do nothing else, apply config --> this checks if navbar is open or not
                link.style.animation = '';
            } else {
                link.style.animation = `navbarFade 0.2s ease forwards ${index / 2 + 1}s`; // divide index by 5 to add a delay in the fade
            }
        });

        // switch to close sign
        navbarBurguer.classList.toggle('toggle');

        // Add event listener to each link to remove 'navbar-burguer-active' class when clicked
        document.querySelectorAll('.navbar-link').forEach(item => {
            item.addEventListener('click', () => {
                const navbarLinks = document.querySelector('.navbar-items');
                const navbarBurguer = document.querySelector('.navbar-burguer');

                // Check if the navbar is active, if so, remove the active class
                if (navbarLinks.classList.contains('navbar-burguer-active')) {
                    navbarLinks.classList.remove('navbar-burguer-active');
                    navbarBurguer.classList.remove('toggle');
                }

                navbarUniqueLinks.forEach((link) => {
                    link.style.animation = '';
                });
            });
        });
    };

</script>

<header>
    <div class="wrapper wrapper-no-margin">

        <nav>
            <a href = "/"><img src = {logo} alt = "Website logo"></a>
            <ul class = "navbar-items">
                <li id = "about-us-link" class = "navbar-item">
                    <a class = "navbar-link" href = "/about">TEA</a>
                    <div class = "navbar-item-sub-menu">
                        <p><a href="">Estatutos</a></p>
                        <p><a href="">Órgãos Sociais</a></p>
                        <p><a href="">História</a></p>
                        <p><a href="">Missão e Propósito</a></p>
                        <p><a href="">Iniciativas e Eventos</a></p>
                    </div>
                </li>
                <li class = "navbar-item">
                    <a class = "navbar-link" href = "/products">Produtos</a>
                </li>
                <li class = "navbar-item">
                    <a class = "navbar-link" href = "/blog">Blog</a>
                </li>
                <li class = "navbar-item">
                    <a class = "navbar-link" href = "/faqs">Info</a>
                </li>
                <!-- <li class = "navbar-item">
                    <a class = "navbar-link" id = "highlight" href = "https://forms.gle/ACZUpTC84fZFgQ3x8" target = "_blank"><span>QUERO TORNAR-ME SÓCIO</span></a>
                </li> -->
            </ul>
            <!-- <div class = "navbar-burguer">
                <div class = "burguer-r1"></div>
                <div class = "burguer-r2"></div>
                <div class = "burguer-r3"></div>
            </div> -->
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
    }

    .navbar-item-sub-menu p { padding: .5rem; }

    #about-us-link:hover .navbar-item-sub-menu {
        display: block;
    }

    .navbar-burguer { display: none; }

    .navbar-burguer div {
        width: 25px;
        height: 3px;
        margin: 5px;
        background-color: black;
        transition: all 0.3s ease;
    }

    @media screen and (max-width: 1280px) {
        .navbar-items { width: 100%; }

        .navbar-link { font-size: 0.8rem; }
    }
</style>