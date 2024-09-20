import React from 'react';
import { IButton } from './IButton';
import style from './Button.module.scss';

const Button: React.FC<IButton> = ({
  variant = 'Primary',
  size = 'Medium',
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={[
        style.button,
        style[variant.toLocaleLowerCase()],
        style[size.toLocaleLowerCase()],
        className,
      ].join(' ')}
      {...props}
    />
  );
};

export default Button;
