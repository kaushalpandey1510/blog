import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import BlogContext from '../context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title='Add Blog' onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => {
          blogPost.title;
        }}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
