"use client";

import React from "react";
import { Comment } from "@/types/post";
import useComment from "@/hooks/useComment";
import CommentsForm from "./comments-form";
import { dateFormat } from "@/lib/date";
import { Button } from "@/components/ui/button";
import usePost from "@/hooks/usePost";
import { comment } from "postcss";

interface CommentsItemProps extends Comment {}

const CommentsItem = ({
	id,
	post_id,
	content,
	created_at,
	replies,
	comment_id,
}: CommentsItemProps) => {
	const { isEditing, value, setValue, setIsEditing } = useComment();
	const { handleCommentSubmit } = usePost(post_id);

	const date = dateFormat(created_at);

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		handleCommentSubmit(
			`http://127.0.0.1:8000/api/posts/${post_id}/comments/${
				comment_id ? comment_id : id
			}/replies`,
			{
				content: value,
			}
		);
	};

	return (
		<li className="flex flex-col items-start gap-5 px-5 transition-colors duration-300 bg-primary">
			<div className="flex items-center gap-2">
				<h3 className="px-2 py-1 text-xs bg-secondary text-accent rounded-2xl">
					Lucas201
				</h3>
				<span className="text-xs text-secondary-foreground">{date}</span>
			</div>

			<p className="text-sm">{content}</p>

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

			{replies && (
				<ul className="grid gap-8 w-full">
					{replies?.map((reply) => (
						<CommentsItem key={reply.id} post_id={post_id} {...reply} />
					))}
				</ul>
			)}
		</li>
	);
};

export default CommentsItem;
