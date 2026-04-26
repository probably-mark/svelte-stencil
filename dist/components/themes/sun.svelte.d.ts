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
export type SunProps = typeof __propDef.props;
export type SunEvents = typeof __propDef.events;
export type SunSlots = typeof __propDef.slots;
export default class Sun extends SvelteComponent<SunProps, SunEvents, SunSlots> {
}
export {};
