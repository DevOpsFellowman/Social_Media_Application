import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.welcome}>Welcome 👋</Text>
      <Button mode="outlined" onPress={() => navigation.navigate('Profile')}>
        Go to Profile
      </Button>
      <Button mode="contained-tonal" onPress={() => navigation.navigate('Login')} style={{ marginTop: 10 }}>
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  welcome: { marginBottom: 30 }
});

export default HomeScreen;
