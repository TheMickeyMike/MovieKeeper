import React from "react";
import movies from "../../apis/movies";
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
    this.setState({ [name]: value });
    this.validate(value);
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const title = this.state.title;
  //   const self = this;

  //   movies
  //     .post("/movies", { title })
  //     .then(() =>
  //       self.setState(
  //         this.setState({
  //           title: "",
  //           validationErrors: "",
  //           submissionError: "",
  //           success: "Movie Added"
  //         }),
  //         () => window.location.reload()
  //       )
  //     )
  //     .catch(function (error) {
  //       if ([409, 404].includes(error.response.status)) {
  //         self.setState({
  //           success: "",
  //           submissionError: error.response.data.message
  //         });
  //       }
  //     });
  // };

  handleSubmit = e => {
    e.preventDefault();
    const { title } = this.state
    this.props.addMovie({ title });
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
          {/* <Message success content={success} hidden={success.length === 0} /> */}
        </Form>
      </Segment>
    );
  }
}

// export default StreamForm;


const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.movieAddForm.isFetching,
    submitError: state.movieAddForm.error,
  };
};


export default connect(
  mapStateToProps,
  { addMovie }
)(StreamForm);