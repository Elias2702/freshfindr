import React from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        position: "absolute",
        backgroundColor: "red",
    },
};

Modal.setAppElement(document.getElementById("app"));

export default class StoreInfo extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = "#f00";
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <Modal
                isOpen={true}
                className="modal"
                overlayClassName="Overlay"
                style={customStyles}
            />
        );
    }
}
