'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
// @ts-ignore
import { Comment } from '../types/Post.tsx';
// @ts-ignore
import { addNewComment } from '../redux/postsSlice.tsx';
// @ts-ignore
import { AppDispatch } from '../redux/store.tsx';
// @ts-ignore
import Input from './UI/input.tsx';
// @ts-ignore
import Button from './UI/button.tsx';
// @ts-ignore
import CommentComponent from './comment.tsx';

function Comments({ comments, postId }: { comments: Comment[] | null, postId: number }) {
  const dispatch: AppDispatch = useDispatch();
  const [comment, setComment] = useState('');

  const sendComment = () => {
    if (!comments || comment === '') return;
    const cmc = {
      userId: 1,
      id: comments?.length,
      text: comment,
    };
    dispatch(addNewComment({ comment: cmc, postId }));
    setComment('');
  };
  return (
        <div>
            <div className="mb-2 text-lg font-bold">Комментарии: {comments ? comments.length : 0}</div>
            <div className="mb-2" >
                <div className="mb-2">
                    <Input value={comment} setValue={setComment} name='comment' labelText="Добавить комментарий:" />
                </div>
                <Button text="Отправить" func={sendComment} />
            </div>
            <div>
                {comments
                  ? comments.map((item, index) => (
                        <CommentComponent key={index} comment={item} postId={postId} />
                  ))
                  : 'Отсутствуют'
                }
            </div>
        </div>
  );
}

export default Comments;
