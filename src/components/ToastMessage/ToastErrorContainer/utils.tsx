import { toast } from 'react-toastify';
import { ToastErrorContainer } from './ToastErrorContainer';

export const toastError = (message: string) => {
  toast.error(({ closeToast }) => (
    <ToastErrorContainer message={message} closeToast={closeToast} />
  ));
};
