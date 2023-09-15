import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
}
function ModalOverLay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const portalOverlays = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalOverlays
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalOverlays
      )}
    </Fragment>
  );
}
export default Modal;
