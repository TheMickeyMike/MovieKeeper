import React from 'react';
import plLocale from 'moment/locale/pl'
import { Link } from 'react-router-dom';
import { Item, Label, Progress, Segment, Grid, Image, Header, Icon } from 'semantic-ui-react'
import moment from "moment";
import { ProgressCalculator, Duration } from '../../utils/calcualtor'
moment.locale('pl', plLocale);

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
    const remains = moment(release_date_digital).diff(moment(), 'days')
    const disabled = release_date_digital != '' ? false : true
    const genre = genres.map(genre => {
        return <Label key={genre.name} as='a' basic>{genre.name}</Label>
    });

    function getProgressBar() {
        if (!disabled) {
            return (
                <Progress
                    percent={ProgressCalculator(release_date, release_date_digital)}
                    size='small'
                    label={`Do pierwszego wydania pozostało: ${remains} dni (${moment(release_date_digital).format('LL')})`}
                    indicating />
            )
        } else {
            return <Segment secondary>Data pierwszego wydania jeszcze nie została ujawniona</Segment>
        }
    }
    return (
        < Item >
            <Item.Image >
                <Image src={image} release_date_digital disabled={disabled} />
            </Item.Image>
            <Item.Content>
                <Item.Header as={Link} to={`/movies/${id}`}>{`${title} (${moment(release_date).format("YYYY")})`}</Item.Header>
                <Item.Meta>
                    <span className='cinema'>{original_title}</span>
                </Item.Meta>
                <Grid columns={2} stackable columns='equal'>
                    <Grid.Column>
                        {/* <Segment> */}
                        <Item.Description>{overview}</Item.Description>
                        {/* </Segment> */}
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Grid>
                            <Grid.Column tablet={16} computer={16} mobile={5}>
                                <Header as='h4' image>
                                    <Icon name='star' color="yellow" size='small' />                                            <Header.Content>
                                        {vote_average_mdb.toFixed(1)}
                                    </Header.Content>
                                </Header>
                            </Grid.Column>
                            <Grid.Column tablet={16} computer={16} mobile={5}>
                                <Header as='h4' image>
                                    <Icon name='clock outline' color="grey" size='small' />                                            <Header.Content>
                                        {Duration(runtime)}
                                    </Header.Content>
                                </Header>
                            </Grid.Column>
                            <Grid.Column tablet={16} computer={16} mobile={5}>
                                <Header as='h4' image>
                                    <Icon name='ticket alternate' color="grey" size='small' />                                            <Header.Content>
                                        {moment(release_date).format('DD/MM/YYYY')}
                                    </Header.Content>
                                </Header>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                </Grid>
                <Item.Extra>{genre}</Item.Extra>
                <Grid textAlign="center" padded='vertically'>
                    <Grid.Column width={10} textAlign="center">
                        {getProgressBar()}
                    </Grid.Column>
                </Grid>
            </Item.Content>
        </Item >
    )
}
export default MovieCard;