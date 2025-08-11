import { Button, Input, Title } from "../atoms/utils";

export function CommentCreate({ postId }){
    return (
        <form>
            <h4>Add comment</h4>
                <Title title="Comment"/>
                <Input />
                <Button />
        </form>
    )
}