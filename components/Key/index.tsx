import { KeyProps } from "./interface"
import './style.css'
export default function Key(props: KeyProps) {
    return (
        <div className="key">
            <label>{props.campo}</label>
            <div>{props.valor}</div>
        </div>
    )
}