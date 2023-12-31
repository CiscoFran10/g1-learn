import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-accent border hover:border-focus hover:text-primary-foreground",
				primary:
					"bg-primary-foreground text-primary  hover:bg-primary hover:text-primary-foreground border",
				destructive:
					"bg-primary border border-destructive text-destructive hover:bg-destructive hover:text-primary-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:text-primary-foreground",
			},
			size: {
				default: "h-10 py-2 px-4",
				sm: "h-8 px-3 py-1 rounded-md",
				lg: "h-11 px-8 rounded-md",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({
	className,
	variant,
	size,
	children,
	...props
}) => {
	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		>
			{children}
		</button>
	);
};

export { Button, buttonVariants };
