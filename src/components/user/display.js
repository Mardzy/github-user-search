import React from 'react'
import moment from 'moment'

// const style = {width: '100%'};


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

// image url
// name url (login)
// email send email link
// company
// location
// public repos repos_url
// bio
// first joined

//forgotten name https%3A%2F%2Fpicsbud.com%2Fimages%2Fforgot-name-awkward-meme-01.html&psig=AOvVaw3la5Xus2Qe7K6GD5VDhyr6&ust=1551810443122914
