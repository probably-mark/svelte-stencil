import { SvelteComponent } from "svelte";
import type { DropDownItem } from "../../types/dropdowns";
import type { Languages } from "../../types/language";
declare const __propDef: {
    props: {
        title: Languages;
        items: DropDownItem[];
        clazz: string;
        func?: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DropdownItemProps = typeof __propDef.props;
export type DropdownItemEvents = typeof __propDef.events;
export type DropdownItemSlots = typeof __propDef.slots;
export default class DropdownItem extends SvelteComponent<DropdownItemProps, DropdownItemEvents, DropdownItemSlots> {
}
export {};
