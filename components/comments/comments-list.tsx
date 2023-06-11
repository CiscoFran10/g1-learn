import { Comment } from "@/types/post";
import React from "react";
import CommentsItem from "./comments-item";

interface CommentsListProps {
	comments: Comment[] | undefined;
	id: number;
}

const CommentsList = ({ comments, id }: CommentsListProps) => {
	if (comments)
		return (
			<ul className="grid gap-10 max-w-[840px] mx-auto my-10">
				{comments.map((comment) => (
					<div key={comment.id} className="grid gap-8 border-l">
						<CommentsItem {...comment} />
						{comment.replies && (
							<div key={comment.id} className="ml-10 border-l">
								<ul className="grid gap-8">
									{comment.replies?.map((reply) => (
										<CommentsItem
											post_id={id}
											key={reply.id}
											comment_id={comment.id}
											{...reply}
										/>
									))}
								</ul>
							</div>
						)}
					</div>
				))}
			</ul>
		);
};

export default CommentsList;
