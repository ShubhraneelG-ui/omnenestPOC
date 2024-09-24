import React, { useState } from 'react';
import styles from './Dropdown.module.scss';
import CrossIcon from 'icons/CrossIcon';

const SearchableDropdown: React.FC<ISearchableDropdown> = ({
  title,
  dropdownPlaceholder,
  isSearchable,
  hasCrossIcon,
  options
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('');


  const filteredOptions = options.filter((option:any) =>
    option.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setSearchTerm(option);
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value); 
    setSelectedOption(''); 
    setIsOpen(true);
  };

  const clearInput = () => {
    setSearchTerm('');
    setSelectedOption('');
    setIsOpen(false);
  };

  return (
    <div className={styles.searchableDropdown}>
      <div className={styles.dropdownHeader}>
        {title}
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.inputBox}
          placeholder={dropdownPlaceholder || 'Select'}
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          readOnly={!isSearchable}
        />

        {searchTerm && hasCrossIcon && (
        <CrossIcon className={styles.clearIcon} onClick={clearInput}/>
        )}

      </div>

      {isOpen && (
        <div className="dropdown-list">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option:any) => (
              <div
                key={option}
                className={styles.dropdownList}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))
          ) : (
            <div>No options available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
