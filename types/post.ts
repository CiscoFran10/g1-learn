export interface Post {
	id: number;
	title: string;
	author: string;
	date: string;
	views_total: number;
	comments_total: number;
}

export interface PostInfo extends Post {
	comments?: Comment[];
	description: string;
}

export interface Comment {
	id: number;
	date: string;
	author: string;
	comment: string;
	replies?: Reply[];
}

export type Reply = Omit<Comment, "replies">;
