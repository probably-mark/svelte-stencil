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
export type ThemeButtonToggleProps = typeof __propDef.props;
export type ThemeButtonToggleEvents = typeof __propDef.events;
export type ThemeButtonToggleSlots = typeof __propDef.slots;
export default class ThemeButtonToggle extends SvelteComponent<ThemeButtonToggleProps, ThemeButtonToggleEvents, ThemeButtonToggleSlots> {
}
export {};
