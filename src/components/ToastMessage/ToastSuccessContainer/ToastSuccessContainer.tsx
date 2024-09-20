import React from 'react';
import { IToastSuccessContainer } from './IToastSuccessContainer';
import style from './ToastSuccessContainer.module.scss';
import CloseIcon from 'icons/CloseIcon';
import SuccessIcon from 'icons/SuccessIcon';
import { COLOR_PALETTE } from 'constants/colorPalette';
import { Paragraph } from 'components/Paragraph/Paragraph';

export const ToastSuccessContainer: React.FC<IToastSuccessContainer> = ({
  message,
  closeToast,
}) => {
  return (
    <div className={style.root}>
      <SuccessIcon />
      <Paragraph className={style.message} variant="Regular">
        {message}
      </Paragraph>
      <CloseIcon
        color={COLOR_PALETTE['grey-600']}
        className={style.icon}
        onClick={closeToast}
      />
    </div>
  );
};
