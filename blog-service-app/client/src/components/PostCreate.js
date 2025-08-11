import React from "react";
import { useCreatePost } from "../hooks/postCreatehook";
import { Button, Input, Title } from "../atoms/utils";


export function Form (){
    const { title, setTitle, onSubmit } = useCreatePost();

    const onChange = (event) => setTitle(event.target.value);
    const localTitle = "Create title";

    
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <Title title={localTitle} />
                <Input value={title} onChange={onChange}/>
            </div>
        </form>
    )
}

export function PostCreate(){
    return (
        <>
            <Form />
            <Button />
        </>
    )
}