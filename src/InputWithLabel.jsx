import React, { useRef, useEffect } from 'react';

const InputWithLabel = ({ id, value, onChange, children }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

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

export default InputWithLabel;