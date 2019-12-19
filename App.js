import React, {Component} from 'react';
import {View, TextInput, StyleSheet, ScrollView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

class App extends Component {
  state = {};

  render() {
    return (
      <PaperProvider>
        <ScrollView>
          <Card>
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={props => <Avatar.Icon {...props} icon="folder" />}
            />
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
          <Card>
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={props => <Avatar.Icon {...props} icon="folder" />}
            />
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
          <Card>
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={props => <Avatar.Icon {...props} icon="folder" />}
            />
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        </ScrollView>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbox: {
    borderWidth: 1,
    margin: 5,
    width: 300,
  },
});

export default App;
