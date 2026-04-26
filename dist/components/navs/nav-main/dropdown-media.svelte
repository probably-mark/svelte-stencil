
<script>import DropdownLink from "../../dropdowns/dropdown-link.svelte";
import { default_langs } from "../../langs/lang_default_dict.ts";
const title_map = default_langs("\u5A92\u4F53", "media", "\u30E1\u30C7\u30A4\u30A2", "\uBBF8\uB514\uC5B4");
const video_map = default_langs("\u89C6\u9891", "video", "\u30D3\u30C7\u30AA", "\uB3D9\uC601\uC0C1");
const video = { text: video_map, link: "/media/video", "label": "page-video" };
const radio_map = default_langs("\u6536\u97F3\u673A", "radio", "\u30E9\u30B8\u30AA", "\uB77C\uB514\uC624");
const radio = { text: radio_map, link: "/media/radio", "label": "page-radio" };
const image_map = default_langs("\u56FE\u50CF", "image", "\u753B\u50CF", "\uC2EC\uC0C1");
const images = { text: image_map, link: "/media/images", "label": "page-images" };
const links = [video, radio, images];
</script>

<DropdownLink title={title_map} links={links}>
</DropdownLink>
