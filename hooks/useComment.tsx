import { CommentPost } from "@/types/post";
import React from "react";

const useComment = () => {
	const [isEditing, setIsEditing] = React.useState(false);
	const [value, setValue] = React.useState("");

	const handleCommentSubmit = (url: string, options) => {
		console.log(data);
	};

	return { isEditing, setIsEditing, value, setValue, handleCommentSubmit };
};

export default useComment;
