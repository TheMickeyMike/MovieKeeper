import React from 'react';
import { connect } from 'react-redux';
import { Card, Loader, Image } from 'semantic-ui-react';
import { fetchMovieCredit } from '../../actions';

class MovieCredits extends React.Component {
    componentDidMount() {
        const { movieID } = this.props;

        this.props.fetchMovieCredit(movieID);
    }

    renderCards() {
        return this.props.credits.map(credit => {
            return (
                <Card key={credit.id}>
                    <Image centered src={`https://image.tmdb.org/t/p/w154${credit.profile_path}`} />
                    <Card.Content>
                        <Card.Header>{credit.name}</Card.Header>
                        <Card.Description>{credit.character}</Card.Description>
                    </Card.Content>
                </Card>
            )
        });
    }

    render() {
        if (!this.props.credits) {
            console.log(this.props.credits)
            return <div><Loader active inline='centered' content="Loading" /></div>;
        }

        return (
            <div>
                <Card.Group itemsPerRow={5} stackable centered>
                    {this.renderCards()}
                </Card.Group>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { credits: state.credits[ownProps.movieID] };
};


export default connect(
    mapStateToProps,
    { fetchMovieCredit }
)(MovieCredits);