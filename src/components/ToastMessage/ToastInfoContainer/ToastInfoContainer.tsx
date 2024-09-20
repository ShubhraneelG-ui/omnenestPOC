import React from 'react';
import { IToastInfoContainer } from './IToastInfoContainer';
import style from './ToastInfoContainer.module.scss';
import { COLOR_PALETTE } from 'constants/colorPalette';
import CloseIcon from 'icons/CloseIcon';
import { Paragraph } from 'components/Paragraph/Paragraph';

export const ToastInfoContainer: React.FC<IToastInfoContainer> = ({
  message,
  closeToast,
}) => {
  return (
    <div className={style.root}>
      <Paragraph className={style.message} variant="Regular">
        {message}
      </Paragraph>
      <CloseIcon
        color={COLOR_PALETTE['info-color']}
        className={style.icon}
        onClick={closeToast}
      />
    </div>
  );
};
