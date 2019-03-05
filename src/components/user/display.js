import React from 'react'
import moment from 'moment'
//todo sort out why link isn't working
const Display = ({user, email}) => {
    console.log('user', user);

    if(!!user){
        const emailAddress = user.email || email;
        return(<div className='row'>
                <div className="card col-sm-6">
                    <img className="card-img-top" src={user.avatar_url} alt="User avatar"/>
                </div>
                <div className='col-sm-6'>
                    <h3>{user.name} "{user.login}"</h3>
                    {emailAddress && <div>
                        <a href={"mailto:" + emailAddress}><p>{emailAddress}</p></a>
                    </div>}
                    <div>
                        <a href={user.html}><p>{user.html_url}</p> </a>
                    </div>
                    <p>Joined Github {moment(user.created_at).format('MMM Do YY')}</p>
                </div>
            </div>
        )
    }
    else return <div></div>;
};

export default Display;

