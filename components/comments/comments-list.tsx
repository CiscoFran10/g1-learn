"use client";

import { Comment } from "@/types/post";
import React from "react";
import CommentsItem from "./comments-item";
import Loading from "@/components/ui/loading";
import usePost from "@/hooks/usePost";

const CommentsList = ({ post_id }: { post_id: number }) => {
	const { comments, error, isLoading } = usePost(post_id);

	if (error) return <p>houve algum erro</p>;

	return (
		<ul className="grid gap-10 max-w-[840px] mx-auto my-10 animate-in">
			{isLoading ? (
				<Loading />
			) : comments.length ? (
				comments.map((comment: Comment) => (
					<div key={comment.id} className="grid gap-8 border-l">
						<CommentsItem {...comment} />
					</div>
				))
			) : (
				<div className="text-sm text-secondary-foreground text-center">Nenhum comentário adicionado</div>
			)}
		</ul>
	);
};

export default CommentsList;
