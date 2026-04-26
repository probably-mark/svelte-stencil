import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        swap?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type MoonProps = typeof __propDef.props;
export type MoonEvents = typeof __propDef.events;
export type MoonSlots = typeof __propDef.slots;
export default class Moon extends SvelteComponent<MoonProps, MoonEvents, MoonSlots> {
}
export {};
