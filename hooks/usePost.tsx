import React from "react";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Content } from "next/font/google";

const usePost = (post_id?: number) => {
	const { data, error, isLoading, mutate } = useSWR(
		`http://127.0.0.1:8000/api/posts/${post_id}/comments`,
		fetcher
	);

	const handleCommentSubmit = (
		url: string,
		data: { title?: string; content: string }
	) => {
		const postData = async () => {
			const res = await fetch(url, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!res.ok) {
				throw new Error(res.statusText);
			}

			mutate();
		};

		postData();
	};

	return { comments: data, isLoading, error, handleCommentSubmit };
};

export default usePost;
