import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setQuery } from "@/pages/store/searchSlice";


function Search() {
  const [localQuery, setLocalQuery] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!localQuery.trim() || !router.isReady) return;

    dispatch(setQuery(localQuery.trim()));
    setLocalQuery("");
    router.push("/products");
  };
  return (
    <div className=" rounded-full h-10 relative transition w-72 md:w-80">
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search" value={localQuery} onChange={e => setLocalQuery(e.target.value)} className=" w-full pl-4 pr-10 py-2 rounded-full border border-gray-300   text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
      <SearchIcon className=" absolute right-6 top-2 text-blue-300 dark:text-blue-400 " size={22} />
      <SearchIcon className=" absolute top-2 right-6 items-center justify-center inline-flex text-blue-400 rounded-full opacity-100 animate-ping" size={22}/>
    </form>
    </div>
  )
}
export default Search
