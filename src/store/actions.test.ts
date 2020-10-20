import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { setOriginalText } from './actions';
import { SET_ORIGINAL_TEXT } from './constants';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

it('should dispatch action', () => {

	const initialState = {
		originalText: '',
		translatedText: ''
	}
	const store = mockStore(initialState)
  
	// Dispatch the action
	store.dispatch(setOriginalText('test original string'));
  
	// Test if store dispatched the expected actions
	const actions = store.getActions()
	const expectedPayload = { type: SET_ORIGINAL_TEXT, payload: 'test original string' };
	expect(actions).toEqual([expectedPayload])
})
