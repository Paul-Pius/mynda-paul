import './Ap.css';

import PersonalDetailsUpload from './PersonalDetailsUpload';

function PersonalDetailsDrop() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className="box" style={{background: "white"}}>
            {/* <h2 className="header">
                React drop files input
            </h2> */}
            <PersonalDetailsUpload
                onFileChange={(files) => onFileChange(files)}
            />
        </div>
    );
}

export default PersonalDetailsDrop;