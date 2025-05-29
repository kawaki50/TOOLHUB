import React, { useEffect } from 'react';

const Toggle = () => {
    useEffect(() => {
        const imgBtn = document.querySelector('.custom-img__btn');
        const container = document.querySelector('.custom-container');

        if (imgBtn && container) {
            const handleClick = () => {
                container.classList.toggle('custom-s--signup');
            };

            imgBtn.addEventListener('click', handleClick);

            // Cleanup function to remove event listener
            return () => {
                imgBtn.removeEventListener('click', handleClick);
            };
        }
    }, []);

    return null;
};

export default Toggle;
