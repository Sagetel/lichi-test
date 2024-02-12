export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    comments?: Comment[] | null
}
export interface Comment {
    userId: number;
    id: number;
    text: string;

}
export interface AddCommentPayload {
    postId: number;
    comment: Comment;
}
export interface EditCommentPayload {
    postId: number;
    commentId: number;
    newText: string;
}

export interface PostsState {
    posts: Post[];
}