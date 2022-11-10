import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <FontAwesome style={styles.editIcon} name='pencil' color='black' />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 20,
    fontSize: 18,
  },
  editIcon: {
    fontSize: 32,
    marginRight: 10,
  },
});
