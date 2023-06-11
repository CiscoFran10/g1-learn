"use client";

import React, { LegacyRef } from "react";
import { Metadata, ResolvingMetadata } from "next";

import { posts } from "@/app/page";
import { Post } from "@/types/post";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CommentsList from "@/components/comments/comments-list";
import useComment from "@/hooks/useComment";
import Textarea from "@/components/ui/textarea";
import CommentsForm from "@/components/comments/comments-form";

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
	const { value, isEditing, setIsEditing, setValue, handleCommentSubmit } =
		useComment();

	const post = posts.find((post) => post.id === +params.id);

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		if (post) {
			const date = new Date();
			const author = post?.author;
			const id = post?.id;
			const comment = value;

			handleCommentSubmit(`/posts/${id}`, { date, author, comment });
		}
	};

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

					<CommentsList id={post.id} comments={post.comments} />
				</div>
			</main>
		);
}
