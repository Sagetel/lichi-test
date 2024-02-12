"use client"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postsSlice';
import { RootState, AppDispatch } from '../redux/store';
import Card from './card';
import Modal from './modal';
import CreatePost from './createPost';
import PostModal from './postModal';
import Button from './UI/button';
function Cards() {
    const dispatch: AppDispatch = useDispatch();
    const postsFromStore = useSelector((state: RootState) => state.posts.posts);
    const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
    const [modalPostIsOpen, setModalPostIsOpen] = useState(false);
    const [numberSelectedPost, setNumberSelectedPost] = useState(-1);
    
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    useEffect(() => {
        if (numberSelectedPost < 0) {  setModalPostIsOpen(false); return }
        setModalPostIsOpen(true)
    }, [numberSelectedPost])
    useEffect(() => {
        if (!modalPostIsOpen) { setNumberSelectedPost(-1) }
    }, [modalPostIsOpen])
    const handleCliclNewPost = () => {
        setModalCreateIsOpen(true);
    };

    return (
        <div className='flex flex-col'>
            <Modal modalIsOpen={modalCreateIsOpen} setModalIsOpen={setModalCreateIsOpen}>
                <CreatePost setModalIsOpen={setModalCreateIsOpen} lengthPostsList={postsFromStore.length} />
            </Modal>
            <Modal modalIsOpen={modalPostIsOpen} setModalIsOpen={setModalPostIsOpen}>
                <PostModal setNumberSelectedPost={setNumberSelectedPost} postId={numberSelectedPost} />
            </Modal>
            <div className="flex flex-col sm:block sm:self-end mb-2">
                <Button text="Добавить новый пост" func={handleCliclNewPost} />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5">
                {postsFromStore.map((post, index) =>
                    <Card key={index} post={post} setNumberSelectedPost={setNumberSelectedPost} />

                )}
            </div>
        </div>
    );
}

export default Cards;