import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState, useContext } from 'react';
import { Context } from '../context/BlogContext';

const CreateScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View>
      <Text style={styles.label}>Enter Title: </Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}> Enter Content: </Text>
      <TextInput
        multiline
        style={styles.input}
        value={content}
        onChangeText={setContent}
      />
      <Button title='Add Blog Post' />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    fontSize: 24,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});
