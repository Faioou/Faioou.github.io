<script>
    function onClick() {
            // Specify the window size and other options
            var width = 400
            var height = 300
            var left = (screen.width - width) / 2
            var top = (screen.height - height) / 2;
            var windowFeatures = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top

            // Open a new window
            var newWindow = window.open('', '_blank', windowFeatures)

            // Write custom HTML content to the new window
            var customHtml = '<html><head><title>Informação bancária</title></head><body><p>IBAN: XXXX-XXXX-XXXX</p></body></html>'
            newWindow.document.open()
            newWindow.document.write(customHtml)
            newWindow.document.close()
    }
</script>

<div class = "button-container" on:click={onClick}>
    <p>Quero ajudar</p>
</div>