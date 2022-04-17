import React from 'react';
import PropTypes from 'prop-types';
import s from './ListItem.module.css';

const ListItem = ({ name, number, onClick }) => {
    return (    
            <li className={s.item}><p className={s.text}>{name}: {number}</p>
                <button className={s.button} type="button"
                    onClick={onClick}
                >Delete</button></li>
        )
}
        
    ListItem.propTypes = {
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,  
}

export default ListItem;