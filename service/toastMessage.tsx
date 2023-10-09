import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastSuccess = (message: String) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 4000, // Duration in milliseconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const toastError = (message: String) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 4000, // Duration in milliseconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
