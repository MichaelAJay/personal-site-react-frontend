import React, { createContext, useContext, useState } from "react";

interface ModalData {
    title: string
}

interface ProgressBadgeContextType {
    modalVisible: boolean;
    modalData: ModalData;
    showModal: (data: ModalData) => void;
    hideModal: () => void;
}

const defaultState: ProgressBadgeContextType = {
    modalVisible: false,
    modalData: { title: '' },
    showModal: () => {},
    hideModal: () => {},
}

const ProgressBadgeContext = createContext<ProgressBadgeContextType>(defaultState);

export const useProgressBadge = () => useContext(ProgressBadgeContext);

export const ProgressBadgeProvider: React.FC = ({ children }: any) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState<ModalData>({ title: '' });

    const showModal = (data: ModalData) => {
        setModalData(data);
        setModalVisible(true);
    }

    const hideModal = () => {
        setModalVisible(false);
    }

    return (
        <ProgressBadgeContext.Provider value={{ modalVisible, modalData, showModal, hideModal }}>
            { children }
        </ProgressBadgeContext.Provider>
    );
}