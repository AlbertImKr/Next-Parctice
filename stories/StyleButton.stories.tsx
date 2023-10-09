
import { StyledButton,StyledButtonProps } from "@/components/StyledButton";
import { linkTo } from "@storybook/addon-links";
import { Meta } from "@storybook/react";


export default {
    title: 'StyledButton',
    component: StyledButton,
} as Meta<typeof StyledButton>

export const Primary = (props: StyledButtonProps) => {
    return (
        <StyledButton {...props} variant="primary" onClick={linkTo('StyledButton', 'Success')}>
            Primary
        </StyledButton>
    )
}

export const Success = (props: StyledButtonProps) => {
    return (
        <StyledButton {...props} variant="success" onClick={linkTo('StyledButton','Transparent')}>
            Success
        </StyledButton>
    )
}

export const Transparent = (props: StyledButtonProps) => {
    return (
        <StyledButton {...props} variant="transparent" onClick={linkTo('StyledButton','Primary')}>
            Transparent
        </StyledButton>
    )
}
