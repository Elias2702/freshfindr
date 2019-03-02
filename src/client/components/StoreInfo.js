import React from "react";
import Modal from "react-modal";
import cross from "../ressources/icones/X.png";
import pathIcon from "../ressources/icones/path.png"

const customStyles = {
    content: {
        top: "30%",
        left: "55%",
        right: "25%",
        bottom: "auto",
        width: "30%",
        height: "auto",
        position: "relative",
        backgroundColor: "rgba(37, 26, 68, 0.84)",
        borderRadius: "20px",
        outline: "none",
        paddingBottom: "2rem;"
    },
};

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
                        <button
                            className="closeBtn"
                            onClick={this.props.closeModal}>
                            <img src={cross} />
                        </button>
                    </span>
                    <hr className="hr" />
                    <div className="addReview"> <span><h1 className="Topreview">{"Top review"}</h1> 
                  <p>{"Open"}</p><img src={pathIcon}/></span>

                  <form>
                      <textarea className="review_input"></textarea>
                  </form>
                  
                  <button className="addReview_button"> {"+"}</button>
                  </div>

                </Modal>
            </>
        );
    }
}
