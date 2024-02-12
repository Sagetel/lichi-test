'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// @ts-ignore
import Button from './UI/button.tsx';
// @ts-ignore
import Input from './UI/input.tsx';
// @ts-ignore
import { Comment } from '../types/Post.tsx';
// @ts-ignore
import { AppDispatch } from '../redux/store.tsx';
// @ts-ignore
import { editComment } from '../redux/postsSlice.tsx';

interface Props {
    comment: Comment;
    postId: number;
}
function CommentComponent(props: Props) {
  const dispatch: AppDispatch = useDispatch();
  const { comment, postId } = props;
  const [editModeActive, setEditModeActive] = useState(false);
  const [newText, setNewText] = useState(comment.text);
  const commentId = comment.id;
  const handleEditClick = () => {
    if (editModeActive) dispatch(editComment({ newText, commentId, postId }));
    setEditModeActive(!editModeActive);
  };
  return (
        <div>

            {!editModeActive
              ? <div className="flex justify-between items-center border-2 border-slate-600 p-2 rounded mb-2">
                    <p>{comment.text}</p>
                    <Button text="Ред." func={handleEditClick} />
                </div>
              : <div className="flex justify-between items-center border-2 border-slate-600 p-2 rounded mb-2">
                    <Input value={newText} setValue={setNewText} name='comment' />
                    <div className='ml-2'>
                        <Button text="Сохр." func={handleEditClick} />
                    </div>
                </div>
            }
        </div>
  );
}

export default CommentComponent;
