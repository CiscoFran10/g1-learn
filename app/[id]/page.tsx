import React from "react";
import { Metadata, ResolvingMetadata } from "next";

import { posts } from "@/app/page";
import { Post } from "@/types/post";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CommentsList from "@/components/comments/comments-list";
import useComment from "@/hooks/useComment";

type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const id = params.id;

	const post = posts.find((post) => post.id === +id);

	return {
		title: post?.title,
	};
}

export default function Post({ params }: { params: { id: string } }) {
	const { comment, isEditing, handleChange, handleClick } = useComment();
	const post = posts.find((post) => post.id === +params.id);

	if (post)
		return (
			<main className="">
				<div className="border-b">
					<div className="container flex flex-col gap-16 py-12">
						<Link
							href={"/"}
							className="text-sm text-secondary-foreground hover:text-primary-foreground transition-colors duration-300 w-fit"
						>
							← Voltar para os tópicos
						</Link>

						<div>
							<div className="max-w-[840px] mx-auto">
								<h1 className="text-[40px] font-bold leading-tight w-full text-left">
									{post.title}
								</h1>
							</div>
						</div>
					</div>
				</div>

				<div className="container mt-10">
					<div className="max-w-[840px] mx-auto">
						<p className="text-sm sm:text-base">{post.description}</p>

						<div className="p-4 border rounded items-end mt-16">
							{isEditing ? (
								<Button>Comentar</Button>
							) : (
								<Button>Comentar</Button>
							)}
						</div>
					</div>

					<CommentsList comments={post.comments} />
				</div>
			</main>
		);
}
