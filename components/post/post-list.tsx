import React from "react";

import Card from "@/components/ui/card";
import { Post } from "@/types/post";

interface PostList {
	posts: Post[];
	filter: string;
}

const PostList = ({ posts, filter }: PostList) => {
	return (
		<ul className="grid gap-6 my-5">
			{posts
				.filter((p) => p.title.toLowerCase().includes(filter.toLowerCase()))
				.map((post: Post) => (
					<Card key={post.id} {...post} />
				))}
		</ul>
	);
};

export default PostList;
