import { toast, Toaster, ToastOptions } from "react-hot-toast";

// Default options can be customized here
const defaultOptions: ToastOptions = {
  position: "top-right",
  duration: 4000,
};

export function useToast() {
  return {
    success: (message: string, options?: ToastOptions) =>
      toast.success(message, { ...defaultOptions, ...options }),
    error: (message: string, options?: ToastOptions) =>
      toast.error(message, { ...defaultOptions, ...options }),
    loading: (message: string, options?: ToastOptions) =>
      toast.loading(message, { ...defaultOptions, ...options }),
    custom: (message: string, options?: ToastOptions) =>
      toast(message, { ...defaultOptions, ...options }),
    dismiss: toast.dismiss,
    promise: toast.promise,
    Toaster,
  };
}
