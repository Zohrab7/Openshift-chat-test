import React, {Component} from 'react';

export class Chat extends Component {
    render() {
        const messages=this.props.chatData.map((message,index)=>{
            console.log("client Data : ",message);
            return (
                <section key={index} className="chatbox">
                    <section className="h-75 chat-msg">{message.body.body}</section>
                    <section className="h-25 chat-usr d-flex justify-content-end align-items-end"><b>{message.body.user}</b></section>
                </section>
            );
        });
        return (
            <section className="chat-container">
                <header className="text-center w-100 d-flex align-items-center justify-content-center">
                    <p>Chat Test by Zohrab</p></header>
                <aside className="container">
                    {messages}
                </aside>
                <main className="chat-area w-100">
                    <section className="triangle-container2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 752 752" width="752" height="752"
                             className="triangle">
                            <path id="Triangle" className="shp0" d="M0.59,0.46v750.03l750.41,0.52z"/>
                        </svg>
                    </section>
                    <section className="bottom-box"></section>
                </main>
                <footer className="input-area w-100">
                    <section className="btn-area d-flex align-items-end justify-content-end">
                        <button className="d-flex justify-content-center align-items-center chat-button" onClick={this.props.handleSubmitbyClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 33" width="42" height="33">
                                <path id="Icon - Send" className="shp2" d="M1,32l40,-16l-40,-16v13h8v6h-8z"/>
                            </svg>
                        </button>
                    </section>
                    <section className="chat-input w-100 d-flex align-items-center">
                        <section className="chat-text">
                            <input className="text-place" name="body" type="text" placeholder="Type message. . ." value={this.props.body} onChange={this.props.changer}  onKeyUp={this.props.handleSubmitbyKey}/>
                        </section>
                    </section>
                </footer>
            </section>
        );
    }
}