<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    // List to receive images content
    export let content = []

    // Create a writable store to hold the current index of the image
    let indexFirstCell = writable(0) // First grid cell
    let indexSecondCell = writable(1) // Second grid cell
    let indexThirdCell = writable(2) // Third grid cell

    // Run code when component mounts
    onMount(() => {
        // Create an interval to update the current index every 5 seconds
        const interval = setInterval(() => {
        indexFirstCell.update(value => (value + 1) % content.partnersList.length)
        indexSecondCell.update(value => (value + 1) % content.partnersList.length)
        indexThirdCell.update(value => (value + 1) % content.partnersList.length)
        }, 5000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    })
</script>

<div class="partners-card small">
    <img src = "{content.partnersList[$indexFirstCell].image}"  alt = "{content.partnersList[$indexFirstCell].description}">
</div>
<div class="partners-card">
    <a href = "{content.partnersList[$indexSecondCell].url}"><img src = "{content.partnersList[$indexSecondCell].image}"  alt = "{content.partnersList[$indexSecondCell].description}"></a>
</div>
<div class="partners-card small">
    <img src = "{content.partnersList[$indexThirdCell].image}"  alt = "{content.partnersList[$indexThirdCell].description}">
</div>