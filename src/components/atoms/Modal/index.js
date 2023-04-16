import Dialog from '@mui/material/Dialog';


export const Modal = ({ childComp, size='md', isOpen=true, classes='' }) => {

    return (
        <>
            <Dialog
                aria-labelledby="customized-dialog-title"
                open={isOpen}
                maxWidth={size}
                width={'100%'}
                className={classes}
            >
                <div className='modal-container'>
                    {childComp}
                </div>
            </Dialog>
        </>
    );
}