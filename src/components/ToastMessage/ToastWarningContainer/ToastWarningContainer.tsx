import React from 'react';
import { IToastWarningContainer } from './IToastWarningContainer';
import style from './ToastWarningContainer.module.scss';
import { COLOR_PALETTE } from 'constants/colorPalette';
import CloseIcon from 'icons/CloseIcon';
import WarningIcon from 'icons/WarningIcon';
import { Paragraph } from 'components/Paragraph/Paragraph';

export const ToastWarningContainer: React.FC<IToastWarningContainer> = ({
  message,
  closeToast,
}) => {
  return (
    <div className={style.root}>
      <WarningIcon />
      <Paragraph className={style.message} variant="Regular">
        {message}
      </Paragraph>
      <CloseIcon
        color={COLOR_PALETTE['warning-color']}
        className={style.icon}
        onClick={closeToast}
      />
    </div>
  );
};
