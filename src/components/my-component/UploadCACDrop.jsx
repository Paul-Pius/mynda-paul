import './Ap.css';

import UploadCACert from './UploadCAC';

function UploadCAC() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className="box" style={{background: "white"}}>
            {/* <h2 className="header">
                React drop files input
            </h2> */}
            <UploadCACert
                onFileChange={(files) => onFileChange(files)}
            />
        </div>
    );
}

export default UploadCAC;