import { Post } from "../types/Post"
function Card(post: Post) {
    return (
        <article className="bg-gray-200 p-4 rounded relative after:content-[' '] after:absolute after:left-0 after:bottom-0 after:right-0 after:min-h-16 

        after:bg-gradient-to-t after:from-gray-200/100 after:from-90%  after:to-gray-200/90 after:to-100%
       after:blur
        ">
            <header>
                <h3 className="font-medium text-lg">{post.title}</h3>
            </header>
            <div className="text-gray-700 min-h-36 max-h-36 overflow-hidden relative">
                <p>{post.body}</p>

            </div>
        </article>
    )
}

export default Card