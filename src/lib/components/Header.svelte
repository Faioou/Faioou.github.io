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
    <!-- Navigation -->
    <nav class = "navbar">
        <div class = "navbar-container">
            <div class = "navbar-container-logo">
                <a href = "/"><img src = {logo} alt = "Website logo"></a>
            </div>
            <div class="navbar-container-items">
                <ul class = "navbar-items">
                    <li class = "navbar-item">
                        <a class = "navbar-link" href = "/about">SOBRE NÓS</a>
                    </li>
                    <li class = "navbar-item">
                        <a class = "navbar-link" href = "/products">PRODUTOS</a>
                    </li>
                    <li class = "navbar-item">
                        <a class = "navbar-link" href = "/events">EVENTOS</a>
                    </li>
                    <li class = "navbar-item">
                        <a class = "navbar-link" href = "/blog">BLOG</a>
                    </li>
                    <li class = "navbar-item">
                        <a class = "navbar-link" id = "highlight" href = "https://forms.gle/ACZUpTC84fZFgQ3x8" target = "_blank"><span>QUERO TORNAR-ME SÓCIO</span></a>
                    </li>
                </ul>
            </div>
            <div class = "navbar-burguer" on:click={navbarBurguerClick}>
                <div class = "burguer-r1"></div>
                <div class = "burguer-r2"></div>
                <div class = "burguer-r3"></div>
            </div>
        </div>
    </nav>
</header>