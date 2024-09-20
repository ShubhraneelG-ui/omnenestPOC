import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './ToastContainerWrapper.module.scss';
import { IToastMessage } from './IToastContainerWrapper';

export const ToastContainerWrapper: React.FC<IToastMessage> = ({
  position = 'top-right',
}) => {
  return (
    <ToastContainer
      limit={5}
      hideProgressBar
      position={position}
      icon={false}
      closeButton={false}
      closeOnClick={false}
      className={style.toast}
    />
  );
};
