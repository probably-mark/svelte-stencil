
<script>import DropdownBase from "./dropdown-base.svelte";
import { language } from "../../stores/language.store.ts";
export let title;
export let items;
export let clazz;
export let func = () => {
};
</script>

<DropdownBase bind:title={title}>
  {#each items as obj}
    <li role="tab" tabindex="1"
        aria-label={obj.text[$language.label]}
        class="{clazz} btn btn-sm btn-block btn-ghost justify-start"
        on:keypress={() => func(obj)}
        on:click={() => func(obj)}
      >
      {obj.text[$language.label]}
    </li>
  {/each}
</DropdownBase>

