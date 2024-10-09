import { KeyEvent } from '../smo/data/common';
/**
 * Event handler for smoosic.  Any UI element can have any number
 * of event handlers.  For modals, event handlers are added/removed
 * as the gain/relinquish control
 * @internal
 * @param sink - an object that implements:
 * @param method - the callback method on sink
 * @param symbol - used to distinguish handler instances of the same type
 */
export interface EventHandler {
    sink: any;
    method: string;
    symbol: Symbol;
}
/**
 * This is the event generating interface for Smoosic.  It is kept as
 * skeletal as possible so applications can call event handling methods from
 * their own event logic.
 * @category SuiUiBase
 */
export declare class BrowserEventSource {
    keydownHandlers: EventHandler[];
    keyupHandlers: EventHandler[];
    mouseMoveHandlers: EventHandler[];
    mouseClickHandlers: EventHandler[];
    mouseUpHandlers: EventHandler[];
    mouseDownHandlers: EventHandler[];
    scoreChangeHandlers: EventHandler[];
    domTriggers: EventHandler[];
    handleMouseMove: ((ev: any) => void) | null;
    handleMouseClick: ((ev: any) => void) | null;
    handleMouseUp: ((ev: any) => void) | null;
    handleMouseDown: ((ev: any) => void) | null;
    handleKeydown: (ev: KeyEvent) => void;
    handleKeyup: (ev: KeyEvent) => void;
    handleScoreChangeEvent: (ev: KeyEvent) => void;
    renderElement: any;
    constructor();
    evKey(event: KeyEvent): Promise<void>;
    keyUp(event: KeyEvent): Promise<void>;
    evScoreChange(event: any): Promise<void>;
    mouseMove(event: any): void;
    mouseClick(event: any): void;
    mouseDown(event: any): void;
    mouseUp(event: any): void;
    setRenderElement(renderElement: any): void;
    _unbindHandlerArray(arSrc: EventHandler[], arDest: EventHandler[], handler: EventHandler): void;
    unbindMouseMoveHandler(handler: EventHandler): void;
    unbindMouseDownHandler(handler: EventHandler): void;
    unbindMouseUpHandler(handler: EventHandler): void;
    unbindMouseClickHandler(handler: EventHandler): void;
    unbindKeydownHandler(handler: EventHandler): void;
    unbindKeyupHandler(handler: EventHandler): void;
    bindKeydownHandler(sink: any, method: string): EventHandler;
    bindKeyupHandler(sink: any, method: string): EventHandler;
    bindMouseMoveHandler(sink: any, method: string): EventHandler;
    bindMouseUpHandler(sink: any, method: string): EventHandler;
    bindScoreChangeHandler(sink: any, method: string): EventHandler;
    bindMouseDownHandler(sink: any, method: string): EventHandler;
    bindMouseClickHandler(sink: any, method: string): EventHandler;
    domClick(selector: string, sink: any, method: string, args: any): void;
}
//# sourceMappingURL=eventSource.d.ts.map