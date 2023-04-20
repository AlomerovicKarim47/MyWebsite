import React, {useEffect} from 'react';
import "./Toast.css"

const Toast = ({message, show, onHide}) => {

    useEffect(() => {
        let toast = document.getElementsByClassName("toast")[0]
        if (show)
            toast.classList.add("toast-show")
        else
            toast.classList.remove("toast-show")

    }, [show])

    return (
        <div className = "toast">
            <span>{message}</span>
            <button onClick={onHide} className = "toast-x-button"></button>
        </div>
    );
}

export default Toast;
