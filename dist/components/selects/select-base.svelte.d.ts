import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        clazz: string;
        func?: () => void;
        items: any;
        selected: string;
        width?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type SelectBaseProps = typeof __propDef.props;
export type SelectBaseEvents = typeof __propDef.events;
export type SelectBaseSlots = typeof __propDef.slots;
export default class SelectBase extends SvelteComponent<SelectBaseProps, SelectBaseEvents, SelectBaseSlots> {
}
export {};
