import React, { useState } from "react";
import "./Terms.css";


function TermsCondition() {

    const [click, setClick] = useState(false);
    const [click2, setClick2] = useState(false);
    const [showVisibilty, setShowVisibility] = useState(null)

    const Background = () => {
        setClick(true)
        setClick2(!true)
        setShowVisibility('visible')
    }

    const Background2 = () => {
        setClick2(true)
        setClick(!true)
        setShowVisibility('visible')
    }

    return (
        <div className="container-terms" style={{
            display: "flex", 
            position: "relative", 
            justifyContent: "space-between",
            }}>
                <form className="fom-terms">
                    <div style={{display: "flex", 
                    justifyContent: "space-between", 
                    padding: "0.5rem 0.5rem", 
                    paddingRight: "1.6rem", 

                    border: "1px solid",
                    marginTop: "4rem",
                    width: "90%",
                    marginLeft: "1.2rem",
                    borderRadius: "5px",
                    }}>

                        <div style={{paddingLeft: "0.5rem"}}>
                            { click ? <div className= "first" style={{
                                cursor: "pointer",
                                background: "#F3F5F7",
                                color: "#204ECF", 
                                borderRadius: "30px",
                                padding: ".3rem .5rem",
                                transition: "0.7s"
                                }} onClick={Background}>
                                <p>Terms of Service</p>
                            </div> : <div style={{
                                cursor: "pointer"
                                }} onClick={Background}>
                                <p>Terms of Service</p>
                            </div>
                            }
                        </div>

                        
                        <div style={{marginRight: "-0.5rem"}}>
                            { click2 ? <div className="second" style={{
                                cursor: "pointer",
                                background: "#F3F5F7",
                                color: "#204ECF",
                                borderRadius: "30px",
                                padding: ".3rem .5rem",
                                transition: "0.7s"
                                }} onClick={Background2}>
                                <p className="privacy" style={{}}>Privacy and Policy</p>
                            </div> : <div style={{
                                cursor: "pointer"
                                }} onClick={Background2}>
                                <p>Privacy and Policy</p>
                            </div>
                            }
                        </div>

                    </div>

                    { click ?

                        <div style={{visibility: showVisibilty}}>
                            <p style={{paddingLeft: "1.2rem", paddingRight: "1.2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                            Quis in amet interdum velit proin tincidunt donec purus lobortis. Enim molestie amet imperdiet<br/> 
                            elementum bibendum a. Dictum netus tincidunt at vitae varius id faucibus faucibus. Suspendisse<br/> 
                            posuere massa in fames habitasse adipiscing dapibus etiam. Nunc urna vulputate at sagittis maecenas<br/> 
                            amet interdum. Non urna nunc quisque eu diam est. Consequat, enim auctor massa nunc est. Nunc ullamcorper<br/>
                            in nullam hendrerit cursus. Nulla orci, lacus, ut pharetra orci ut tincidunt mauris.<br/>
                            Risus tempor, leo morbi venenatis aenean habitant suscipit pellentesque orci. At vitae morbi quis facilisis<br/> 
                            egestas ligula sapien.<br/>
                            Feugiat vel sed ipsum ornare bibendum volutpat metus. Dolor viverra ornare nibh aliquet turpis. Nec, scelerisque<br/> 
                            ultricies in ac nunc.<br/> 
                            Dictum aenean scelerisque non aenean leo enim nisl sed nisl. Cras nunc quis volutpat sed mauris.</p>
                        </div> : null
                    }

                    { !click ?

                        <div style={{visibility: showVisibilty}}>
                            <p style={{paddingLeft: "1.2rem", paddingRight: "1.2rem"}}>Privacy and Policy</p>
                        </div> : null
                    }

                </form>
        </div>
    )
}

export default TermsCondition;