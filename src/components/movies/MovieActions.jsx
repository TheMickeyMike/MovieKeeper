import React from 'react';
import { connect } from 'react-redux';
import { deleteMovie } from '../../actions';
import { Button } from 'semantic-ui-react';

const MovieActions = ({ deleteMovie, movieID }) => {
    return (
        <Button.Group attached='bottom'  >
            <Button
                basic
                color='green'
                size='small'
                content="Odświerz" />
            <Button
                basic
                color='red'
                size='small'
                content="Usuń z listy"
                onClick={() => deleteMovie(movieID)} />
        </Button.Group>
    )
}


export default connect(
    null,
    { deleteMovie }
)(MovieActions);