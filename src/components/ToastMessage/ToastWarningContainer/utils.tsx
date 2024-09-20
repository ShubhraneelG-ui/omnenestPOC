import { toast } from 'react-toastify';
import { ToastWarningContainer } from './ToastWarningContainer';

export const toastWarning = (message: string) => {
  toast.warning(({ closeToast }) => (
    <ToastWarningContainer message={message} closeToast={closeToast} />
  ));
};
