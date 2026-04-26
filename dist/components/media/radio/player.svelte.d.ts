import { SvelteComponent } from "svelte";
import type { Audio } from "../../../types/media";
declare const __propDef: {
    props: {
        title: any;
        stream: Audio;
        fallback: Audio;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type PlayerProps = typeof __propDef.props;
export type PlayerEvents = typeof __propDef.events;
export type PlayerSlots = typeof __propDef.slots;
export default class Player extends SvelteComponent<PlayerProps, PlayerEvents, PlayerSlots> {
}
export {};
