import { Search } from "lucide-react";
import Card from "@/components/ui/card";

export const posts = [
	{
		id: 1,
		title:
			"How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres",
		author: "Thiago101",
		date: "5 horas atrás",
		comments_total: 12,
		description:
			"Prisma is a next-generation ORM that can be used to access a database in Node.js and TypeScript applications. In this guide, you'll learn how to implement a sample fullstack blogging application using the following technologies: Next.js as the React framework Next.js API Routes for server-side API routes as the backend Prisma as the ORM for migrations and database access Vercel Postgres as the database NextAuth.js for authentication via GitHub (OAuth) TypeScript as the programming language Vercel for deployment You'll take advantage of the flexible rendering capabilities of Next.js and at the end, you will deploy the app to Vercel.",
		comments: [
			{
				id: 1,
				date: "2 dias atrás",
				author: "Lucas.Ribera",
				comment: "This is the first comment on this page.",
			},
		],
	},

	{
		id: 2,
		title: "How to Deploy a React Site with Vercel?",
		author: "Thiago101",
		date: "10 dias atrás",
		comments_total: 12,
		description:
			"Vercel is a platform for deploying the fastest React sites. You can deploy your site with zero configuration to the best frontend infrastructure. Develop: Build React sites that connect to your favorite APIs, databases, and content management systems Preview: Integrate with any GitHub, GitLab, or Bitbucket repository for instant continuous deployment Ship: Deploy your site to every edge node worldwide for the fastest React sites. Static files, Serverless Edge Functions, and more Monitor: Measure Core Web Vitals from actual devices your visitors are using with Vercel Analytics for Next or Gatsby.",
	},
];

export default function IndexPage() {
	return (
		<>
			<header className="w-full bg-[url(/pattern.jpg)] bg-contain border-b bg-[200px_200px]">
				<div className="container flex flex-col gap-12 pt-20">
					<h1 className="text-5xl font-bold ">Fórum</h1>

					<label className="-mb-[24px] max-w-[528px] relative">
						<span
							aria-hidden
							className="inset-0 absolute flex items-center justify-center px-3 w-fit"
						>
							<Search className="text-secondary-foreground" />
						</span>
						<input
							placeholder="Pesquisar tópico "
							className="h-12 w-full rounded-[5px] pl-12 pr-3 border bg-background outline-none focus:border-focus transition-all duration-300 placeholder:text-secondary-foreground"
							type="text"
						/>
					</label>
				</div>
			</header>

			<main className="container">
				<ul className="grid gap-6 mt-16">
					{posts.map((post) => (
						<Card key={post.id} {...post} />
					))}
				</ul>
			</main>
		</>
	);
}
