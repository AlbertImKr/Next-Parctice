import { render, screen, RenderResult, fireEvent } from '@testing-library/react'
import { Input } from '.'
import React from 'react';


describe('Input', () => {
    let renderResult: RenderResult

    beforeEach(() => {
        renderResult = render(<Input id="username" label="Username" />);
    });

    afterEach(() => {
        renderResult.unmount()
    })

    it('should show input text', () => {
        const inputText = 'Test Input Text'
        const inputNode = screen.getByLabelText('Username') as HTMLInputElement

        fireEvent.change(inputNode, { target: { value: inputText } })

        expect(inputNode.value).toBe(inputText)
    })

    it('should reset when user clicks button', () => {
        const inputText = 'Test Input Text'
        const inputNode = screen.getByLabelText('Username') as HTMLInputElement
        fireEvent.change(inputNode, { target: { value: inputText } })


        const buttonNode = screen.getByRole('button', {
            name: 'Reset',
        }) as HTMLButtonElement
        
        fireEvent.click(buttonNode)

        expect(inputNode)
    })

    it('should be empty in input on initial render', () => {
        const inputNode = screen.getByLabelText('Username') as HTMLInputElement;
        expect(inputNode.value).toBe('');
    });
});