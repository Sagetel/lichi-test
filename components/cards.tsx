"use client"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postsSlice';
import { RootState, AppDispatch } from '../redux/store';

function Cards() {
    const dispatch: AppDispatch = useDispatch();
    const postsFromStore = useSelector((state: RootState) => state.posts.posts);
    const [posts, setPosts] = useState(postsFromStore);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    useEffect(() => {
        setPosts(postsFromStore);
    }, [postsFromStore]);

    const addNewPost = () => {
        const newPost = {
            userId: 23,
            id: 0,
            title: "string",
            body: "string"
        };
        setPosts([...posts, newPost]);
    };

    return (
        <div>
            <button onClick={addNewPost}>Добавить новый пост</button>
            {posts.map((item, index) => <div key={index}>{item.title}</div>)}
        </div>
    );
}

export default Cards;