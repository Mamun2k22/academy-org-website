import AdmissionPage from './admissionPage';
import ApplicationProcess from './ApplicationProcess';
import AnnulTution from './AnnulTution';
import Financial from './Financial';

const Admission = () => {
    return (
        <div>
            <ApplicationProcess></ApplicationProcess>
            <AnnulTution></AnnulTution>
            <Financial></Financial>
        </div>
    );
};

export default Admission;