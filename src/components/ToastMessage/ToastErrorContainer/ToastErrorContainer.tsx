import React from 'react';
import { IToastErrorContainer } from './IToastErrorContainer';
import style from './ToastErrorContainer.module.scss';
import CloseIcon from 'icons/CloseIcon';
import ErrorIcon from 'icons/ErrorIcon';
import { COLOR_PALETTE } from 'constants/colorPalette';
import { Paragraph } from 'components/Paragraph/Paragraph';

export const ToastErrorContainer: React.FC<IToastErrorContainer> = ({
  message,
  closeToast,
}) => {
  return (
    <div className={style.root}>
      <ErrorIcon />
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
