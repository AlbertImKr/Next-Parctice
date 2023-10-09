import { StyledButton, StyledButtonProps } from "@/components/StyledButton";
import { Meta } from "@storybook/react";
import { action } from '@storybook/addon-actions'
import { useState } from "react";

export default {
    title: 'Action',
    component: StyledButton,
} as Meta<typeof StyledButton>

const incrementAction = action('increment')

export const Primary = (props: StyledButtonProps) => {
    const [count, setCount] = useState(0)
    const onClick = (e: React.MouseEvent) => {
        incrementAction(e, count)
        setCount((c) => c + 1)
    }

    return (
        <StyledButton {...props} variant="primary" onClick={onClick}>
            Count: {count}
        </StyledButton>
    )
}