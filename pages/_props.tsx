import { NextPage } from "next"
import { type } from "os"
import styled from 'styled-components'

type ButtonProps = {
    color: string
    backgroundColor: string
}

const Button = styled.button<ButtonProps>`
    color: ${(props) => props.color};
    background: ${(props) => props.backgroundColor};
    border: 2px solid ${(props) => props.color};
    font-size: 2em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radies: 8px;
    cursor: pointer;
`

const Page: NextPage = () => {
    return (
        <div>
            <Button backgroundColor="transparent" color="#FF000">
                Hello
            </Button>
            <Button backgroundColor="#1E90FF" color="white">
                World
            </Button>
        </div>
    )
}

export default Page
