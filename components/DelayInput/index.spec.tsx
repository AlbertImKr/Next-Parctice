import { RenderResult, fireEvent, render, screen, act } from "@testing-library/react"
import { DelayInput } from "."
import React from 'react';



describe('DelayInput', () => {
    let renderResult: RenderResult;
    let handleChange: jest.Mock

    beforeEach(() => {
        jest.useFakeTimers()
        handleChange = jest.fn()

        renderResult = render(<DelayInput onChange={handleChange} />)
    })

    afterEach(() => {
        renderResult.unmount()
        jest.useFakeTimers()
    })

    it('should display empty in span on initial render', () => {
        const spanNode = screen.getByTestId('display-text') as HTMLSpanElement
        expect(spanNode.textContent).toBe('입력한 텍스트: ')
    })

    it('should display input text 1second after onChange event occurs', async () => {
        const inputText = 'Test Input Text'
        const inputNode = screen.getByTestId('input-text') as HTMLInputElement

        fireEvent.change(inputNode, { target: { value: inputText } })

        await act(() => {
            jest.runAllTimers()
        })

        const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

        expect(spanNode.textContent).toBe(`입력한 텍스트: ${inputText}`)
    })

    it('should display "입력 중 ..." immediately after onChange event occurs', () => {
        const inputText = 'Test Input Text'
        const inputNode = screen.getByTestId('input-text') as HTMLInputElement

        fireEvent.change(inputNode, { target: { value: inputText } })

        const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

        expect(spanNode.textContent).toBe(`입력 중...`)
    })

    it('should call onChange 1second after onChange event occurs', async () => {
        const inputText = 'Test Input Text'
        const inputNode = screen.getByTestId('input-text') as HTMLInputElement

        fireEvent.change(inputNode, { target: { value: inputText } })

        await act(() => {
            jest.runAllTimers()
        })

        expect(handleChange).toHaveBeenCalled()
    })
})