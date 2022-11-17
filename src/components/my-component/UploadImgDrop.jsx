import './UploadDrop.css';

import UploadImg from './UploadImg';

function UploadImgDrop() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (

        <div className='maindrop'>
            <div className="box" style={{background: "white"}}>
                {/* <h2 className="header">
                    React drop files input
                </h2> */}
                <UploadImg
                    onFileChange={(files) => onFileChange(files)}
                />
            </div>
        </div>
    );
}

export default UploadImgDrop;