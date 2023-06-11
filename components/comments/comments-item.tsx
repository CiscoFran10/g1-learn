import React from "react";
import { Comment } from "@/types/post";
import { Button } from "../ui/button";
import useComment from "@/hooks/useComment";
import CommentsForm from "./comments-form";

interface CommentsItemProps extends Comment {
	comment_id?: number;
	post_id?: number;
}

const CommentsItem = ({
	comment_id,
	post_id,
	author,
	comment,
	date,
}: CommentsItemProps) => {
	const { isEditing, value, setValue, setIsEditing, handleCommentSubmit } =
		useComment();

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const newDate = new Date();

		handleCommentSubmit(`/posts/${post_id}/comments/${comment_id}`, {
			author,
			comment: value,
			date: newDate,
		});
	};

	return (
		<li className="flex flex-col items-start gap-5 px-5 transition-colors duration-300 bg-primary">
			<div className="flex items-center gap-2">
				<h3 className="px-2 py-1 text-xs bg-secondary text-accent rounded-2xl">
					{author}
				</h3>
				<span className="text-xs text-secondary-foreground">
					{date.toString()}
				</span>
			</div>

			<p className="text-sm">{comment}</p>

			{isEditing ? (
				<CommentsForm
					handleSubmit={handleSubmit}
					placeholder="Resposta..."
					value={value}
					setValue={setValue}
					setIsEditing={setIsEditing}
				/>
			) : (
				<Button
					onClick={() => setIsEditing(true)}
					size={"sm"}
					variant={"secondary"}
				>
					Responder
				</Button>
			)}
		</li>
	);
};

export default CommentsItem;
