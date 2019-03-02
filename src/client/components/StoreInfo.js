import React from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "30%",
        left: "55%",
        right: "25%",
        bottom: "auto",
        width: "30%",
        height: "40%",
        position: "relative",
        backgroundColor: "rgba(37, 26, 68, 0.84)",
        borderRadius: "20px",
    },
};

const closeBtn = (
    <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.5 0C5.60769 0 0 5.60721 0 12.5C0 19.3928 5.60769 25 12.5 25C19.3923 25 25 19.3928 25 12.5C25 5.60721 19.3923 0 12.5 0ZM12.5 24.0385C6.13798 24.0385 0.961538 18.862 0.961538 12.5C0.961538 6.13798 6.13798 0.961538 12.5 0.961538C18.862 0.961538 24.0385 6.13798 24.0385 12.5C24.0385 18.862 18.862 24.0385 12.5 24.0385Z"
            fill="#ED8A19"
        />
        <svg
            width="11"
            height="11"
            // viewBox="0 0 11 11"
            transform="translate(-25, 0)"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.1668 0.83317C9.97886 0.645189 9.67501 0.645189 9.48703 0.83317L5.50001 4.82019L1.51299 0.83317C1.32501 0.645189 1.02117 0.645189 0.833185 0.83317C0.645205 1.02115 0.645205 1.325 0.833185 1.51298L4.82021 5.5L0.833185 9.48702C0.645205 9.675 0.645205 9.97884 0.833185 10.1668C0.926935 10.2606 1.05001 10.3077 1.17309 10.3077C1.29617 10.3077 1.41924 10.2606 1.51299 10.1668L5.50001 6.1798L9.48703 10.1668C9.58078 10.2606 9.70386 10.3077 9.82693 10.3077C9.95001 10.3077 10.0731 10.2606 10.1668 10.1668C10.3548 9.97884 10.3548 9.675 10.1668 9.48702L6.17982 5.5L10.1668 1.51298C10.3548 1.325 10.3548 1.02115 10.1668 0.83317Z"
                fill="#ED8A19"
            />
        </svg>
    </svg>
);

Modal.setAppElement("#app");

export default class StoreInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Modal
                    isOpen={this.props.modalIsOpen}
                    className="modal"
                    style={customStyles}>
                    <button
                        className="closeBtn"
                        onClick={this.props.closeModal}>
                        {closeBtn}
                    </button>
                </Modal>
            </>
        );
    }
}
