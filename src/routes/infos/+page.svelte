<script>
    import PortableText from '$lib/components/PortableText.svelte'

    let isActive = [];

    // Update the value of 'isActive' from True to False at button click
    function toggleBtn(index) {
        isActive[index] = !isActive[index];
    }

    export let data;
</script>

<div class="wrapper">
    <div class="text-container">
        <h1>Informações</h1>
        <div class = "faqs">
            <h2>FAQs</h2>
            <div class = "faqs-content">
                <div class="faqs-list">
                    {#each data.faqsList as block, i}
                        <div class = "faqs-list-item">
                            <div class="expansion-item">
                                <div class="item-header">
                                    <h3>{block.question}</h3>
                                    <!--
                                        on:click={() => toggleBtn(i)}: This syntax uses an arrow function as the event handler.
                                        The arrow function is executed only when the element is clicked, and it then calls the toggleBtn function with the argument i.
                                    -->
                                    <button class={isActive[i] ? 'toggle-btn active' : 'toggle-btn'} on:click={() => toggleBtn(i)}>&#x25BA;</button>
                                </div>
                                <div class={isActive[i] ? 'item-content expanded' : 'item-content'}>
                                    <PortableText content = {block.answer} />
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
<div class = "wrapper">
    <div class="text-container">
        <div class = "contacts">
            <div class = "contacts-content">
                <h2>Contactos</h2>
                <div class = "contacts-info">
                    <div class = "contacts-info-item-main">
                        <h2>Fale connosco</h2>
                    </div>
                    <div class = "contacts-info-item">
                        <p>testemunhareajudar@gmail.com</p>
                        <p>+3510000000</p>
                    </div>
                </div>
                <div class = "contacts-info">
                    <div class = "contacts-info-item-main">
                        <h2>Onde estamos</h2>
                    </div>
                    <div class = "contacts-info-item">
                        <p><b>Sede</b></p>
                        <p>Alameda Professor Hernâni Monteiro</p>
                        <p>4200-319 Porto</p>
                        <p><a href = "https://maps.app.goo.gl/5yhunCAbiQfg8P918">[ver Google Maps]</a></p>
                    </div>
                    <div class = "contacts-info-item">
                        <p><b>Casa TEA</b></p>
                        <p>Rua de Crestins 18</p>
                        <p>4470 Moreira da Maia</p>
                        <p><a href = "https://maps.app.goo.gl/1sLnD2y1gGEpLaUM6">[ver Google Maps]</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .faqs {
        padding: 2rem;
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .faqs-content {
        width: 100%;
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .expansion-item {
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
    }

    .item-header {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .toggle-btn {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 18px;
        transition: transform 0.3s ease; /* Add transition for smooth rotation */
    }

    .active {
        transform: rotate(90deg);/* Rotate the button 90 degrees when clicked */
    }

    .item-content {
        display: none;
        padding: 10px;
    }

    .expanded {
        display: block;
    }

    .faqs-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .faqs-list-item {
        padding: 1rem 2rem;
        margin-bottom: 2rem;
        width: 100%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .contacts {
        padding: 2rem;
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .contacts-content {
        width: 100%;
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    /* Contacts */
    .contacts-info {
        padding: 4vh;
        margin: 2rem 0 2rem;
        width: 100%;
        display: flex;
        line-height: 1;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .contacts-info-item-main {
        width: 30%;
        display: flex;
        align-items: center;
    }

    .contacts-info-item {
        width: 35%;
        display: flex;
        flex-direction: column;
    }

    .contacts-info-item a {
        text-decoration: none;
        color: var(--pink);
    }

    @media screen and (max-width: 1280px) {
        .faqs-list-item {
            padding: 0 2rem;
            width: 100%;
        }
    }
</style>