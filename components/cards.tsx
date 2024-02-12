'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// @ts-ignore
import { fetchPosts } from '../redux/postsSlice.tsx';
// @ts-ignore
import { RootState, AppDispatch } from '../redux/store.tsx';
// @ts-ignore
import Card from './card.tsx';
// @ts-ignore
import Modal from './modal.tsx';
// @ts-ignore
import CreatePost from './createPost.tsx';
// @ts-ignore
import PostModal from './postModal.tsx';
// @ts-ignore
import Button from './UI/button.tsx';

function Cards() {
  const dispatch: AppDispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [modalPostIsOpen, setModalPostIsOpen] = useState(false);
  const [numberPost, setNumberPost] = useState(-1);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  useEffect(() => {
    if (numberPost < 0) { setModalPostIsOpen(false); return; }
    setModalPostIsOpen(true);
  }, [numberPost]);
  useEffect(() => {
    if (!modalPostIsOpen) { setNumberPost(-1); }
  }, [modalPostIsOpen]);
  const handleCliclNewPost = () => {
    setModalCreateIsOpen(true);
  };

  return (
    <div className='flex flex-col'>
      <Modal modalIsOpen={modalCreateIsOpen} setModalIsOpen={setModalCreateIsOpen}>
        <CreatePost setModalIsOpen={setModalCreateIsOpen} lengthPostsList={posts.length} />
      </Modal>
      <Modal modalIsOpen={modalPostIsOpen} setModalIsOpen={setModalPostIsOpen}>
        <PostModal setNumberSelectedPost={setNumberPost} postId={numberPost} />
      </Modal>
      <div className="flex flex-col sm:block sm:self-end mb-2">
        <Button text="Добавить новый пост" func={handleCliclNewPost} />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5">
        {posts.map((post, index) => <Card key={index} post={post} setNumberPost={setNumberPost} />)}
      </div>
    </div>
  );
}

export default Cards;
