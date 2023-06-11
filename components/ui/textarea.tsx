import React, { LegacyRef, SetStateAction } from "react";
import { Button } from "./button";

interface TextAreaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	value: string;
	setValue: React.Dispatch<SetStateAction<string>>;
}

const Textarea = ({ value, setValue, ...props }: TextAreaProps) => {
	return (
		<textarea
			autoFocus
			className="w-full hover:border-focus transition-colors duration-300 rounded outline-none focus:border-focus bg-primary border p-3 placeholder:text-secondary-foreground placeholder:text-sm text-sm resize-none min-h-[150px]"
			value={value}
			onChange={({ target }) => setValue(target.value)}
			{...props}
		></textarea>
	);
};

export default Textarea;
