<script>
    // Footer date (year)
    const date = new Date()
    const year = date.getFullYear()
</script>

<footer class="footer">
    <div class="footer-content">
        <p>Copyright @ Testemunhar É Ajudar - {year} | Todos os direitos reservados.</p>
    </div>
</footer>

<style>
    footer {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        font-size: 0.9rem;
        background-color: var(--light-grey);
    }

    .footer-content {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 1280px) {
        .footer-content { width: 90%; }
    }
</style>