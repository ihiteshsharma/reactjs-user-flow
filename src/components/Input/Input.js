import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export const Input = ({ type, placeholder, style, ...props }) => {
    return(
        <div>
            <input className={`input`}
            placeholder={placeholder}
            type={type}
            style={style && { ...style }}
            {...props} />
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    style: PropTypes.object,
    placeholder: PropTypes.string
}

Input.defaultProps = {
    type: 'text',
    placeholder: undefined,
    style: undefined
}