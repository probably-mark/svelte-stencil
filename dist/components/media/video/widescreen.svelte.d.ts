import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        src: String;
        title?: String;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type WidescreenProps = typeof __propDef.props;
export type WidescreenEvents = typeof __propDef.events;
export type WidescreenSlots = typeof __propDef.slots;
export default class Widescreen extends SvelteComponent<WidescreenProps, WidescreenEvents, WidescreenSlots> {
}
export {};
