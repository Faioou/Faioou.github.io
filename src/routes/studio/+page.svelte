<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(() => {
      setTimeout(() => {
        goto('https://tea-cms.netlify.app/desk');
      }, 2000);
    });
</script>