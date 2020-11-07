import React from 'react';
import PropTypes from 'prop-types';

import './Image.css';

export const Image = ({ size, rounded, src, alt, style, ...props}) => {
    const isRounded = rounded ? 'image--rounded' : null;
    return(
        <>
            <img
            className={[`image`, `image--${size}`,`${isRounded}`].join('  ')} src={src} alt={alt}
            style={style && {...style}}
            {...props}/>
        </>
    )
};

Image.propTypes = {
    size: PropTypes.oneOf(['small','medium','large']),
    rounded: PropTypes.bool,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    style: PropTypes.object
}

Image.defaultProps = {
    size: 'medium',
    rounded: false,
    src: "https://via.placeholder.com/150",
    alt: "Placeholder Image",
    style: undefined
}



