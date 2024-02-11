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
export interface PostsState {
    posts: Post[];
  }