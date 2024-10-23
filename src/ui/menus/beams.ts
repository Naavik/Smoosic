import { SuiMenuBase, SuiMenuParams, MenuDefinition, SuiMenuHandler, SuiMenuShowOption, 
  SuiConfiguredMenuOption, SuiConfiguredMenu, customizeMenuOptionsFcn } from './menu';

  declare var $: any;
/**
 * stuff you can do to beams
 * @category SuiMenu
 */
export class SuiBeamMenu extends SuiConfiguredMenu {
  constructor(params: SuiMenuParams) {
    super(params, 'Beams', SuiBeamMenuOptions);
  }  
}

/**
 * @category SuiMenu
 */
const toggleBeamGroupMenuOption: SuiConfiguredMenuOption = {
  handler: async (menu: SuiMenuBase) => {
    menu.view.toggleBeamGroup();
  }, display: (menu: SuiMenuBase) => {
    for (let i = 0; i < menu.view.tracker.selections.length; ++i) {
      const mm = menu.view.tracker.selections[i].measure;
      for (let j = 0; j < mm.voices.length; ++j) {
        const vv = mm.voices[j];
        for (let k = 0; k < vv.notes.length; ++k) {
          const nn = vv.notes[k];
          if (nn) {
            if (nn.noteType === 'n' &&  nn.tickCount < 4096) {
              return true;
            }
          }
        }
      }
    }
    return false;
  },
  menuChoice: {
    icon: 'icon smo-icon icon-beamBreak',
    text: 'Toggle Beam Group',
    hotkey: 'x',
    value: 'toggleBeamMenuOption'
  }
}
/**
 * @category SuiMenu
 */
const beamSelectionsMenuOption: SuiConfiguredMenuOption = {
  handler: async (menu: SuiMenuBase) => {
    menu.view.beamSelections();
  }, display: (menu: SuiMenuBase) => {
    for (let i = 0; i < menu.view.tracker.selections.length; ++i) {
      const mm = menu.view.tracker.selections[i].measure;
      for (let j = 0; j < mm.voices.length; ++j) {
        const vv = mm.voices[j];
        for (let k = 0; k < vv.notes.length; ++k) {
          const nn = vv.notes[k];
          if (nn) {
            if (nn.noteType === 'n' &&  nn.tickCount < 4096) {
              return true;
            }
          }
        }
      }
    }
    return false;
  },
  menuChoice: {
    icon: 'icon smo-icon icon-beam',
    text: 'Beam Selections',
    hotkey: 'Shift-X',
    value: 'beamSelectionsMenuOption'
  }
}
/**
 * @category SuiMenu
 */
const toggleBeamDirectionMenuOption: SuiConfiguredMenuOption = {
  handler: async (menu: SuiMenuBase) => {
    menu.view.toggleBeamDirection();
  }, display: (menu: SuiMenuBase) => {
    for (let i = 0; i < menu.view.tracker.selections.length; ++i) {
      const mm = menu.view.tracker.selections[i].measure;
      for (let j = 0; j < mm.voices.length; ++j) {
        const vv = mm.voices[j];
        for (let k = 0; k < vv.notes.length; ++k) {
          const nn = vv.notes[k];
          if (nn) {
            if (nn.noteType === 'n') {
              return true;
            }
          }
        }
      }
    }
    return false;
  },
  menuChoice: {
    icon: 'icon icon-smo icon-flagFlip',
    text: 'Toggle Stem Direction (auto, up, down)',
    hotkey: 'Shift-B',
    value: 'toggleBeamDirection'
  }
}

/**
 * Stuff you can do to beams
 * @category SuiMenu
 */
export const SuiBeamMenuOptions: SuiConfiguredMenuOption[] = [toggleBeamGroupMenuOption,
  beamSelectionsMenuOption, toggleBeamDirectionMenuOption
];