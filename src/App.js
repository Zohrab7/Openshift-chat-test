import React, {Component} from 'react';
import './App.css';
import './Chat.css';
import {Route, withRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import io from "socket.io-client";
import {Login} from "./Login";
import {Chat} from "./Chat";


const socketURL = "http://localhost:8080/";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            body: "",
            socket: null,
            messages: []
        }
    }

    changer = event => {
        switch (event.target.name) {
            case "username":
                this.setState({username: event.target.value});
                break;
            case "password":
                this.setState({password: event.target.value});
                break;
            case "body":
                this.setState({body: event.target.value});
                break;
        }
    };
    initSocket = () => {
        const socket = io.connect(socketURL);
        socket.on('connect', function () {
            console.log("Socket.io connected on a Client");
        });
        this.setState({socket});
    };

    componentWillMount() {
        this.initSocket();
    };

    componentDidMount() {
        let $ = this;
        let {socket} = this.state;
        socket.on("msg", message => {
            $.setState({messages: [message, ...$.state.messages]});
            console.log($.state.messages);
        });

    }

    handleSubmitbyKey = event => {
        const body = event.target.value;
        if (event.keyCode === 13) {
            if (body) {
                if (this.state.username !== "") {
                    const message = {
                        body,
                        user: this.state.username
                    };
                    console.log(message);
                    // this.setState({messages: [message, ...this.state.messages]});
                    this.state.socket.emit('msg', message);
                    event.target.value = "";
                    this.setState({body: ""});
                }
                else {
                    this.props.history.push("/");
                }
            } else {
                alert("text field mustn't be empty")
            }
        }
    };
    handleSubmitbyClick = () => {
        let {body} = this.state;
        if (body) {
            if (this.state.username !== "") {
                const message = {
                    body,
                    user: this.state.username
                };
                this.state.socket.emit('msg', message);
                this.setState({body: ""});
                console.log(message);
            }
            else {
                this.props.history.push("/");
            }
        }
        else {
            alert("text field mustn't be empty")
        }
    };

    render() {
        return (
            <section className="App container">
                <Route
                    exact path="/"
                    render={
                        () => <Login
                            changer={this.changer}
                            username={this.state.username}
                            password={this.state.password}
                        />
                    }/>
                <Route
                    path="/chat"
                    render={
                        () => <Chat
                            body={this.state.body}
                            changer={this.changer}
                            handleSubmitbyKey={this.handleSubmitbyKey}
                            handleSubmitbyClick={this.handleSubmitbyClick}
                            chatData={this.state.messages}
                        />
                    }/>
            </section>
        );
    }
}

export default withRouter(App);
