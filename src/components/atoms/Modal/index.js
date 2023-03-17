import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


const Modal = ({ childComp, size='md', isOpen=true }) => {

    return (
        <>
            <BootstrapDialog
                aria-labelledby="customized-dialog-title"
                open={isOpen}
                maxWidth={size}
                width={'100%'}
            >
                <div className='modal-container'>
                    {childComp}
                </div>
            </BootstrapDialog>
        </>
    );
}

export default Modal;