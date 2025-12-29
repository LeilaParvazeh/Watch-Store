import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/pages/store";
import { setBrand } from "@/pages/store/filtersSlice";



function BrandFilter() {
  const dispatch = useDispatch();
  const brand = useSelector((state: RootState) => state.filters.brand);

  return (
    <select value={brand} onChange={(e) => dispatch(setBrand(e.target.value))} className=" rounded-2xl px-10 py-3 dark:bg-gray-800 text-gray-900 dark:text-gray-100 bg-zinc-300 m-10">
      <option value="all">All Brands</option>
      <option value="rolex">Rolex</option>
      <option value="casio">Casio</option>
      <option value="omega">Omega</option>
      <option value="seiko">Seiko</option>
      <option value="tissot">Tissot</option>
      <option value="apple">Apple</option>
      <option value="citizen">Citizen</option>
    </select>
  )
}
export default BrandFilter
