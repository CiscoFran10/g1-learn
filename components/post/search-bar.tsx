import { Search } from "lucide-react";
import { Input } from "../ui/input";

interface SearchBarProps {
	filter: string;
	setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ filter, setFilter }: SearchBarProps) => {
	return (
		<label className="-mb-[24px] max-w-[528px] relative">
			<span
				aria-hidden
				className="inset-0 absolute flex items-center justify-center px-3 w-fit"
			>
				<Search className="text-secondary-foreground" />
			</span>
			<Input
				value={filter}
				onChange={({ target }) => setFilter(target.value)}
				placeholder="Pesquisar tópico "
				className="pl-12 pr-3"
				type="text"
			/>
		</label>
	);
};

export default SearchBar;
