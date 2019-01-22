import React from 'react';
import { Form, Segment, Message, Button } from 'semantic-ui-react'
import { Field, reduxForm, reset } from 'redux-form'
import { connect } from 'react-redux';
import { compose } from 'redux';

class MovieAddForm extends React.Component {

    options = [
        { key: 'en', text: 'English', value: 'en-EN' },
        { key: 'pl', text: 'Polski', value: 'pl-PL' },
    ]

    renderError({ error, touched }) {
        if (touched && error) {
            return <Message warning list={[error]} />
        }
    }

    renderSubmitError(errorMessage) {
        if (errorMessage) {
            return <Message error list={[errorMessage]} />
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <div>
                <Form.Input
                    {...input}
                    action={<Button color="teal" labelPosition="right" icon="add" content="Dodaj" disabled={!meta.valid} />}
                    placeholder={label}
                    fluid />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
        this.props.reset();
    };

    render() {
        return (
            <Segment textAlign="center">
                <Form warning error onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Dodaj nowy film...." />
                </Form>
                {this.renderSubmitError(this.props.errorMessage)}
            </Segment>
        )
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'Tytuł filmu jest wymagany';
    }
    return errors;
};


function mapStateToProps(state) {
    return { errorMessage: state.movies.errorMessage };
}

export default compose(
    connect(mapStateToProps),
    reduxForm({
        form: 'addMovieForm',
        validate
    })
)(MovieAddForm);


// export default reduxForm({
//     form: 'addMovieForm',
//     validate
// })(MovieAddForm);