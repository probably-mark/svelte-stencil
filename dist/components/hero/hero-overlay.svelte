
<script>import Button from "../buttons/button.svelte";
export let title;
export let image;
export let text;
export let button_text;
export let button_url;
</script>

<div class="hero">
  <img class="rounded-lg opacity-70" src={image} />
  <div class="hero-content text-neutral-content text-center">
    <div class="max-w">
      <h1 class="mb-5 text-5xl font-bold">{title}</h1>
      <p class="mb-5">
        {text}
      </p>
      <Button id={button_text} href={button_url}>{button_text}</Button>
    </div>
  </div>
</div>
