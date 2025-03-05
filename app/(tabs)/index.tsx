import { 
  View, 
  Text, 
  StyleSheet, 
  ImageBackground, 
  Pressable 
}                     from 'react-native';
import React          from 'react';
import coffeShopImage from "@/assets/images/download.png";

const fetchUserData = async () => {
  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched Users:", data);
  } catch (error ) {
    console.error("Error fetching data:", error);
  }
};

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={coffeShopImage} 
        style={styles.image} 
        resizeMode='cover'
      >
        <Text style={styles.title}>CoffeeShop</Text>
        <Pressable onPress={fetchUserData} style={styles.button}>
          <Text style={styles.buttonText}>Contact</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },
  button: {
    height: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 6,
    justifyContent: "center"
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
  }
});
