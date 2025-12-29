import { useDispatch } from "react-redux";
import { setMaxPrice, setMinPrice } from "@/pages/store/filtersSlice";
import { priceRanges } from "@/pages/types/product";


function PriceFilter() {
  const dispatch = useDispatch();
  return (
    <select onChange={(e) => {
        const range = priceRanges[Number(e.target.value)];
        dispatch(setMinPrice(range.min));
        dispatch(setMaxPrice(range.max));
      }}
      className=" rounded-2xl px-10 py-3 dark:bg-gray-800 text-gray-900 dark:text-gray-100 bg-zinc-300 m-10">
      {priceRanges.map((range, index) => (
        <option key={index} value={index}>{range.label}</option>
      ))}
    </select>
  )
}
export default PriceFilter
