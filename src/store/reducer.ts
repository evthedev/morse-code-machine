import { defaultState } from '../common/defaults';
import { IState } from '../interfaces/interfaces';
import { actionTypes, LOAD_TRANSLATION, CLEAR_ORIGINAL_TEXT, CLEAR_TRANSLATED_TEXT, SET_ORIGINAL_TEXT, SET_TRANSLATED_TEXT } from './constants';

export const reducer = (state: IState = defaultState, action: actionTypes): IState => {
	switch (action.type) {
		case LOAD_TRANSLATION:
			return {
				...state,
				translatedText: action.payload
			}
		case SET_ORIGINAL_TEXT:
			return {
				...state,
				originalText: action.payload
			}
		case SET_TRANSLATED_TEXT:
			return {
				...state,
				translatedText: action.payload
			}
		case CLEAR_TRANSLATED_TEXT:
			return {
				...state,
				translatedText: ''
			}
		case CLEAR_ORIGINAL_TEXT:
			return {
				...state,
				originalText: ''
			}
		default:
			return state		
	}
}


// selectionType: ISelectType | null,
// 	characterClasses: string[],
// 	characterSubclasses: string[],
// 	selectedCharacterClassOrSubclass: IClassOrSubclass | {},
// 	selectedClassSpells: IGenericEntity[],
// 	selectedSubclassSpells: IGenericEntity[],
// 	selectedSubclassLevel: IGenericEntity | {},
// 	selectedSubclassLevelSpells