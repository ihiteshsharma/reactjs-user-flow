import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export const Input = ({ type, placeholder, style, error, ...props }) => {
    return(
        <div className={`input--wrapper`}>
            <input className={`input`}
            placeholder={placeholder}
            type={type}
            style={style && { ...style }}
            {...props} />
            <span className={`input--errortext`}>{error}</span>
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    style: PropTypes.object,
    error: PropTypes.string,
    placeholder: PropTypes.string
}

Input.defaultProps = {
    type: 'text',
    placeholder: undefined,
    error: undefined,
    style: undefined
}