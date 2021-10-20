import toast, { Toaster } from 'react-hot-toast';

function ToastNotify(error: boolean, message: string) {

  if (error) {
    return toast.error(message, {
      duration: 3000,
      position: 'top-right'
    });
  } else {
    return toast.success(message, {
      duration: 3000,
      position: 'top-right'
    });
  }
}

export { ToastNotify, Toaster }