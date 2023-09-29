
import ApplicationProcess from './ApplicationProcess';
import AnnulTution from './AnnulTution';
import Financial from './Financial';
import AdmissionBanner from './AdmissionBanner';

const Admission = () => {
    return (
        <div>
            <AdmissionBanner></AdmissionBanner>
            <ApplicationProcess></ApplicationProcess>
            <AnnulTution></AnnulTution>
            <Financial></Financial>
        </div>
    );
};

export default Admission;