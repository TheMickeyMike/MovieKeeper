import React from 'react';
import { Form, Segment, Message } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {

    options = [
        { key: 'en', text: 'English', value: 'en-EN' },
        { key: 'pl', text: 'Polski', value: 'pl-PL' },
    ]

    renderError({ error, touched }) {
        if (touched && error) {
            return <Message warning list={[error]} />
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <div>
                <Form.Input
                    {...input}
                    action={{ color: 'teal', labelPosition: 'right', icon: 'add', content: 'Add' }}
                    placeholder={label}
                    fluid />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <Segment textAlign="center">
                <Form warning onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Dodaj nowy film...." />
                </Form>
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


export default reduxForm({
    form: 'addMovieForm',
    validate
})(StreamForm);