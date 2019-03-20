import React, { Component } from "react";
import { hot } from "react-hot-loader";

const Warning = React.lazy(() => import("./Warning"));

class App extends Component {
    state = {
        count: 0
    };

    render() {
        const { count } = this.state;

        return (
            <>
                <h1>Hello, World!</h1>
                <h2>Count is:{count}</h2>
                <button
                    onClick={() => {
                        this.setState(state => ({ count: state.count + 1 }));
                        this.setState(state => ({ count: state.count + 1 }));
                        this.setState(state => ({ count: state.count + 1 }));
                    }}
                >
                    ADD
                </button>
                <button
                    onClick={() =>
                        this.setState({
                            count: 0
                        })
                    }
                >
                    Set Count to zero
                </button>
                {count > 10 && (
                    <React.Suspense fallback={null}>
                        <Warning />
                    </React.Suspense>
                )}
            </>
        );
    }
}

export default hot(module)(App);
