import { actionTypes, LOAD_TRANSLATION, SET_TRANSLATED_TEXT, CLEAR_TRANSLATED_TEXT, CLEAR_ORIGINAL_TEXT, SET_ORIGINAL_TEXT } from "./constants";

import { Dispatch } from "redux";
import { TRANSLATIONS } from "../common/constants";

export const loadTranslation = (originalText: string): actionTypes => ({
	type: LOAD_TRANSLATION,
	payload: translateText(originalText)
})

export const setOriginalText = (originalText: string): actionTypes => ({
	type: SET_ORIGINAL_TEXT,
	payload: originalText
})

export const setTranslatedText = (translatedText: string): actionTypes => ({
	type: SET_TRANSLATED_TEXT,
	payload: translatedText
})

export const clearTranslatedText = (): actionTypes => ({
	type: CLEAR_TRANSLATED_TEXT,
})

export const clearOriginalText = (): actionTypes => ({
	type: CLEAR_ORIGINAL_TEXT,
})

export const translateText = (originalText: string): string => originalText.split('').map((item:string) => TRANSLATIONS.filter(translation => translation.originalText === item.toLowerCase())[0].translatedText).join('');

export const clearAllFields = () => (
	async (dispatch: Dispatch) => {
		dispatch(clearTranslatedText());
		dispatch(clearOriginalText());
	}
)
