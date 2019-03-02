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
        outline: "none",
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

const star = (
    <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.22433 0.777843L9.91614 4.20588C10.0338 4.4443 10.2613 4.60951 10.5244 4.64768L14.3076 5.19743C14.9703 5.2938 15.2347 6.10794 14.7553 6.57509L12.0178 9.24343C11.8276 9.42897 11.7406 9.69649 11.7857 9.95838L12.4318 13.7262C12.545 14.3861 11.8523 14.8892 11.2597 14.5779L7.87609 12.7991C7.64079 12.6755 7.3595 12.6755 7.12421 12.7991L3.74061 14.5779C3.14799 14.8895 2.45525 14.3861 2.56852 13.7262L3.21464 9.95838C3.25969 9.69649 3.17271 9.42897 2.98247 9.24343L0.244986 6.57509C-0.234363 6.10763 0.03003 5.29349 0.692733 5.19743L4.4759 4.64768C4.73904 4.60951 4.96651 4.4443 5.08416 4.20588L6.77596 0.777843C7.07196 0.177405 7.92803 0.177405 8.22433 0.777843Z"
            fill="#ED8A19"
        />
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
                    <span className="modalTopSpan">
                        {"Colruyt"}
                        <span className="stars">
                            {star}
                            {star}
                            {star}
                        </span>
                        <button onClick={this.props.closeModal}>
                            {closeBtn}
                        </button>
                    </span>

                    <hr className="hr" />
                </Modal>
            </>
        );
    }
}
