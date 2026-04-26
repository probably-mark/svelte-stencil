import { SvelteComponent } from "svelte";
import type { Languages } from "../../types/language";
declare const __propDef: {
    props: {
        title: Languages;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DropdownBaseProps = typeof __propDef.props;
export type DropdownBaseEvents = typeof __propDef.events;
export type DropdownBaseSlots = typeof __propDef.slots;
export default class DropdownBase extends SvelteComponent<DropdownBaseProps, DropdownBaseEvents, DropdownBaseSlots> {
}
export {};
