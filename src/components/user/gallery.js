import React from 'react'

import UserCard from './card';

const Gallery = ({user, handleClick}) => {
    return(
        <div
           className='col-sm-4 gallery-card'
           value={user.login}>
            <UserCard
                handleClick={handleClick}
                user={user}
                gallery={true}/>
        </div>
    )
};

export default Gallery;
