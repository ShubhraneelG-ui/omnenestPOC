import { toast } from 'react-toastify';
import { ToastSuccessContainer } from './ToastSuccessContainer';

export const toastSuccess = (message: string) => {
  toast.success(({ closeToast }) => (
    <ToastSuccessContainer message={message} closeToast={closeToast} />
  ));
};
