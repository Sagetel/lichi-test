import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { Post, PostsState } from '../types/Post';

const fetchPosts = createAsyncThunk<Post[]>('posts/fetchPosts', async () => {
  const response: AxiosResponse<Post[]> = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
  } as PostsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    });
  },
});

export default postsSlice.reducer;
export { fetchPosts };
