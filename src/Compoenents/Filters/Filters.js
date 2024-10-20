import React from 'react';
import './Filters.css';

const FilterSection = () => {
  return (
    <div className="filter-section">
      <h2>Filter <span className="clear-all">CLEAR ALL</span></h2>
      <hr />
      {['Type of Plants', 'Price', 'Nursery', 'Ideal Plants Location', 'Indoor/Outdoor', 'Maintenance', 'Plant Size', 'Water Schedule', 'Color', 'Seasonal', 'Light Efficient'].map((item, index) => (
        <div key={index}>
          <div className='filter-item'>{item} <span className="filter-toggle">+</span></div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FilterSection;
