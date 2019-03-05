import React from 'react';

function displayLinkOnImage(gallery, user, handleClick) {
    if (gallery){
        return (
            <button className='gallery-button'>
                <img
                    onClick={handleClick}
                    className="card-img-top"
                    src={user.avatar_url}
                    alt={user.login}/>
            </button>
        )
    }
    else {
        return <img className="card-img-top" src={user.avatar_url} alt={user.login}/>
    }
}

const UserCard = ({user, gallery, handleClick}) => {

    return(
        <div className="card">
            {user && displayLinkOnImage(gallery, user, handleClick)}
                <div className="card-body">
                    <p className="card-text">{user.login}</p>
                </div>
        </div>
    );
};

export default UserCard
