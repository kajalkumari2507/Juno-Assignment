const filter = () => {
  return (
    <div className="filter">
      <div class="col-xs-6">
        <i class="fa fa-search"></i>
        <input type="search" class="form-control" placeholder="Search" />
      </div>

      <select className="trigger">
        <option value="" selected disabled>
          Trigger reason
        </option>
        <option value="Hard flag">Hard flag</option>
        <option value="Temp Flag">Temp Flag</option>
        <option value="Restricted unflag">Restricted unflag</option>
        <option value="Un flag">Un flag</option>
        <option value="Reviewed">Reviewed</option>
      </select>

      <select className="risk">
        <option value="" selected disabled>
          Risk level
        </option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
};

export default filter;
