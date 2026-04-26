
<script>import Button from "../../buttons/button.svelte";
import { default_langs } from "../../langs/lang_default_dict.ts";
import { language } from "../../../stores/language.store.ts";
let user_map = default_langs("\u7528\u6237", "user", "\u30E6\u30FC\u30B6\u30FC", "\uC0AC\uC6A9\uC790");
$: user = user_map[$language.label];
</script>

<Button id="user-icon" clazz="btn-circle mr-4">{user}</Button>
