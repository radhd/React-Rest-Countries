import {
  GlobeAltIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

interface SearchProps {
  searchValue: string;
  onSearch: (value: string) => void;
}

function Search(props: SearchProps) {
  const { searchValue, onSearch } = props;
  return (
    <div className="flex justify-center px-5 pt-5 lg:block">
      <label className="relative">
        <MagnifyingGlassIcon className="absolute left-5 top-3 size-5 text-slate-400 lg:top-0.5" />
        <input
          className="border-2 px-14 py-2 shadow-lg outline-none"
          type="text"
          value={searchValue}
          onChange={onSearch}
          placeholder="Search for a country..."
        />
      </label>
    </div>
  );
}

export default Search;
