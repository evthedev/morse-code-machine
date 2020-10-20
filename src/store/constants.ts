export const LOAD_TRANSLATION = 'LOAD_TRANSLATION';
export const SET_ORIGINAL_TEXT = 'SET_ORIGINAL_TEXT';
export const SET_TRANSLATED_TEXT = 'SET_TRANSLATED_TEXT';
export const CLEAR_TRANSLATED_TEXT = 'CLEAR_TRANSLATED_TEXT';
export const CLEAR_ORIGINAL_TEXT = 'CLEAR_ORIGINAL_TEXT';

export interface LoadTranslationAction {
	type: typeof LOAD_TRANSLATION;
	payload: string
}

export interface SetOriginalTextAction {
	type: typeof SET_ORIGINAL_TEXT;
	payload: string
}

export interface SetTranslatedTextAction {
	type: typeof SET_TRANSLATED_TEXT;
	payload: string
}

export interface ClearTranslatedTextAction {
	type: typeof CLEAR_TRANSLATED_TEXT;
}

export interface ClearOriginalTextAction {
	type: typeof CLEAR_ORIGINAL_TEXT;
}

export type actionTypes = LoadTranslationAction | SetOriginalTextAction | SetTranslatedTextAction | ClearTranslatedTextAction | ClearOriginalTextAction;