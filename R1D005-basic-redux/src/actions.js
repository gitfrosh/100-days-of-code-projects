import { COLLAPSE_MENU } from './constants';

// define Redux actions
export const collapseMenu = (collapsed) => {
    console.log('collapsed '+ collapsed)
    return {
        type: COLLAPSE_MENU,
        payload: collapsed
    }
}