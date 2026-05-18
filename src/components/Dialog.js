
function Dialog (props) {
    return(
        <div className="dialog">
            <button className="dialog-btn" onClick={props.dial}>
                Open Dialog
            </button>
            <div className={`${props.show? 'grid' : 'none'}`}>
                <div className="write">
                    <button className="close-div" onClick={props.undial}>X</button>
                    <h1 className="target">This is my dialog box</h1>
                    <h3>{props.remark[props.stars] === ""? "You haven't rated us yet" : `You rated us ${props.remark[props.stars]}`}</h3>
                </div>
            </div>
        </div>
    );
}

export default Dialog;