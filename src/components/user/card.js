import React from 'react';
import { withRouter } from 'react-router-dom'



const UserCard = ({user, gallery, handleClick}) => {

    const Image = withRouter(({ history }) => {
        if (gallery){
            return(
                <button
                    className='gallery-button'
                    type='button'
                    onClick={() => { history.push(`/${user.login}`)}}>
                    <img
                        className="card-img-top"
                        src={user.avatar_url}
                        alt={user.login}/>
                </button>
            )
        }
        else {
            return <img className="card-img-top" src={user.avatar_url} alt={user.login}/>
        }
    });

    return(
        <div className="card">
            <Image user={user}/>
            <div className="card-body">
                <p className="card-text">{user.login}</p>
            </div>
        </div>
    );
};

export default UserCard
