import React from 'react';

export const customInput = props => {

    const { label, input, type }= props;
    return (
        <div>
            <label>{label}</label>
            <input
                {...input}
                type={type}
                className='text-center form-control'
            />
        </div>
    );
};



