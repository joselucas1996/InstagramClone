import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon} from 'native-base';

class SearchTabScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name = "ios-search" style = {{color:tintColor}} />
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SearchTabScreen</Text>
      </View>
    );
  }
}

export default SearchTabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});