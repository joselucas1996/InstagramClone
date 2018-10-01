import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, CardItem, Thumbnail, Body, Left, Right, Button, Card} from 'native-base';

class CardComponent extends React.Component {
  
  render() {
    const images = {
      "1": require('../assets/imagem/me.jpg'),
      "2": require('../assets/imagem/me1.jpg'),
      "3": require('../assets/imagem/me.jpg'),
      "4": require('../assets/imagem/me1.jpg')

    }
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source = {require('../assets/imagem/user.jpg')}
              />
            <Body>
              <Text>Jose Lucas</Text>
              <Text note> Ibiúna, Brazil</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source = {images[this.props.imageSource]} 
            style={{height: 250, width: null, flex:1}} />
        </CardItem>
        <CardItem style={{height:45}}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart-outline"
                style={{color:'black'}} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles-outline"
                style={{color:'black'}} />
            </Button>
            <Button transparent>
              <Icon name="ios-heart-outline"
                style={{color:'black'}} />
            </Button>
          </Left>
        </CardItem>

        <CardItem style={{height:45}}>
          <Text>{this.props.likes} likes</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
            <Text style={{fontWeight:"900"}}> José Lucas  </Text>
            Não existem obstáculos, tudo é desafio. A sua motivação deve ser a 
            própria vida, que está continuamente te forçando a se superar e quer 
            te ver vencer, porque é conduzida por Deus. Entenda isso de uma vez 
            por todas, pare de reclamar, aperfeiçoe suas habilidades, acredite no 
            próprio potencial e vá subir mais um degrau provando a si mesmo que, v
            enha o que vier, você sempre pode mais.
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems:"center"
  },
});