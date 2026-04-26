
<script>import DropdownInput from "../dropdowns/dropdown-input.svelte";
import { default_langs } from "../langs/lang_default_dict.ts";
const autumn = {
  label: "autumn",
  text: default_langs("autumn", "autumn", "autumn", "autumn")
};
const cupcake = {
  label: "cupcake",
  text: default_langs("cupcake", "cupcake", "cupcake", "cupcake")
};
const emerald = {
  label: "emerald",
  text: default_langs("emerald", "emerald", "emerald", "emerald")
};
const garden = {
  label: "garden",
  text: default_langs("garden", "garden", "garden", "garden")
};
const coffee = {
  label: "coffee",
  text: default_langs("coffee", "coffee", "coffee", "coffee")
};
const forest = {
  label: "forest",
  text: default_langs("forest", "forest", "forest", "forest")
};
const luxury = {
  label: "luxury",
  text: default_langs("luxury", "luxury", "luxury", "luxury")
};
const themes = [autumn, cupcake, emerald, garden, coffee, forest, luxury];
let selected_item = themes[0].text;
let display_item = themes[0].text;
function change_title(obj) {
  selected_item = obj.text;
}
</script>

<DropdownInput bind:title={selected_item} items={themes}
              func={change_title}
              clazz={"theme-controller"}>
</DropdownInput>
