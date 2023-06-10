import { Comment } from "@/types/post";
import React from "react";
import CommentsItem from "./comments-item";

interface CommentsListProps {
	comments: Comment[];
}

const CommentsList = ({ comments }: CommentsListProps) => {
	return (
		<ul>
			{comments.map((item) => (
				<CommentsItem key={item.id} {...item} />
			))}
		</ul>
	);
};

export default CommentsList;
