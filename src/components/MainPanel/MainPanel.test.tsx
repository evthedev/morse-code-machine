import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { MainPanel } from './MainPanel';
import { IState } from '../../interfaces/interfaces';
import { createStore } from 'redux';
import { reducer } from '../../store/reducer';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('<MainPanel /> component', () => {
        const mockInitialState: IState = {
                originalText: '',
                translatedText: ''
        }

        const getWrapper = (mockStore = createStore(reducer, mockInitialState)) => shallow(
                <Provider store={mockStore}>
                        <MainPanel />
                </Provider>
        )
        it('should mount correctly', () => {
                const wrapper = getWrapper();
                expect(wrapper.isEmptyRender()).toBe(false);
                expect(wrapper).toMatchSnapshot();
	})
})