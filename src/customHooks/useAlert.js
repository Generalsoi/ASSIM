import Swal from 'sweetalert2';

const useAlert = () => {
    const alert = (
        title,
        message,
        icon,
        confirmButtonText,
        callback
    ) => {
        Swal.fire({
            title: title,
            text: message,
            icon: icon,
            confirmButtonText: confirmButtonText,
        }).then((result) => {
            if (result.isConfirmed) {
                callback();
            }
        });
    };
    return alert;
};

export default useAlert; 