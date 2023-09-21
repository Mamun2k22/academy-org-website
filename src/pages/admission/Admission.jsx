import React from 'react';
import AdmissionPage from './admissionPage';
import ApplicationProcess from './ApplicationProcess';
import AnnulTution from './AnnulTution';
import Financial from './Financial';

const Admission = () => {
    return (
        <div>
            <AdmissionPage></AdmissionPage>
            <ApplicationProcess></ApplicationProcess>
            <AnnulTution></AnnulTution>
            <Financial></Financial>
        </div>
    );
};

export default Admission;