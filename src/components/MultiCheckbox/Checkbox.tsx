import React, { useState } from 'react';
import styles from './Checkbox.module.scss';
import UpwardArrowIcon from 'icons/UpwardArrow'; // Reuse the same icon

interface MultiCheckboxProps {
  options: string[];
  labelPosition?: 'left' | 'right';
  showMinOption?: number;
}

const MultiCheckboxExample: React.FC<MultiCheckboxProps> = ({
  options,
  labelPosition = 'left',
  showMinOption = 3,
}) => {
  const initialCheckedItems = Object.fromEntries(
    options.map((option) => [option, false]),
  );
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    initialCheckedItems,
  );
  const [showAll, setShowAll] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [name]: checked,
    }));
  };

  const toggleShowMore = () => {
    setShowAll((prev) => !prev);
  };

  const handleReset = () => {
    setCheckedItems(initialCheckedItems);
  };

  const displayedOptions = showAll ? options : options.slice(0, showMinOption);

  return (
    <div className={styles.checkboxContainer}>
      <div className={styles.checkboxOptions}>
        {displayedOptions.map((option) => (
          <label key={option}>
            {labelPosition === 'left' ? (
              <>
                {option.charAt(0).toUpperCase() + option.slice(1)}
                <input
                  type="checkbox"
                  name={option}
                  checked={checkedItems[option]}
                  onChange={handleCheckboxChange}
                />
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  name={option}
                  checked={checkedItems[option]}
                  onChange={handleCheckboxChange}
                />
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </>
            )}
          </label>
        ))}
        <div className={styles.btnContainer}>
          <div onClick={toggleShowMore} className={styles.toggleButton}>
            {showAll ? 'Show Less' : 'Show More'}
            <UpwardArrowIcon
              className={showAll ? styles.arrowUp : styles.arrowDown}
            />
          </div>
          <div className={styles.resetAll} onClick={handleReset}>
            Reset All
          </div>
        </div>
      </div>

      <div className={styles.showDetails}>
        <p>Selected Options:</p>
        <ul>
          {Object.entries(checkedItems)
            .filter(([_, value]) => value)
            .map(([key]) => (
              <li key={key}>{key}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiCheckboxExample;
