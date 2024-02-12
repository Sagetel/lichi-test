'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// @ts-ignore
import { AppDispatch } from '../redux/store.tsx';
// @ts-ignore
import { addNewPost } from '../redux/postsSlice.tsx';
// @ts-ignore
import { Post } from '../types/Post.tsx';
// @ts-ignore
import Input from './UI/input.tsx';
// @ts-ignore
import TextArea from './UI/textArea.tsx';
// @ts-ignore
import Button from './UI/button.tsx';

interface Props {
  // eslint-disable-next-line
  setModalIsOpen: (value: boolean) => void;
  lengthPostsList: number;
}
function CreatePost(props: Props) {
  const { setModalIsOpen, lengthPostsList } = props;
  const dispatch: AppDispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newPost: Post = {
      id: lengthPostsList + 1,
      userId: 1,
      title,
      body,
      comments: [],
    };
    setTitle('');
    setBody('');
    dispatch(addNewPost(newPost));
    setModalIsOpen(false);
  };
  return (
    <form onSubmit={handleSubmit} className='w-96'>
      <Input value={title} setValue={setTitle} name='title' labelText="Заголовок" />
      <TextArea value={body} setValue={setBody} name='body' labelText="Текст" />
      <Button text="Cоздать пост" type="submit" />
    </form>
  );
}

export default CreatePost;
