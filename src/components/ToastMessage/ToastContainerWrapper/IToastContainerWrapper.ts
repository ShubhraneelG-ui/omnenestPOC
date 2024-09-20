import { ToastPosition } from 'react-toastify';

export type toastProps = JSX.IntrinsicElements['div'];

export interface IToastMessage extends toastProps {
  position?: ToastPosition;
}
