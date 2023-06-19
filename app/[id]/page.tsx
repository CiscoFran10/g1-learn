import React from "react";
import { Metadata, ResolvingMetadata } from "next";

import Link from "next/link";
import CommentsList from "@/components/comments/comments-list";
import PostContent from "@/components/post/post";

type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

const getPost = async (id: string) => {
	const res = await fetch(`http://127.0.0.1:8000/api/posts/${id}`);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const id = params.id;

	const post = await getPost(id);

	return {
		title: post?.title,
	};
}

export default async function PostPage({ params }: { params: { id: string } }) {
	const post = await getPost(params.id);

	if (post)
		return (
			<main className="py-12">
				<div className="container flex flex-col ">
					<Link
						href={"/"}
						className="text-sm text-secondary-foreground hover:text-primary-foreground transition-colors duration-300 w-fit"
					>
						← Voltar para os tópicos
					</Link>
				</div>

				<PostContent {...post} />
				<CommentsList post_id={post.id} />
			</main>
		);
}
