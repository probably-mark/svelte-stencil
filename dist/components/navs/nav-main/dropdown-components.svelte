
<script>import DropdownLink from "../../dropdowns/dropdown-link.svelte";
import { default_langs } from "../../langs/lang_default_dict.ts";
const title_map = default_langs("\u6210\u5206", "Components", "\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8", "\uAD6C\uC131\uC694\uC18C");
const hero_map = default_langs("\u82F1\u96C4", "hero", "\u30D2\u30FC\u30ED\u30FC", "\uC601\uC6C5");
const hero = { text: hero_map, link: "/components/hero", label: "page-hero" };
const dropdown_map = default_langs("\u843D\u4E0B", "dropdown", "\u843D\u3061\u308B", "\uC4F0\uB7EC\uC9C0 \uB2E4");
const dropdown = { text: dropdown_map, link: "/components/dropdown", label: "page-dropdown" };
const links = [hero, dropdown];
</script>

<DropdownLink title={title_map} links={links}>
</DropdownLink>
