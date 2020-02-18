import React from "react";

class ModalAuth extends React.Component {
    state = {
        login: "",
        password: ""
    };

    authUser = () => {
        let {login, password} = this.state;
        this.props.onSendLoginUser(login, password);
    };

    handleChange = e => {
        let classNameInput = e.target.className;
        let valueInput = e.target.value;

        if (classNameInput === "modal-body-input-login") {
            this.setState({login: valueInput});
        } else {
            this.setState({password: valueInput});
        }
    };

    render() {
        return (
            <div
                className="modal fade modal-auth"
                id="modal-auth"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                data-backdrop="static"
                data-keyboard="false"
            >
                <div className="modal-dialog modal-auth-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                <span className="span-aria-hidden" aria-hidden="true">
                  &times;
                </span>
                            </button>
                            <div className="modal-body modal-auth-body">
                                <div className="modal-body-header">
                                    <h1>Authorize</h1>
                                </div>
                                <div className="modal-body-input-form">
                                    <input
                                        onChange={this.handleChange}
                                        className="modal-body-input-login"
                                        placeholder="Login"
                                        type="text"
                                    />
                                    <input
                                        onChange={this.handleChange}
                                        className="modal-body-input-password"
                                        placeholder="Password"
                                        type="password"
                                    />
                                </div>
                                <div className="modal-body-button-form">
                                    <button className="auth-button" onClick={this.authUser}>
                                        Ok
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalAuth;
