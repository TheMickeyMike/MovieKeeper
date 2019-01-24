import React from "react";
import { connect } from 'react-redux';
import { addMovie } from '../../actions';
import { Form, Segment, Message, Button } from "semantic-ui-react";

class StreamForm extends React.Component {
  state = {
    title: "",
    validationErrors: ""
  };

  handleUserInput = (e) => {
    const { name, value } = e.target;
    this.validate(value);
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title } = this.state
    this.props.addMovie({ title });
    this.setState({ title: '' })
  }

  validate = formValue => {
    this.setState({
      validationErrors: formValue ? "" : "Tytuł filmu jest wymagany"
    });
  };

  render() {
    const { title, validationErrors } = this.state;
    const { isFetching, submitError } = this.props;
    return (
      <Segment textAlign="center">
        <Form warning error success onSubmit={this.handleSubmit}>
          <Form.Input
            onChange={this.handleUserInput}
            value={title}
            action={
              <Button
                color="teal"
                labelPosition="right"
                icon="add"
                content="Dodaj"
                disabled={title.length === 0 || isFetching}
                loading={isFetching}
              />
            }
            placeholder="Dodaj nowy film...."
            name="title"
            fluid
          />
          <Message
            warning
            list={[validationErrors]}
            hidden={validationErrors.length === 0}
          />
          <Message
            error
            content={submitError}
            hidden={submitError.length === 0}
          />
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.movieAddForm.isFetching,
    submitError: state.movieAddForm.error,
  };
};


export default connect(
  mapStateToProps,
  { addMovie }
)(StreamForm);