import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title: string;
        image: any;
        text: string;
        button_text: string;
        button_url: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type HeroOverlayProps = typeof __propDef.props;
export type HeroOverlayEvents = typeof __propDef.events;
export type HeroOverlaySlots = typeof __propDef.slots;
export default class HeroOverlay extends SvelteComponent<HeroOverlayProps, HeroOverlayEvents, HeroOverlaySlots> {
}
export {};
