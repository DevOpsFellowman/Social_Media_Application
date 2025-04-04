import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MotiView } from 'moti';

const { width } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.gradient}>
      <MotiView
        from={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 1000 }}
        style={styles.card}
      >
        <Text variant="headlineMedium" style={styles.title}>Login</Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
          mode="outlined"
          textColor="#fff"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          mode="outlined"
          textColor="#fff"
        />
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Home')}
          buttonColor="#6a11cb"
          style={styles.button}
        >
          Login
        </Button>
        <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
          Don’t have an account? Sign up
        </Text>
      </MotiView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 25,
    width: width * 0.9,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 15,
    backdropFilter: 'blur(10px)',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    backgroundColor: 'transparent',
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
  },
  link: {
    textAlign: 'center',
    marginTop: 10,
    color: '#fff',
  },
});

export default LoginScreen;
