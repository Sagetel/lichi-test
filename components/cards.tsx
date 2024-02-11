"use client"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postsSlice';
import { RootState, AppDispatch } from '../redux/store';
import Card from './card';

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
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores cumque accusantium repellat dolores provident impedit consequatur ratione iusto quos aperiam culpa corporis atque velit tur adipisicing elit. Ipsam maiores cumque accusantium repellat dolores provident impedit consequatur ratione iusto quos aperiam culpa corporis atque velit tur adipisicing elit. Ipsam maiores cumque accusantium repellat dolores provident impedit consequatur ratione iusto quos aperiam culpa corporis atque velit expedita, reiciendis in exercitationem nulla.",
            comments: [],
        };
        setPosts([newPost, ...posts]);
    };
    return (
        <div className='flex flex-col'>
            <button onClick={addNewPost} className="bg-green-500 text-white font-bold py-2 px-4 rounded mb-2 ml-a self-end">Добавить новый пост</button>
            <div className="grid grid-cols-3 gap-x-5 gap-y-5">
                {posts.map((item, index) =>

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