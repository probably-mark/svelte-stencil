
<script>import DropdownLink from "../../dropdowns/dropdown-link.svelte";
import { default_langs } from "../../langs/lang_default_dict.ts";
const title_map = default_langs("\u4EBA\u5DE5\u667A\u80FD", "AI", "\u30A2\u30A4", "\uC544\u3163");
const text_map = default_langs("\u6587\u672C\u751F\u6210", "text generation", "\u30C6\u30AD\u30B9\u30C8\u306E\u751F\u6210", "\uD14D\uC2A4\uD2B8 \uC0DD\uC131");
const text = { text: text_map, link: "/ai/text", label: "page-text-ai" };
const image_map = default_langs("\u56FE\u50CF\u751F\u6210", "image generation", "\u753B\u50CF\u751F\u6210", "\uC774\uBBF8\uC9C0 \uC0DD\uC131");
const image = { text: image_map, link: "/ai/image", label: "page-text-ai" };
const news_map = default_langs("\u6D88\u606F", "news", "\u30CB\u30E5\u30FC\u30B9", "\uC18C\uC2DD");
const news = { text: news_map, link: "/ai/news", label: "page-news-ai" };
const links = [text, image, news];
</script>

<DropdownLink title={title_map} links={links}>
</DropdownLink>
