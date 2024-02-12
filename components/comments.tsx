"use client"
import { useState } from "react";
import { Comment } from "../types/Post";
import { addNewComment } from "../redux/postsSlice";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import Input from "./UI/input";
import Button from "./UI/button";
import CommentComponent from "./comment";
function Comments({ comments, postId }: { comments: Comment[] | null, postId: number }) {
    const dispatch: AppDispatch = useDispatch();
    const [comment, setComment] = useState("");

    const sendComment = () => {
        if (!comments || comment === '') return
        const cmc = {
            userId: 1,
            id: comments?.length,
            text: comment
        }
        dispatch(addNewComment({ comment: cmc, postId: postId }))
        setComment("")
    }
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
                {comments ?
                    comments.map((comment, index) => (
                        <CommentComponent key={index} comment={comment} postId={postId} />
                    ))
                    : "Отсутствуют"
                }
            </div>
        </div>
    );
}

export default Comments;