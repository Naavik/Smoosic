import { noteModifierDynamicCtorInit } from '../smo/data/noteModifiers';
import { measureModifierDynamicCtorInit } from '../smo/data/measureModifiers';
import { staffModifierDynamicCtorInit } from '../smo/data/staffModifiers';
import { scoreModifierDynamicCtorInit } from '../smo/data/scoreModifiers';
import { collapsableButtonInit } from '../ui/buttons/collapsable';
import { menuTranslationsInit } from '../ui/menus/manager';
import { initDialogTranslationElements, initDialogConstructors } from '../ui/dialogs/factory';

export const dynamicCtorInit = () => {
  noteModifierDynamicCtorInit();
  measureModifierDynamicCtorInit();
  staffModifierDynamicCtorInit();
  scoreModifierDynamicCtorInit();
  collapsableButtonInit();
  menuTranslationsInit();
  initDialogTranslationElements();
  initDialogConstructors();
}
