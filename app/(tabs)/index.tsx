import { 
  View, 
  StyleSheet,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { Card, Button } from 'react-native-paper';
import { login } from '../utility';

const App = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleInputChange = (field: string, value: string) => {
    setUser(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const loginUser = () => {
     login('login', user)
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Actions>
          <TextInput
            style={styles.input}
            placeholder="Username"
            keyboardType="default"
            value={user.username}
            onChangeText={(text) => handleInputChange('username', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry
            value={user.password}
            onChangeText={(text) => handleInputChange('password', text)}
          />
          <Button onPress={loginUser}>Log In</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default App;
