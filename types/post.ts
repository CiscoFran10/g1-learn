export interface Post {
	id: number;
	title: string;
	content: string;
	comments?: Comment[];
	created_at: Date;
	updated_at: Date;
}

export interface Comment {
	id: number;
	post_id: number;
	content: string;
	created_at: Date;
	updated_at: Date;
	comment_id?: number;
	replies?: Reply[];
}

export interface Reply {
	id: number;
	comment_id: number;
	content: string;
	created_at: Date;
	updated_at: Date;
}

export interface PostCreate {
	title: string;
	content: string;
}
