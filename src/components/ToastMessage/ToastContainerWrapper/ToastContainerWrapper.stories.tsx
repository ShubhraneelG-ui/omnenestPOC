import { Meta } from '@storybook/react';

import { ToastContainerWrapper } from './ToastContainerWrapper';
import { toastSuccess } from '../ToastSuccessContainer/utils';
import { toastError } from '../ToastErrorContainer/utils';
import { toastWarning } from '../ToastWarningContainer/utils';
import { toastInfo } from '../ToastInfoContainer/utils';
import Button from '../../Button/Button';

const meta: Meta<typeof ToastContainerWrapper> = {
  title: 'Components/Toaster',
  component: ToastContainerWrapper,
  argTypes: {},
};

export default meta;

const SuccessToasterTemplate = () => (
  <>
    <ToastContainerWrapper />
    <Button
      variant="Primary"
      disabled={false}
      onClick={() => toastSuccess('Success')}
    >
      Show Success Notification
    </Button>
  </>
);

export const Success = SuccessToasterTemplate.bind({});

const ErrorToasterTemplate = () => (
  <>
    <ToastContainerWrapper />
    <Button
      variant="Primary"
      disabled={false}
      onClick={() => toastError('Error')}
    >
      Show Error Notification
    </Button>
  </>
);

export const Error = ErrorToasterTemplate.bind({});

const WarningToasterTemplate = () => (
  <>
    <ToastContainerWrapper />
    <Button
      variant="Primary"
      disabled={false}
      onClick={() => toastWarning('Warning!')}
    >
      Show Warning Notification
    </Button>
  </>
);

export const Warning = WarningToasterTemplate.bind({});

const InfoToasterTemplate = () => (
  <>
    <ToastContainerWrapper />
    <Button
      variant="Primary"
      disabled={false}
      onClick={() => toastInfo('Info')}
    >
      Show Info Notification
    </Button>
  </>
);

export const Info = InfoToasterTemplate.bind({});
