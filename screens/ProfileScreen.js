import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, Divider } from 'react-native-paper';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
        style={styles.avatar}
      />
      <Text variant="titleLarge" style={{ marginVertical: 10 }}>Soundar</Text>
      <Text>Email: soundar@example.com</Text>
      <Text>Cloud & DevOps Engineer</Text>

      <Divider style={{ marginVertical: 20 }} />

      <Button mode="contained" onPress={() => navigation.navigate('Home')}>
        Back to Home
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  avatar: { width: 120, height: 120, borderRadius: 60 }
});

export default ProfileScreen;
