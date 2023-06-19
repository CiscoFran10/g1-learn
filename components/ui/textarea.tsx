import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				className={cn(
					"w-full hover:border-focus transition-colors duration-300 rounded outline-none focus:border-focus bg-primary border p-3 placeholder:text-secondary-foreground placeholder:text-sm text-sm resize-none min-h-[150px]",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Textarea.displayName = "Textarea";

export { Textarea };
