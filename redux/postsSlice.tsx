import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { Post, PostsState } from '../types/Post';

const fetchPosts = createAsyncThunk<Post[]>('posts/fetchPosts', async () => {
  const response: AxiosResponse<Post[]> = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

const addPost = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  } as PostsState,
  reducers: {
    addNewPost: (state, action: PayloadAction<Post>) => {
      state.posts.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
      const postsWithComments = action.payload.map(post => ({
        ...post,
        comments: [],
      }));
      state.posts = postsWithComments;
    });
  },
});

export const { addNewPost } = addPost.actions;
export default addPost.reducer;

export { fetchPosts };