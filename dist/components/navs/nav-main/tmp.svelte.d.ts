/** @typedef {typeof __propDef.props}  TmpProps */
/** @typedef {typeof __propDef.events}  TmpEvents */
/** @typedef {typeof __propDef.slots}  TmpSlots */
export default class Tmp extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TmpProps = typeof __propDef.props;
export type TmpEvents = typeof __propDef.events;
export type TmpSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
