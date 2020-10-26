import React, {Component} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={this.state.status}
          onValueChange={(valorSwitch) => this.setState({status: valorSwitch})}
          thumbColor="#FF0000"
        />

        <Text style={{textAling: 'center', fontSize: 30}}>
          {this.state.status ? 'Ativo' : 'Inativo'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 1,
  },
});

export default App;
