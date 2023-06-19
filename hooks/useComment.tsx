import React from "react";

const useComment = () => {
	const [isEditing, setIsEditing] = React.useState(false);
	const [value, setValue] = React.useState("");

	return { isEditing, setIsEditing, value, setValue };
};

export default useComment;
