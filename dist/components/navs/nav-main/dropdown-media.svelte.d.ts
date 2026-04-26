import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DropdownMediaProps = typeof __propDef.props;
export type DropdownMediaEvents = typeof __propDef.events;
export type DropdownMediaSlots = typeof __propDef.slots;
export default class DropdownMedia extends SvelteComponent<DropdownMediaProps, DropdownMediaEvents, DropdownMediaSlots> {
}
export {};
