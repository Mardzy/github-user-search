import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput } from "../fields";

class SearchForm extends Component {

    renderForm = ({ handleSubmit, pristine, reset, submitting }) => {

        return (
            <form
                onSubmit={handleSubmit}
                className='search'>
                <Field
                    name='user'
                    component={customInput}
                    label='Search for a user'
                />
                <div className='search-buttons'>
                    <button
                        type="submit"
                        className='btn btn-primary'
                        disabled={pristine || submitting}>
                        Submit
                    </button>
                    <button
                        type="button"
                        className='btn btn-secondary'
                        disabled={pristine || submitting}
                        onClick={reset}>
                        Clear Text
                    </button>
                </div>
            </form>
        );
    };

    render() {
        return this.renderForm(this.props);
    }
}

SearchForm = reduxForm({
    form: 'userSearch'
})(SearchForm);

export default SearchForm;
