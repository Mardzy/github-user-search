import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchEmail} from "../actions";
import Display from '../components/user/display';

class User extends Component {
    handleSubmit = ({user}) => {
        const {fetchUser, fetchEmail} = this.props;
        fetchUser(user);
        fetchEmail(user);
    };


    render(){
        const {user, email} = this.props;
        console.log('props -->', this.props);
        return(
            <div>
                <Display
                    user={user}
                    email={email}/>
            </div>
        );
    }
}

const mapStateToProps = ({ email, user }) => {
    return { email, user };
};

export default connect(
    mapStateToProps,
    { fetchUser, fetchEmail }
)(User);


