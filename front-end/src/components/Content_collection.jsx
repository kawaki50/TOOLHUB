import React from 'react';

const Content = ({ className, imageSrc, imageAlt, title }) => {
    return (
        <div className={className}>
            <img src={imageSrc} alt={imageAlt} />
            <div className={`img-${className}`}>
                <p>{title}</p>
                <button onClick={() => window.location.href = '#sellers'}>
                    SHOP NOW
                </button>
            </div>
        </div>
    );
};

export default Content; 