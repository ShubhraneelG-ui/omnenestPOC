import styles from './Chip.module.scss';
import React from 'react';
import { IChip } from './IChip';
import appendClasses from 'utils/appendClasses';
import CrossIcon from 'icons/CrossIcon';
import { COLOR_PALETTE } from 'constants/colorPalette';

const Chip: React.FC<IChip> = ({
  variant = 'Circular',
  isRemovable = false,
  subVariant = 'Filled',
  children,
  disabled = false,
  className = '',
  onRemoveIconClick,
  RemoveIcon = CrossIcon,
  active = false,
  onActive,
  ...rest
}) => {
  const classNames = appendClasses(
    styles.chip,
    styles[variant.toLocaleLowerCase()],
    styles[subVariant.toLocaleLowerCase()],
    disabled && styles['disabled'],
    active && styles['active'],
    className,
  );

  return (
    <div
      className={classNames}
      role="button"
      tabIndex={0}
      onClick={() => onActive?.(!active)}
      {...rest}
    >
      {children}
      {isRemovable && (
        <RemoveIcon
          onClick={onRemoveIconClick}
          className={appendClasses(
            styles.removeIcon,
            disabled && styles.disabled,
          )}
          color={
            disabled ? COLOR_PALETTE['text-disabled'] : COLOR_PALETTE['black']
          }
        />
      )}
    </div>
  );
};

export default Chip;
