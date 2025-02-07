import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const InputWithLabel = ({ id, value, onChange, children }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input 
                type="text" 
                id={id} 
                name={id}
                value={value} 
                onChange={onChange} 
                ref={inputRef} 
            />
        </>
    );
};

// defined prop types 
InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,     
    value: PropTypes.string.isRequired,   
    onChange: PropTypes.func.isRequired,  
    children: PropTypes.node.isRequired  
};

export default InputWithLabel;
