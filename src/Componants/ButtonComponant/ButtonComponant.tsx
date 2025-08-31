import { Button } from "@mui/material"
import "./ButtonComponant.scss"
import { memo } from "react"

interface propsModel {
    type: "contained" | "outlined",
    text: string,
    endIcon: React.ReactNode
    size?: "small" | "large"
    clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void
    customClassName?:    string
}

const ButtonComponant = ({ type, text, endIcon, size = "large", clickHandler = () => { }, customClassName}: propsModel) => {
    return (
        <Button onClick={clickHandler} className={`custom-btn-componant ${size} ${customClassName}`} variant={type} endIcon={endIcon}>{text}</Button>
    )
}

export default memo(ButtonComponant);