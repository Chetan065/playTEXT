import React from 'react'
import PropTypes from 'prop-types'

export default function Textarea(props) {
    return (
        <>
            <div className="form-floating m-5">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">{props.placeholder}</label>
            </div>
        </>
    )
}

