"use client";

import React from "react";

import SearchBar from "@/components/post/search-bar";
import PostList from "@/components/post/post-list";
import PostCreate from "@/components/post/post-create";

import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Loading from "@/components/ui/loading";

export default function IndexPage() {
	const { data, isLoading, error, mutate } = useSWR(
		`http://127.0.0.1:8000/api/posts`,
		fetcher
	);
	const [filter, setFilter] = React.useState("");

	if (error) return <p>Houve algum erro</p>;
	return (
		<>
			<header className="w-full bg-[url(/pattern.jpg)] bg-contain border-b bg-[200px_200px]">
				<div className="container flex flex-col gap-12 pt-20">
					<h1 className="text-5xl font-bold ">Fórum</h1>

					<SearchBar filter={filter} setFilter={setFilter} />
				</div>
			</header>

			<main className="container">
				<PostCreate mutate={mutate} />
				{isLoading ? (
					<Loading className="mt-20" />
				) : (
					<PostList posts={data} filter={filter} />
				)}
			</main>
		</>
	);
}
