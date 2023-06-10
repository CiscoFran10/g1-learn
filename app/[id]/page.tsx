import React from "react";
import { Metadata, ResolvingMetadata } from "next";

import { posts } from "@/app/page";
import { Post } from "@/types/post";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
						<h1 className="max-w-[820px] mx-auto text-[40px] font-bold leading-tight">
							{post.title}
						</h1>
					</div>
				</div>

				<div className="max-w-[820px] mx-auto mt-10">
					<p className="text-sm sm:text-base">{post.description}</p>

					<div className="p-4 border rounded flex justify-end items-end mt-16">
						<Button>Responder</Button>
					</div>
				</div>
			</main>
		);
}
