import React, {useState} from "react";

function AlertPassword(props) {

    const [visible, setVisible] = useState(true);

    const onCloseButtonClick = () => {
        setVisible(false);
        props.closeAlert();
    }

    return (
        <div>
            {visible && (
                <div className="alert alert-danger alert-dismissible fade show" style={{fontFamily: "sans-serif"}}>
                    <div className="alert-heading">
                        <h4>Attenzione</h4>
                        <hr/>
                        <p>Hai inserito una password non valida</p>
                        <button type="button" className="btn-close" onClick={onCloseButtonClick}/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AlertPassword;