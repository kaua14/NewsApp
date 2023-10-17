import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import React, { useState, useEffect } from 'react';
import {
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Pressable,
} from 'react-native';

import { auth } from '../../../firebaseconfig';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  async function handleLogin() {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('News');
      alert('User logged in successfully');
      
    } catch (error) {
      // if user is not registered
      // create logic to navigate to the registration screen
      if (error.message === 'INVALID_LOGIN_CREDENTIALS') {
        navigation.navigate('Registration');
      }
    }
  }

  async function handleRegistration() {
    navigation.navigate('Registration');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signUp}>
        <Pressable onPress={handleRegistration}>
          <Text style={styles.buttonText}>Don't have an account yet?</Text>
          <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#374048', 
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    color: 'white',  // Text color set to white
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
    color: 'white',  // Text color set to white
  },
  button: {
    backgroundColor: '#9370DB',  // Button background color set to purple
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',  // Text color set to white
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUp: {
    marginTop: 10,
  },
});
