import { StyledButton } from "@/components/StyledButton";
import MDXDocument from './StyleButton.mdx'
import { Meta } from "@storybook/react";

export default {
    title: 'StyledButton',
    component: StyledButton,
    parameters: {
        docs: {
            page: MDXDocument,
        },
    },
} as Meta<typeof StyledButton>