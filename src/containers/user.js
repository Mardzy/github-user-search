import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchEmail } from "../actions";
import Display from '../components/user/display';

class User extends Component {
    componentDidMount() {
        const { match } = this.props;
        if (match && match.params && match.params.name) {
            this.props.fetchUser(match.params.name);
            this.props.fetchEmail(match.params.name);
        }

    }

    render(){
        const {user, email} = this.props;
        console.log('props', this.props);
        return(
            <div>
                <Display
                    user={user}
                    email={email}/>
            </div>
        );
    }
}

const mapStateToProps = ({ user, email }) => ({ user, email });

export default connect(mapStateToProps, { fetchUser, fetchEmail })(User);


