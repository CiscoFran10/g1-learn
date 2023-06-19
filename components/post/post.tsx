"use client";

import React from "react";
import { Post } from "@/types/post";
import useComment from "@/hooks/useComment";

import CommentsForm from "../comments/comments-form";
import { Button } from "../ui/button";
import usePost from "@/hooks/usePost";

const PostContent = ({ id, title, content }: Post) => {
	const { value, isEditing, setIsEditing, setValue } = useComment();
	const { handleCommentSubmit } = usePost(id);

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		handleCommentSubmit(`http://127.0.0.1:8000/api/posts/${id}/comments`, {
			content: value,
		});
	};

	return (
		<div>
			<div className="border-b pt-12 pb-6 md:py-12">
				<div className="container">
					<div>
						<h1 className="text-xl md:text-3xl lg:text-[40px] font-bold w-full text-left max-w-[840px] mx-auto">
							{title}
						</h1>
					</div>
				</div>
			</div>

			<div className="container mt-10">
				<div className="max-w-[840px] mx-auto">
					<p className="text-sm sm:text-base">{content}</p>

					<div className="p-4 border rounded items-end mt-16">
						{isEditing ? (
							<CommentsForm
								handleSubmit={handleSubmit}
								setIsEditing={setIsEditing}
								value={value}
								setValue={setValue}
								placeholder="Comentário..."
							/>
						) : (
							<Button onClick={() => setIsEditing(true)}>Comentar</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostContent;
