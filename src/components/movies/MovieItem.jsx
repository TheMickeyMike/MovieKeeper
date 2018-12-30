import React from 'react';
import plLocale from 'moment/locale/pl'
import { Link } from 'react-router-dom';
import { Item, Label, Progress, Segment, Grid, Image, Header, Icon } from 'semantic-ui-react'
import moment from "moment";
import { ProgressCalculator, Duration } from '../../utils/calcualtor'
moment.locale('pl', plLocale);

export const GenresLabels = ({ genres }) => {
    return genres.map(genre => {
        return <Label key={genre.name} as='a' basic>{genre.name}</Label>
    });
}


export const VoteScore = ({ vote, as = 'h4' }) => {
    return (
        <Header as={as} image>
            <Icon name='star' color="yellow" size='small' />
            <Header.Content content={vote.toFixed(1)} />
        </Header>
    )
}

export const MovieDuration = ({ duration, as = 'h4' }) => {
    return (
        <Header as={as} image>
            <Icon name='clock outline' color="grey" size='small' />
            <Header.Content content={Duration(duration)} />
        </Header>
    )
}

export const ReleaseDate = ({ releaseDate, as = 'h4' }) => {
    return (
        <Header as={as} image>
            <Icon name='ticket alternate' color="grey" size='small' />
            <Header.Content content={moment(releaseDate).format('DD/MM/YYYY')} />
        </Header>
    )
}


export const CountingDownProgressBar = ({ release_date, release_date_digital }) => {
    const remains = moment(release_date_digital).diff(moment(), 'days')

    if (!release_date_digital) {
        return <Segment secondary>Data pierwszego wydania jeszcze nie została ujawniona</Segment>
    }

    return (
        <Progress
            percent={ProgressCalculator(release_date, release_date_digital)}
            size='small'
            label={`Do pierwszego wydania pozostało: ${remains <= 0 ? 0 : remains} dni (${moment(release_date_digital).format('LL')})`}
            indicating />
    )
}

const MovieCard = props => {
    const {
        id,
        image,
        title,
        overview,
        release_date,
        release_date_digital,
        original_title,
        runtime,
        vote_average_mdb,
        genres
    } = props.movie
    const disabled = release_date_digital != '' ? false : true


    return (
        < Item >
            <Item.Image >
                <Image src={image} release_date_digital disabled={disabled} />
            </Item.Image>
            <Item.Content>
                <Item.Header as={Link} to={`/movies/${id} `}>{`${title} (${moment(release_date).format("YYYY")})`}</Item.Header>
                <Item.Meta>
                    <span className='cinema'>{original_title}</span>
                </Item.Meta>
                <Grid columns={2} stackable columns='equal'>
                    <Grid.Column>
                        <Item.Description>{overview}</Item.Description>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Grid>
                            <Grid.Column tablet={16} computer={16} mobile={5}>
                                <VoteScore vote={vote_average_mdb} />
                            </Grid.Column>
                            <Grid.Column tablet={16} computer={16} mobile={5}>
                                <MovieDuration duration={runtime} />
                            </Grid.Column>
                            <Grid.Column tablet={16} computer={16} mobile={5}>
                                <ReleaseDate releaseDate={release_date} />
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                </Grid>
                <Item.Extra><GenresLabels genres={genres} /></Item.Extra>
                <Grid textAlign="center" padded='vertically'>
                    <Grid.Column width={10} textAlign="center">
                        <CountingDownProgressBar
                            release_date={release_date}
                            release_date_digital={release_date_digital} />
                    </Grid.Column>
                </Grid>
            </Item.Content>
        </Item >
    )
}
export default MovieCard;