import { KeyEvent } from '../../smo/data/common';
import { ButtonDefinition, ButtonAction } from './button';
import { BrowserEventSource } from '../eventSource';
import { SuiScoreViewOperations } from '../../render/sui/scoreViewOperations';
import { CompleteNotifier, RibbonLayout } from '../common';
export { RibbonLayout } from '../common';
import { SuiTracker } from '../../render/sui/tracker';
import { SuiMenuManager } from '../menus/manager';
import { ButtonLabel } from './button';
import { CollapseRibbonControl } from './collapsable';
import { SmoUiConfiguration } from '../configuration';
export type SuiModalButtonTypes = 'SuiLibraryDialog' | 'SuiTempoDialog';
export declare var SuiModalButtonStrings: string[];
export declare function isModalButtonType(but: string | SuiModalButtonTypes): but is SuiModalButtonTypes;
/**
 * Parameters for creating the global button ribbon object.  The button ribbon supports a
 * button panel in 'top' and 'left' areas, with support for R-to-L languages.
 * Button groups in left and display menus are not collapsible.  They are just a ButtonDefinition
 * capsule but are not actually buttons - event handling is done by this 'ribbon' object.
 * Button groups (mostly obsolete) are collapsible and are first-class button objects and
 * are collapsible.  The content of ribbonButtons determines which buttons show up.
 * ribbon layout determines which show up top vs. left
 * @param {BrowserEventSource} eventSource - buttons will use this to bind click events
 * @param {CompleteNotifier} completeNotifier - buttons that bring up menus and dialogs will pass this to the dialogs
 * @param {SuiTracker} tracker - some buttons act on the current selection
 * @param {SuiMenuManager} menus - some buttons invoke a menu
 * @param {ButtonDefinition[]} - the buttons
 * @param {RibbonLayout} ribbons - where the buttons appear
 * @category SuiButton
 * @see {ButtonDefinition} for how to create/modify buttons
 * @see {defaultRibbonLayout} for buttons supported from the demo application
 */
export interface SuiRibbonParams {
    config: SmoUiConfiguration;
    eventSource: BrowserEventSource;
    view: SuiScoreViewOperations;
    completeNotifier: CompleteNotifier;
    tracker: SuiTracker;
    menus: SuiMenuManager;
    ribbonButtons: ButtonDefinition[];
    ribbons: RibbonLayout;
}
/**
 * Render the ribbon buttons based on group, function, and underlying UI handler.
 * Also handles UI events.
 * @category SuiButton
 */
export declare class RibbonButtons {
    static get paramArray(): string[];
    static _buttonHtml(containerClass: string, buttonId: string, buttonClass: string, buttonText: string, buttonIcon: string, buttonKey: string): any;
    static _buttonSidebarHtml(buttonId: string, buttonClass: string, buttonText: string, buttonIcon: string, buttonKey: string): any;
    static translateButtons: ButtonLabel[];
    controller: CompleteNotifier;
    config: SmoUiConfiguration;
    eventSource: BrowserEventSource;
    view: SuiScoreViewOperations;
    menus: SuiMenuManager;
    ribbons: RibbonLayout;
    ribbonButtons: ButtonDefinition[];
    collapsables: CollapseRibbonControl[];
    collapseChildren: any[];
    constructor(params: SuiRibbonParams);
    _executeButtonModal(buttonElement: string, buttonData: ButtonDefinition): Promise<void>;
    _executeButtonMenu(buttonElement: string, buttonData: ButtonDefinition): void;
    _executeButton(buttonElement: string, buttonData: ButtonDefinition): Promise<void>;
    _bindButton(buttonElement: string, buttonData: ButtonDefinition): void;
    _createCollapsibleButtonGroups(selector: string | HTMLElement): void;
    _createSidebarButtonGroups(selector: string | HTMLElement): void;
    static isCollapsible(action: ButtonAction): boolean;
    _createRibbonHtml(buttonAr: string[], selector: string | HTMLElement): void;
    _createSidebarHtml(buttonAr: string[], selector: string | HTMLElement): void;
    createRibbon(buttonDataArray: string[], parentElement: string | HTMLElement): void;
    createSidebarRibbon(buttonDataArray: string[], parentElement: string | HTMLElement, containerClasses: string): void;
    handleKeyDown(ev: KeyEvent): void;
    display(): void;
}
//# sourceMappingURL=ribbon.d.ts.map