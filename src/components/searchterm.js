import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

const Searchterm = props => {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typeTimeoutRef = useRef(null);

    function handleChange(e) {
        const value = e.target.value;
        setSearchTerm(value);
        if (!onSubmit)
            return;

        if (typeTimeoutRef.current)
            clearTimeout(typeTimeoutRef.current);

        typeTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            }
            onSubmit(formValues);
        }, 300)


    }
    return (
        <form className="items-center flex justify-center  mb-12">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="search..."
            />
        </form>
    )
}

Searchterm.propTypes = {
    onSubmit: PropTypes.func,
}
Searchterm.defaultProps = {
    onSubmit: null,
}
export default Searchterm
