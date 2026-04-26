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
export type ThemeDropdownProps = typeof __propDef.props;
export type ThemeDropdownEvents = typeof __propDef.events;
export type ThemeDropdownSlots = typeof __propDef.slots;
export default class ThemeDropdown extends SvelteComponent<ThemeDropdownProps, ThemeDropdownEvents, ThemeDropdownSlots> {
}
export {};
