import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./MultiSelect.css";


function Multi() {


    const [check, setCheck] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [check6, setCheck6] = useState(false);
    const [check7, setCheck7] = useState(false);
    const [check8, setCheck8] = useState(false);


    const MyCheck = () => {
        setCheck(!check)
    }

    const MyCheck1 = () => {
        setCheck1(!check1)
    }

    const MyCheck2 = () => {
        setCheck2(!check2)
    }
    const MyCheck3 = () => {
        setCheck3(!check3)
    }
    const MyCheck4 = () => {
        setCheck4(!check4)
    }

    const MyCheck5 = () => {
        setCheck5(!check5)
    }

    const MyCheck6 = () => {
        setCheck6(!check6)
    }

    const MyCheck7 = () => {
        setCheck7(!check7)
    }

    const MyCheck8 = () => {
        setCheck8(!check8)
    }

    return (
        <div className="container-multiselect">

            <div className="btns">

                {
                    check ? <div className="mais" style={{borderColor: '#204ECF', transition: "all 1s ease-in-out" }}
                    ><p className="mai" onClick={MyCheck}>{check && <FontAwesomeIcon style={{ color: '#204ECF'}} icon={faCheck}></FontAwesomeIcon>}{check ? <span style={{color: '#204ECF', fontSize: ""}}>Maid/Helper</span> : <span style={{fontSize: ""}}>Maid/Helper</span>}
                    </p>
                    </div> : <div className="mais"
                    ><p className="mai" onClick={MyCheck}>{check && <FontAwesomeIcon style={{ color: 'g#204ECF' }} icon={faCheck}></FontAwesomeIcon>}{check ? <span style={{ color: '#204ECF', fontSize: "" }}>Maid/Helper</span> : <span style={{fontSize: ""}}>Maid/Helper</span>}
                    </p>
                    </div>

                }


                {
                    check1 ? <div className="cook" style={{borderColor: "#204ECF"}}
                    ><p className="coo" onClick={MyCheck1}>{check1 && <FontAwesomeIcon style={{color: "#204ECF"}}icon={faCheck}></FontAwesomeIcon>}{check1 ? <span style={{color: "#204ECF", fontSize: ""}}>Cooks</span> : <span style={{fontSize: ""}}>Cooks</span>}
                    </p>
                    </div> : <div className="cook"
                    ><p className="coo" onClick={MyCheck1}>{check1 && <FontAwesomeIcon style={{color: "#204ECF"}}icon={faCheck}></FontAwesomeIcon>}{check1 ? <span style={{color: "#204ECF", fontSize: ""}}>Cooks</span> : <span style={{fontSize: ""}}>Cooks</span>}
                    </p>
                    </div>
                }
                

                {
                    check2 ? <div className="nursing" style={{borderColor: "#204ECF"}}
                    ><p className="nurse" onClick={MyCheck2}>{check2 && <FontAwesomeIcon style={{color: "#204ECF"}}icon={faCheck}></FontAwesomeIcon>}{check2 ? <pan style={{color: "#204ECF"}}>Nursing</pan> : <pan>Nursing</pan>}</p>
                    </div> : <div className="nursing"
                    ><p className="nurse" onClick={MyCheck2}>{check2 && <FontAwesomeIcon style={{color: "#204ECF"}}icon={faCheck}></FontAwesomeIcon>}{check2 ? <pan style={{color: "#204ECF"}}>Nursing</pan> : <pan>Nursing</pan>}</p>
                    </div>
                }
                

                {
                    check3 ? <div className="drivers" style={{borderColor: "#204ECF"}}
                    ><p className="drive" onClick={MyCheck3}>{check3 && <FontAwesomeIcon style={{color: "#204ECF"}} icon={faCheck}></FontAwesomeIcon>}{check3 ? <pan style={{color: "#204ECF"}}>Drivers</pan> : <pan>Drivers</pan>}</p>
                    </div> : <div className="drivers"
                    ><p className="drive" onClick={MyCheck3}>{check3 && <FontAwesomeIcon style={{color: "#204ECF"}} icon={faCheck}></FontAwesomeIcon>}{check3 ? <pan style={{color: "#204ECF"}}>Drivers</pan> :  <pan>Drivers</pan>}</p>
                    </div>
                }


                {
                    check4 ? <div className="bouncers" style={{borderColor: "#204ECF"}}
                    ><p className="bounce" onClick={MyCheck4}>{check4 && <FontAwesomeIcon style={{color: "#204ECF"}} icon={faCheck}></FontAwesomeIcon>}{check4 ? <pan style={{color: "#204ECF"}}>Bouncers</pan> : <pan>Bouncers</pan>}</p>
                    </div> : <div className="bouncers"
                    ><p className="bounce" onClick={MyCheck4}>{check4 && <FontAwesomeIcon style={{color: "#204ECF"}} icon={faCheck}></FontAwesomeIcon>}{check4 ? <pan style={{color: "#204ECF"}}>Bouncers</pan> : <pan>Bouncers</pan>}</p>
                    </div>
                }
                

                {
                    check5 ? <div className="drycleaners" style={{borderColor: "#204ECF"}}
                    ><p className="dryclean" onClick={MyCheck5}>{check5 && <FontAwesomeIcon style={{color: "#204ECF"}} icon={faCheck}></FontAwesomeIcon>}{check5 ? <pan style={{color: "#204ECF"}}>Drycleaners</pan> : <pan>Drycleaners</pan>}</p>
                    </div> : <div className="drycleaners"
                    ><p className="dryclean" onClick={MyCheck5}>{check5 && <FontAwesomeIcon style={{color: "#204ECF"}} icon={faCheck}></FontAwesomeIcon>}{check5 ? <pan style={{color: "#204ECF"}}>Drycleaners</pan> : <pan>Drycleaners</pan>}</p>
                    </div>
                }
                

                {
                    check6 ?  <div className="bodyguards" style={{borderColor: "#204ECF"}}
                    ><p className="bodyguard" onClick={MyCheck6}>{check6 && <FontAwesomeIcon style={{color: "#204ECF"}} icon={faCheck}></FontAwesomeIcon>}{check6 ? <pan style={{color: "#204ECF"}}>Bodyguards</pan> : <pan>Bodyguards</pan>}</p>
                    </div> :  <div className="bodyguards"
                    ><p className="bodyguard" onClick={MyCheck6}>{check6 && <FontAwesomeIcon style={{color: "#204ECF"}} icon={faCheck}></FontAwesomeIcon>}{check6 ? <pan style={{color: "#204ECF"}}>Bodyguards</pan> : <pan>Bodyguards</pan>}</p>
                    </div>
                }
               

                {
                    check7 ? <div className="teachers" style={{borderColor: "#204ECF"}}
                    ><p className="teach" onClick={MyCheck7}>{check7 && <FontAwesomeIcon style={{color: "#204ECF"}} icon={faCheck}></FontAwesomeIcon>}{check7 ? <pan style={{color: "#204ECF"}}>Teachers</pan> : <pan>Teachers</pan>}</p>
                    </div> : <div className="teachers"
                    ><p className="teach" onClick={MyCheck7}>{check7 && <FontAwesomeIcon style={{color: "#204ECF"}} icon={faCheck}></FontAwesomeIcon>}{check7 ? <pan style={{color: "#204ECF"}}>Teachers</pan> : <pan>Teachers</pan>}</p>
                    </div>
                }
                

                {
                    check8 ? <div className="messengers" style={{borderColor: "#204ECF"}}
                    ><p className="message" onClick={MyCheck8}>{check8 && <FontAwesomeIcon style={{color: "#204ECF"}} icon={faCheck}></FontAwesomeIcon>}{check8 ? <pan style={{color: "#204ECF"}}>Messengers</pan> : <pan>Messengers</pan>}</p>
                    </div> : <div className="messengers"
                    ><p className="message" onClick={MyCheck8}>{check8 && <FontAwesomeIcon style={{color: "#204ECF"}} icon={faCheck}></FontAwesomeIcon>}{check8 ? <pan style={{color: "#204ECF"}}>Messengers</pan> : <pan>Messengers</pan>}</p>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default Multi;