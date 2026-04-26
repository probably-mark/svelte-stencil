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
export type DropdownAiProps = typeof __propDef.props;
export type DropdownAiEvents = typeof __propDef.events;
export type DropdownAiSlots = typeof __propDef.slots;
export default class DropdownAi extends SvelteComponent<DropdownAiProps, DropdownAiEvents, DropdownAiSlots> {
}
export {};
