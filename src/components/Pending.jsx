import React from 'react';
import { List, Button, Image, Header } from 'semantic-ui-react'

const Pending = props => {
    return (
        <React.Fragment>
            <Header as='h2'>Przetwarzane</Header>
            <List divided verticalAlign='middle'>
                <List.Item>
                    <List.Content floated='right'>
                        <Button color="red">Stop</Button>
                    </List.Content>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
                    <List.Content>Bohemian Rhapsody</List.Content>
                </List.Item>
                <List.Item>
                    <List.Content floated='right'>
                        <Button color="red">Stop</Button>
                    </List.Content>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
                    <List.Content>Robin Hood: Początek </List.Content>
                </List.Item>
            </List>
        </React.Fragment>
    )
}
export default Pending;