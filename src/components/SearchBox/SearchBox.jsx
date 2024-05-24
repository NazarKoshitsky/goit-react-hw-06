import css from "./SearchBox.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";

export default function SearchBox() {
  const filters = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const [value, setValue] = useState(filters);

  const handle = (event) => {
    setValue(event.target.value);
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={handle}
        className={css.input}
      />
    </div>
  );
}