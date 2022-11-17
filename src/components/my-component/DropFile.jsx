import './Ap.css';

import DropFileInput from './DropFileInput';

function DropFile() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className="box" style={{background: "white"}}>
            {/* <h2 className="header">
                React drop files input
            </h2> */}
            <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
        </div>
    );
}

export default DropFile;