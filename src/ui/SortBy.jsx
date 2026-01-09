import Select from "./Select.jsx";
import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
	const [searchParans, setSearchParans] = useSearchParams();

	const sortBy = searchParans.get("sortBy") || "";
	function handleChange(e) {
		searchParans.set("sortBy", e.target.value);
		setSearchParans(searchParans);
	}

	return (
		<Select
			options={options}
			type="white"
			value={sortBy}
			onChange={handleChange}
		></Select>
	);
}

export default SortBy;
