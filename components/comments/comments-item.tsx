import { Comment } from "@/types/post";
import React from "react";
import { Button } from "../ui/button";

const CommentsItem = ({ id, author, comment, date, replies }: Comment) => {
	return (
		<li className="flex flex-col items-start gap-5 px-5 transition-colors duration-300 bg-primary">
			<div className="flex items-center gap-2">
				<h3 className="px-2 py-1 text-xs bg-secondary text-accent rounded-2xl">
					{author}
				</h3>
				<span className="text-xs text-secondary-foreground">{date}</span>
			</div>

			<p className="text-sm">{comment}</p>

			<Button size={"sm"} variant={"secondary"}>
				Responder
			</Button>
		</li>
	);
};

export default CommentsItem;
