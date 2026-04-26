
<script>import DropdownBase from "./dropdown-base.svelte";
import { language } from "../../stores/language.store.ts";
export let title;
export let links;
export let clazz;
</script>

<DropdownBase title={title}>
  {#each links as obj}
    <li role="tab" tabindex="1"
        aria-label={obj.label}
        class="{clazz}"
      >
      <a href={obj.link}
         class="highlight">
        {obj.text[$language.label]}
      </a>
    </li>
  {/each}
</DropdownBase>

