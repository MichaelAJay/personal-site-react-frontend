import React, { createContext, ReactNode, useContext, useState } from "react";
import { SkillLevel } from "./about-me-field-texts";

interface ModalData {
    dashPercent: number;
    level: SkillLevel;
    levelAssessmentReason: string;
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
    modalData: { 
        dashPercent: 50,
        level: 'Intermediate',
        levelAssessmentReason: '',
        title: '',
    },
    showModal: () => {},
    hideModal: () => {},
}

const ProgressBadgeContext = createContext<ProgressBadgeContextType>(defaultState);

export const useProgressBadge = () => useContext(ProgressBadgeContext);

interface ProgressBadgeProviderProps {
    children: ReactNode
}

export const ProgressBadgeProvider: React.FC<ProgressBadgeProviderProps> = ({ children }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState<ModalData>(defaultState.modalData);

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