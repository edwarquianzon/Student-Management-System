import React from "react";

const DateFilter = ({ minDate, setMinDate, maxDate, setMaxDate }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <label>
        Min Date:
        <input
          type="date"
          value={minDate}
          onChange={(e) => setMinDate(e.target.value)}
          style={{ marginLeft: "10px", marginRight: "20px" }}
        />
      </label>
      <label>
        Max Date:
        <input
          type="date"
          value={maxDate}
          onChange={(e) => setMaxDate(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </label>
    </div>
  );
};

export default DateFilter;
