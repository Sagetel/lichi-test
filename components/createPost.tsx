'use client'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { addNewPost } from '../redux/postsSlice';
import { Post } from '../types/Post';
import Input from './UI/input';
import TextArea from './UI/textArea';
import Button from './UI/button';
interface Props {
    setModalIsOpen: (value: boolean) => void;
    lengthPostsList: number;
}
function CreatePost(props: Props) {
    const { setModalIsOpen, lengthPostsList } = props
    const dispatch: AppDispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const newPost: Post = {
            id: lengthPostsList+1,
            userId: 1,
            title,
            body,
            comments: []
        };
        setTitle('');
        setBody('');
        dispatch(addNewPost(newPost));
        setModalIsOpen(false)
    };
    return (
        <form onSubmit={handleSubmit} className='w-96'>
            <Input value={title} setValue={setTitle} name='title' labelText="Заголовок" />
            <TextArea value={body} setValue={setBody} name='body' labelText="Текст" />
            <Button text="Cоздать пост" type="submit" />
        </form>
    )
}

export default CreatePost