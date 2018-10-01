import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon} from 'native-base';

class LikesTabScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name = "ios-heart" style = {{color:tintColor}} />
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>LikesTabScreen</Text>
      </View>
    );
  }
}

export default LikesTabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});