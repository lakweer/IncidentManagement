import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { useSelector, useDispatch } from 'react-redux'

import { hideModal } from '../state/modal.actions'

import  ResponseTimeEditModal from './ResponseTimeEditModal';
import VerifyConfirmModal from './VerifyConfirmModal'
import EscalateModal from './EscalateModal';
import EscallateOutsideModal from './EscallateOutsideModal';
import ChangeAssigneeModal from './ChangeAssigneeModal';
import RequestAdviceModal from './RequestAdviceModal';
import ProvideAdviceModal from './ProvideAdviceModal';
import CloseModal from './CloseModal';

const MODAL_COMPONENTS = {
    'RESPOSE_TIME_EDIT': ResponseTimeEditModal,
    'VERIFY_CONFIRM_MODAL': VerifyConfirmModal,
    'ESCALATE_MODAL': EscalateModal,
    'ESCALLATE_OUTSIDE': EscallateOutsideModal,
    'CHANGE_ASSIGNEE_MODAL': ChangeAssigneeModal,
    'REQUEST_ADVICE_MODAL': RequestAdviceModal,
    'PROVIDE_ADVICE_MODAL': ProvideAdviceModal,
    'CLOSE_MODAL': CloseModal
    /* other modals */
}

const RootModal = () => {
    // this retrieves props from the reducer
    const {modalType, modalProps} = useSelector(state => state.modalReducer)
    const dispatch = useDispatch()

    if (!modalType) {
        return null
    }

    const ModalContent = MODAL_COMPONENTS[modalType]

    return (
        <div>
            <Dialog
                open={modalType?true:false}
                onClose={()=>{dispatch(hideModal())}}
                aria-labelledby="form-dialog-title"
            >
                <ModalContent {...modalProps}/>
            </Dialog>
        </div>
    );
}

export default RootModal;
