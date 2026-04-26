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
export type UserIconProps = typeof __propDef.props;
export type UserIconEvents = typeof __propDef.events;
export type UserIconSlots = typeof __propDef.slots;
export default class UserIcon extends SvelteComponent<UserIconProps, UserIconEvents, UserIconSlots> {
}
export {};
