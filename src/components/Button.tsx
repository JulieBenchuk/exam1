import React from 'react';
import s from "./components.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../BLL/store";

type ButtonPropsType = {
    title: string
    callback: () => void
    disabled?: boolean

}
export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button className={s.button} onClick={onClickHandler} disabled={props.disabled}>
            {props.title}
        </button>
    );
}

