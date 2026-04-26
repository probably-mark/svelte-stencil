
<script>export let title;
export let stream;
export let fallback;
</script>

<div>
  <h3>{title}</h3>
  <audio controls preload="none">
    <source src={stream?.src} type={stream?.type} />
    <source src={fallback?.src} type={fallback?.type} />
    Your browser does not support playing {title}
  </audio>
  <slot></slot>
</div>

