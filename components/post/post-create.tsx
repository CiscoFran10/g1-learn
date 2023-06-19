"use client";

import React from "react";
import { PlusCircle, X } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { KeyedMutator } from "swr";

const PostCreate = ({ mutate }: { mutate: KeyedMutator<any> }) => {
	const [open, setOpen] = React.useState(false);
	const [input, setInput] = React.useState({ title: "", content: "" });

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setInput({ ...input, [name]: value });
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		const addPost = async () => {
			try {
				const res = await fetch("http://127.0.0.1:8000/api/posts", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(input),
				});

				if (!res.ok) {
					throw new Error(res.statusText);
				}

				mutate();
				setOpen(false);
			} catch (error) {
				console.log(error);
			}
		};

		addPost();
	};

	return (
		<div className="flex justify-end mt-10">
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button className="flex items-center gap-2 px-4" size={"lg"}>
						Criar Tópico <PlusCircle className="w-4 h-4" />
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Tópico</DialogTitle>
					</DialogHeader>

					<form className="w-full grid gap-5 mt-5" onSubmit={handleSubmit}>
						<label>
							<span className="block text-sm text-secondary-foreground mb-2">
								Titulo
							</span>
							<Input
								required
								name="title"
								value={input.title}
								onChange={handleChange}
							/>
						</label>

						<label>
							<span className="block text-sm text-secondary-foreground mb-2">
								Descrição
							</span>
							<Textarea
								required
								name="content"
								value={input.content}
								onChange={handleChange}
							/>
						</label>

						<Button variant={"primary"}>Enviar</Button>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default PostCreate;
