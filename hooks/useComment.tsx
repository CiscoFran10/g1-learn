import React from "react";

const useComment = () => {
	const [isEditing, setIsEditing] = React.useState(false);
	const [comment, setComment] = React.useState("");

	const handleClick = () => {
		setIsEditing(true);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setComment(event.target.value);
	};

	return { isEditing, comment, handleClick, handleChange };
};

export default useComment;
