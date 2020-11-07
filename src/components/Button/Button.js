import React from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner,faInfoCircle,faTimesCircle,faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import './Button.css'

const showIcon = (mode) => {
    switch(mode){
        case 'info':
            return <FontAwesomeIcon icon={faInfoCircle} className={`button--icon`} />
        case 'error':
            return <FontAwesomeIcon icon={faTimesCircle} className={`button--icon`} />
        case 'warning':
            return <FontAwesomeIcon icon={faExclamationCircle} className={`button--icon`} />
        case 'success':
            return <FontAwesomeIcon icon={faCheckCircle} className={`button--icon`} />
        default:
            return null;
    }
}

export const Button = ({ mode, size, style, label, loading, ...props }) => {
    return(
        <>
        <button
        type="button"
        disabled={loading}
        className={[`button`, `button--${size}`, `button--${mode}`].join('  ')}
        style={style && { ...style }}
        {...props}>
            {showIcon(mode)}
            {loading ? <FontAwesomeIcon icon={faSpinner} spin className={`button--icon`} /> : null}
            {label}
        </button>
        </>
    )
}

Button.propTypes = {
    mode: PropTypes.oneOf(['primary','secondary','error','warning','info','success']),
    size: PropTypes.oneOf(['small','medium','large']),
    label: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    style: PropTypes.object,
    onClick: PropTypes.func
}

Button.defaultProps = {
    mode: 'primary',
    size: 'medium',
    loading: false,
    style: undefined,
    onClick: undefined,
}