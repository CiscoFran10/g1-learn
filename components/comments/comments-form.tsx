import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

interface CommentsFormProps {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
	handleSubmit: (e: React.SyntheticEvent) => void;
	placeholder: string;
}

const CommentsForm = ({
	value,
	setValue,
	setIsEditing,
	handleSubmit,
	placeholder,
}: CommentsFormProps) => {
	const handleClick = (e: React.SyntheticEvent) => {
		handleSubmit(e);
		setIsEditing(false);
		setValue("");
	};

	return (
		<form className="grid gap-4 w-full">
			<Textarea
				placeholder={placeholder}
				value={value}
				autoFocus
				onChange={({ target }) => setValue(target.value)}
			></Textarea>
			<div className="flex justify-end gap-3">
				<Button
					onClick={() => setIsEditing(false)}
					size={"sm"}
					variant={"destructive"}
				>
					Cancelar
				</Button>
				<Button
					onClick={handleClick}
					type="submit"
					variant={"primary"}
					size={"sm"}
				>
					Enviar
				</Button>
			</div>
		</form>
	);
};

export default CommentsForm;
