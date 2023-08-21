import React from 'react'

export default function Alert(props) {
    return (
       
        props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center sticky-top mx-5 my-3`} role="alert">
             {props.alert.msg}
        </div>

        
    )
}
