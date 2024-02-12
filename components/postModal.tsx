import React from 'react';
import { useSelector } from 'react-redux';
// @ts-ignore
import Button from './UI/button.tsx';
// @ts-ignore
import Comments from './comments.tsx';
// @ts-ignore
import { selectPostById } from '../redux/postsSlice.tsx';

interface Props {
  postId: number;
  setNumberSelectedPost: React.Dispatch<React.SetStateAction<number>>
}
function PostModal(props: Props) {
  const { postId, setNumberSelectedPost } = props;
  const post = useSelector(selectPostById(postId));
  const handleClickClose = () => {
    setNumberSelectedPost(-1);
  };
  return (
    <>{post
      && <div className="flex flex-col relative">
        <div className="sm:absolute sm:right-0 sm:top-0 flex-col flex sm:block">
          <Button text={'Закрыть'} func={handleClickClose} />
        </div>
        <div className="mb-4 mt-2 sm:mt-4 md:mt-5">
          <div className="text-xl font-bold mb-4">{post.title}</div>
          <div className="mb-2">{post.body}</div>
          <Comments comments={post.comments ?? null} postId={post.id} />
        </div>
      </div>
    }</>
  );
}

export default PostModal;
