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
    <>
      <label className="relative">
        <MagnifyingGlassIcon className="absolute left-5 top-0.5 size-5 text-slate-400 lg:top-0.5" />
        <input
          className="m-0 w-full rounded-lg p-0 px-14 py-2 shadow-lg outline-none dark:bg-darkBlue"
          type="text"
          value={searchValue}
          onChange={onSearch}
          placeholder="Search for a country..."
        />
      </label>
    </>
  );
}

export default Search;
