import { SvelteComponent } from "svelte";
import type { DropDownLink } from "../../types/dropdowns";
import type { Languages } from "../../types/language";
declare const __propDef: {
    props: {
        title: Languages;
        links: DropDownLink[];
        clazz: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DropdownLinkProps = typeof __propDef.props;
export type DropdownLinkEvents = typeof __propDef.events;
export type DropdownLinkSlots = typeof __propDef.slots;
export default class DropdownLink extends SvelteComponent<DropdownLinkProps, DropdownLinkEvents, DropdownLinkSlots> {
}
export {};
