'use strict';

import React from 'react';
import { mount } from 'enzyme';
import MessageForm from '../../message-form';

describe('Components: <MessageForm />', () => {
	var wrapper, messageForm, props,
		textInput, submitInput;

	beforeEach(() => {
		props = {
			onChange: jasmine.createSpy('onChange'),
			onSend: jasmine.createSpy('onSend')
		};

		wrapper = mount(<MessageForm {...props} />);
		messageForm = wrapper.find('.message-form');
		textInput = messageForm.find('input').first();
		submitInput = messageForm.find('input').last();
	});

	it('should have a text input', () => {
		expect(textInput.prop('type')).toBe('text');
	});

	it('should have a submit input', () => {
		expect(submitInput.prop('type')).toBe('submit');
	});

	it('should call onChange when typing in text input', () => {
		textInput.simulate('change', { target: { value: 'test' } });
		expect(props.onChange).toHaveBeenCalled();
	});

	it('should call onSend when submitting the message with a click', () => {
		textInput.simulate('change', { target: { value: 'test' } });
		submitInput.simulate('click');
		expect(props.onSend).toHaveBeenCalled();
	});

	it('should call onSend when submitting the message with an enter', () => {
		textInput.simulate('change', { target: { value: 'test' } });
		textInput.simulate('keypress', { charCode: 13 });
		expect(props.onSend).toHaveBeenCalled();
	});

	it('should not call onSend if charCode is not 13 (enter)', () => {
		textInput.simulate('change', { target: { value: '' } });
		textInput.simulate('keypress', { charCode: 27 });
		expect(props.onSend).not.toHaveBeenCalled();
	});
});
