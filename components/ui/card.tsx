import { Post } from "@/types/post";
import Link from "next/link";
import * as React from "react";

const Card = ({ id, title, author, date, comments_total }: Post) => {
	return (
		<li>
			<Link
				className="flex flex-col gap-5 p-8 transition-colors duration-300 border rounded bg-primary focus:border-secondary-foreground hover:border-focus"
				href={`/${id}`}
			>
				<div className="flex items-center gap-2">
					<h3 className="px-2 py-1 text-xs font-semibold bg-tertiary text-tertiary-foreground rounded-2xl">
						{author}
					</h3>
					<span className="text-xs text-secondary-foreground">
						{date.toString()}
					</span>
				</div>

				<h2 className="text-base font-bold text-foreground sm:text-lg md:text-xl">
					{title}
				</h2>

				<span className="px-2 py-1 text-xs font-semibold rounded bg-secondary text-secondary-foreground w-fit">
					{comments_total} Comentários
				</span>
			</Link>
		</li>
	);
};

export default Card;
