import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function Loading({ className }: { className?: string }) {
	return (
		<div className={cn("flex flex-col", className)}>
			<Skeleton className="h-36 w-full bg-zinc-900 mb-5" />
			<Skeleton className="h-8 w-1/5 bg-zinc-900 mb-5" />
		</div>
	);
}
