import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchUser, fetchEmail } from "../actions";
import { Redirect } from 'react-router-dom'
import UserSearchForm from '../components/forms/search';
import Gallery from "../components/user/gallery";

class Home extends Component {
    handleSubmit = ({user}) => {
        const { fetchUsers } = this.props;
        fetchUsers(user);
    };

    handleClick = (event)  => {
        const userName = event.target.alt
        this.props.fetchUser(userName);
        this.props.fetchEmail(userName);
        return <Redirect to={userName}/>
    };

    render(){
        const { users } = this.props;
        return(
            <div className='container'>
                <UserSearchForm
                    onSubmit={this.handleSubmit}
                    handleChange={this.handleChange}/>
                <div className='row'>
                    {users && users.map(user => <Gallery key={user.login} user={user} handleClick={this.handleClick
                    }/>)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ users, user, email }) => {return{users, user, email};};

export default connect(mapStateToProps, { fetchUsers, fetchUser, fetchEmail })(Home);
