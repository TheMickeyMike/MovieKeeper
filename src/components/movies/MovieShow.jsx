import React from 'react';
import { fetchMovie } from '../../actions';
import { connect } from 'react-redux';
import { Grid, Header, Loader, Image, Icon } from 'semantic-ui-react';

class MovieShow extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.fetchMovie(id);
    }
    render() {
        if (!this.props.movie) {
            return <div><Loader active inline='centered' content="Loading" /></div>;
        }

        const { image, title, original_title, overview, vote_average_mdb} = this.props.movie;
        const starImage = <Icon name='star' color="yellow" />

        return (
            <div>
                <Grid>
                <Grid.Row>
                <Grid.Column width={3}>
                    <Image 
                    src={image}
                     size='medium' 
                     label={{ as: 'a', color: 'black', content: vote_average_mdb.toFixed(1), icon: starImage , ribbon: true }}
                     bordered />
                </Grid.Column>
                <Grid.Column width={13}>
                    <Header as='h2'>
                        {title}
                        <Header.Subheader>{original_title}</Header.Subheader>
                    </Header>
                {overview}
                </Grid.Column>
                </Grid.Row>
                </Grid>
            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return { movie: state.movies[ownProps.match.params.id] };
};


export default connect(
    mapStateToProps,
    { fetchMovie }
)(MovieShow);