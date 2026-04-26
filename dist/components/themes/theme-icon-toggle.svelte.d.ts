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
export type ThemeIconToggleProps = typeof __propDef.props;
export type ThemeIconToggleEvents = typeof __propDef.events;
export type ThemeIconToggleSlots = typeof __propDef.slots;
export default class ThemeIconToggle extends SvelteComponent<ThemeIconToggleProps, ThemeIconToggleEvents, ThemeIconToggleSlots> {
}
export {};
