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
export type ButtonHomeProps = typeof __propDef.props;
export type ButtonHomeEvents = typeof __propDef.events;
export type ButtonHomeSlots = typeof __propDef.slots;
export default class ButtonHome extends SvelteComponent<ButtonHomeProps, ButtonHomeEvents, ButtonHomeSlots> {
}
export {};
