import {
  createSlice, createAsyncThunk, PayloadAction, createSelector,
} from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import {
  Post, PostsState, AddCommentPayload, EditCommentPayload,
  // @ts-ignore
} from '../types/Post.tsx';
// @ts-ignore
// eslint-disable-next-line
import { RootState } from './store.tsx';

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
    addNewComment: (state, action: PayloadAction<AddCommentPayload>) => {
      const { comment, postId } = action.payload;
      const post = state.posts.find((p) => p.id === postId);

      if (post && post.comments) {
        post.comments.unshift(comment);
      }
    },
    editComment: (state, action: PayloadAction<EditCommentPayload>) => {
      const { newText, commentId, postId } = action.payload;
      const post = state.posts.find((p) => p.id === postId);
      if (!post || !post.comments) return;
      const comment = post.comments.find((c) => c.id === commentId);
      if (comment) comment.text = newText;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
      const postsWithComments = action.payload.map((post) => ({
        ...post,
        comments: [],
      }));
      return { ...state, posts: postsWithComments };
    });
  },
});
export const selectPostById = (postId: number) => createSelector(
  (state: RootState) => state.posts.posts,
  (posts) => posts.find((post) => post.id === postId),
);
export const { addNewPost, addNewComment, editComment } = addPost.actions;
export default addPost.reducer;

export { fetchPosts };
