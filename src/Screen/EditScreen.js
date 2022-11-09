import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      onSubmit={
        (title, content) =>
          editBlogPost(id, title, content, () => {
            navigation.pop();
          }) //navigation.pop moves us one step up in screen!
      }
      initialValues={{ title: blogPost.title, content: blogPost.content }}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
