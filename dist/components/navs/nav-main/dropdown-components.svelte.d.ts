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
export type DropdownComponentsProps = typeof __propDef.props;
export type DropdownComponentsEvents = typeof __propDef.events;
export type DropdownComponentsSlots = typeof __propDef.slots;
export default class DropdownComponents extends SvelteComponent<DropdownComponentsProps, DropdownComponentsEvents, DropdownComponentsSlots> {
}
export {};
