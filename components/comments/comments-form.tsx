import React from "react";
import { Button } from "../ui/button";
import Textarea from "../ui/textarea";

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
	return (
		<form className="grid gap-4 w-full">
			<Textarea
				placeholder={placeholder}
				value={value}
				setValue={setValue}
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
					onClick={handleSubmit}
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
