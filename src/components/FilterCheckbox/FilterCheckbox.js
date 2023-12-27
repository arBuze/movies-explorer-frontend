import './FilterCheckbox.css';

export default function FilterCheckbox(props) {
  return(
    <div className="filter-checkbox">
      <label className="filter-checkbox__switch-label">
        <input  className="filter-checkbox__switch" type="checkbox" name="shorts" id="shorts" />
        <span className="filter-checkbox__pseudo-switch"></span>
          Короткометражки
      </label>
    </div>
  );
}
