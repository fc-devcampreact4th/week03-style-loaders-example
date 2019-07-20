import React from "react";

import styles from "./Button.module.css";

export default class Button extends React.Component {
    state = {
        loading: false
    };
    render() {
        const { loading } = this.state;
        return (
            <button
                className={
                    loading
                        ? `${styles.button} ${styles.loading}`
                        : styles.button
                }
                {...this.props}
                onClick={this._startLoading}
            />
        );
    }

    _startLoading = () => {
        console.log("start loaing");
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 1000);
    };
}
