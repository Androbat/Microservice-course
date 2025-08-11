import { PostCreate } from "./components/PostCreate"
import { PostList } from "./components/PostLists"
export default function App(){
    const title = "Create title"
    return (
        <div className="container">
            <h1>Create post</h1>
            <PostCreate title={title}/>
            <h1>Posts</h1>
            <PostList/>
        </div>
    )
}