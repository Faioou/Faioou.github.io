<script>
    import banner from '$lib/assets/banner.jpg';
</script>

<!-- Banner -->
<div class = "banner">
    <img class = "banner-img" src = {banner} alt = "Website banner">
</div>

<style>
    .banner {
        display: flex;
        justify-content: center;
        margin-bottom: 4rem;
    }
    .banner img {
        max-width: 70%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

</style>