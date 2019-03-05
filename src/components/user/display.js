import React from 'react'
import moment from 'moment'

const Display = ({user, email}) => {
    console.log('user', user);

    if(!!user){
        return(<div className='row'>
                <div className="card col-sm-6">
                    <img className="card-img-top" src={user.avatar_url} alt="User avatar"/>
                </div>
                <div className='col-sm-6'>
                    <h3>{user.name} "{user.login}"</h3>
                    <div>
                        <a href={"mailto:" + user.email || email}>{user.email || email}</a>
                    </div>
                    <a href={user.html}><p>{user.html_url}</p></a>
                    <p>Joined Github {moment(user.created_at).format('MMM Do YY')}</p>
                    <p></p>

                </div>
            </div>
        )
    }
    else return <div></div>;
};

export default Display;

