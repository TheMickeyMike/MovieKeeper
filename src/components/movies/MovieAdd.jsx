import React from "react";
import movies from "../../apis/movies";
import { Form, Segment, Message, Button } from "semantic-ui-react";

class StreamForm extends React.Component {
  state = {
    title: "",
    validationErrors: "",
    submissionError: "",
    success: ""
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
    this.validate(value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const title = this.state.title;
    const self = this;

    movies
      .post("/movies", { title })
      .then(() =>
        self.setState(
          this.setState({
            title: "",
            validationErrors: "",
            submissionError: "",
            success: "Movie Added"
          }),
          () => window.location.reload()
        )
      )
      .catch(function(error) {
        if ([409, 404].includes(error.response.status)) {
          self.setState({
            success: "",
            submissionError: error.response.data.message
          });
        }
      });
  };

  validate = formValue => {
    this.setState({
      validationErrors: formValue ? "" : "Tytuł filmu jest wymagany"
    });
  };

  render() {
    const { title, validationErrors, submissionError, success } = this.state;

    return (
      <Segment textAlign="center">
        <Form warning error success onSubmit={this.handleSubmit}>
          <Form.Input
            onChange={this.handleChange}
            value={title}
            action={
              <Button
                color="teal"
                labelPosition="right"
                icon="add"
                content="Dodaj"
                disabled={title.length === 0}
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
            content={submissionError}
            hidden={submissionError.length === 0}
          />
          <Message success content={success} hidden={success.length === 0} />
        </Form>
      </Segment>
    );
  }
}

export default StreamForm;
