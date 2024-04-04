import Key from "../Key"
import './style.css'
import {PersonProps} from './interface'
export default function Person(props: PersonProps) {
    return (
        <div className={"person " + props.status}>
            <Key campo="Nome" valor={props.name}/>
            <Key campo="Endereço" valor={props.address} />
            <Key campo="Telefone" valor={props.phone} />
            <Key campo="Email" valor={props.email} />
        </div>
    )
}