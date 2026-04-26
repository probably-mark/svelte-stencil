
<script>import DropdownItem from "../../dropdowns/dropdown-item.svelte";
import { default_langs } from "../../langs/lang_default_dict.ts";
import { language, language_options, change_language } from "../../../stores/language.store.ts";
let title_map = default_langs("\u4E2D\u6587", "english", "\u65E5\u672C\u8A9E", "\uD55C\uAD6D\uC778");
</script>

<DropdownItem title={title_map} items={language_options} func={change_language}>
</DropdownItem>

