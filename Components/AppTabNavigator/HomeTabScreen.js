import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { Icon, Container, Content, Thumbnail} from 'native-base';
import CardComponent from '../CardComponent';

class HomeTabScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name = "ios-home" style = {{color:tintColor}} />
      )
  }
  
  render() {
    return (
      <Container>
        <Content>
        <View style={{height:100}}>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between',
              alignItems:"center", paddingHorizontal:7}}>
            <Text style={{fontWeight:'bold'}}> Stories</Text>
            <View style ={{flexDirection:'row', alignItems: 'center'}}>
            <Icon name="md-play" style={{ fontSize:14}}/>
              <Text style={{fontWeight:'bold'}}> Ver Todos</Text>
              </View>
          </View>
          <View style={{flex:3 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems:"center",
                paddingStart:5,
                paddingEnd:5
              }}
            >
              <Thumbnail 
                style={{marginHorizontal:5, borderColor:'#cccccc', borderWidth:2}}
                source={require('../../assets/imagem/user.jpg')}/>
                <Thumbnail 
                style={{marginHorizontal:5, borderColor:'#cccccc', borderWidth:2}}
                source={require('../../assets/imagem/luana.jpg')}/>
                <Thumbnail 
                style={{marginHorizontal:5, borderColor:'#cccccc', borderWidth:2}}
                source={require('../../assets/imagem/bia.jpeg')}/>
                <Thumbnail 
                style={{marginHorizontal:5, borderColor:'#cccccc', borderWidth:2}}
                source={require('../../assets/imagem/camila.jpg')}/>
                <Thumbnail 
                style={{marginHorizontal:5, borderColor:'#cccccc', borderWidth:2}}
                source={require('../../assets/imagem/cleo.jpeg')}/>
                <Thumbnail 
                style={{marginHorizontal:5, borderColor:'#cccccc', borderWidth:2}}
                source={require('../../assets/imagem/bruna.jpeg')}/>
                <Thumbnail 
                style={{marginHorizontal:5, borderColor:'#cccccc', borderWidth:2}}
                source={require('../../assets/imagem/cleo.jpeg')}/><Thumbnail 
                style={{marginHorizontal:5, borderColor:'#cccccc', borderWidth:2}}
                source={require('../../assets/imagem/bia.jpeg')}/><Thumbnail 
                style={{marginHorizontal:5, borderColor:'#cccccc', borderWidth:2}}
                source={require('../../assets/imagem/luana.jpg')}/>
            </ScrollView>
          </View>
        </View>
          <CardComponent imageSource="1" likes="101"/>
          <CardComponent imageSource="2" likes="90"/>
          <CardComponent imageSource="3" likes="110"/>
          <CardComponent imageSource="4" likes="200"/>
        </Content>
      </Container>
    );
  }
}

export default HomeTabScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });