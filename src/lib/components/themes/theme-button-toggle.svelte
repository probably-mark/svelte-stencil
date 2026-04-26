
<script lang="ts">

  import { onMount } from 'svelte';

  let isDarkMode = true;
  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  $: if (mounted) {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }
</script>

<form>
  <input type="checkbox" value={isDarkMode ? "autumn" : "luxury"} name="themetoggle" class=" toggle theme-controller ml-4" />
</form>
