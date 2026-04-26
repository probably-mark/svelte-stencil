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
export type LanguageProps = typeof __propDef.props;
export type LanguageEvents = typeof __propDef.events;
export type LanguageSlots = typeof __propDef.slots;
export default class Language extends SvelteComponent<LanguageProps, LanguageEvents, LanguageSlots> {
}
export {};
