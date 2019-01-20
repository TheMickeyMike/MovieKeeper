import React from 'react';
import { connect } from 'react-redux';
import { deleteMovie, movieIsSeen } from '../../actions';
import { Button } from 'semantic-ui-react';

const MovieActions = ({ deleteMovie, movieIsSeen, movie }) => {
    const { id, watched } = movie
    return (
        <Button.Group attached='bottom'  >
            <Button
                basic
                color='green'
                size='small'
                content="Obejrzany"
                onClick={() => movieIsSeen(id, !watched)} />
            <Button
                basic
                color='red'
                size='small'
                content="Usuń z listy"
                onClick={() => deleteMovie(id)} />
        </Button.Group>
    )
}


export default connect(
    null,
    { deleteMovie, movieIsSeen }
)(MovieActions);