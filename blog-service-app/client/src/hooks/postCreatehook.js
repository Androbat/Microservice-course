import { useState } from "react";
import axios from "axios";

async function createRequests(){
    return {
        createPostRequest: async (url, title) => axios.post(url, { title }),
        createGetRequest: async (url) => axios.get(url)
    }
}

export function useCreatePost(){
    const [title, setTitle] = useState(undefined);

    const onSubmit = async (event) => {
        event.preventDefault();
        (await createRequests()).createPostRequest("http://localhost:4000/posts", title);

        setTitle("");
    }

    return {
        title,
        setTitle,
        onSubmit
    }
}


export function useCreatePostList(){
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const response = (await createRequests).createGetRequest("http://localhost:4000/posts");
        setPosts(response.data);
    }

    return {
        posts,
        fetchPosts
    }
}