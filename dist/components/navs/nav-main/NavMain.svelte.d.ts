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
export type NavMainProps = typeof __propDef.props;
export type NavMainEvents = typeof __propDef.events;
export type NavMainSlots = typeof __propDef.slots;
export default class NavMain extends SvelteComponent<NavMainProps, NavMainEvents, NavMainSlots> {
}
export {};
