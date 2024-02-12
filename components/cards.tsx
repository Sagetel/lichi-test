"use client"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postsSlice';
import { RootState, AppDispatch } from '../redux/store';
import Card from './card';
import Modal from './modal';
import CreatePost from './createPost';
import Button from './UI/button';

function Cards() {
    const dispatch: AppDispatch = useDispatch();
    const postsFromStore = useSelector((state: RootState) => state.posts.posts);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    const handleCliclNewPost = () => {
        setModalIsOpen(true);
    };
    return (
        <div className='flex flex-col' onClick={()=>{console.log(postsFromStore)
        }}>
            <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
                <CreatePost setModalIsOpen={setModalIsOpen} lengthPostsList={postsFromStore.length} />
            </Modal>
            <div className="self-end">
                <Button text="Добавить новый пост" func={handleCliclNewPost} />
            </div>
            <div className="grid grid-cols-3 gap-x-5 gap-y-5">
                {postsFromStore.map((item, index) =>
                    <Card key={index} title={item.title} userId={item.userId}
                        id={item.id}
                        body={item.body}
                        comments={item.comments} />
                )}
            </div>
        </div>
    );
}

export default Cards;