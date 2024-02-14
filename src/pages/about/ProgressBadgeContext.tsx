import React, { createContext, ReactNode, useContext, useState } from 'react';
import { SkillLevel } from './about-me-field-texts';

interface ModalData {
  dashPercent: number;
  level: SkillLevel;
  levelAssessmentReason: string;
  title: string;
}

interface ProgressBadgeContextType {
  modalOpen: boolean;
  modalData: ModalData;
  showModal: (data: ModalData) => void;
  hideModal: () => void;
}

const defaultState: ProgressBadgeContextType = {
  modalOpen: false,
  modalData: {
    dashPercent: 50,
    level: 'Intermediate',
    levelAssessmentReason: '',
    title: '',
  },
  showModal: () => {},
  hideModal: () => {},
};

const ProgressBadgeContext =
  createContext<ProgressBadgeContextType>(defaultState);

export const useProgressBadge = () => useContext(ProgressBadgeContext);

interface ProgressBadgeProviderProps {
  children: ReactNode;
}

export const ProgressBadgeProvider: React.FC<ProgressBadgeProviderProps> = ({
  children,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData>(defaultState.modalData);

  const showModal = (data: ModalData) => {
    setModalData(data);
    setModalOpen(true);
  };

  const hideModal = () => {
    setModalOpen(false);
  };

  return (
    <ProgressBadgeContext.Provider
      value={{ modalOpen: modalOpen, modalData, showModal, hideModal }}
    >
      {children}
    </ProgressBadgeContext.Provider>
  );
};
