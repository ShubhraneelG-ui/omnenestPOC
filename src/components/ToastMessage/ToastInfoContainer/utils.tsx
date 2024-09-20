import { toast } from 'react-toastify';
import { ToastInfoContainer } from './ToastInfoContainer';

export const toastInfo = (message: string) => {
  toast.info(({ closeToast }) => (
    <ToastInfoContainer message={message} closeToast={closeToast} />
  ));
};
