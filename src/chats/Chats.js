import React, {Component} from 'react';
import './Chats.scss';
import ChatBox from './ChatBox';
import ChatRoomList from "./ChatRoomList";


class Chats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChatBox: false,
      chatRoomNumber: 0
    };
  }


  openChatBox = (roomNumber) => {
    this.setState({showChatBox: true, chatRoomNumber: roomNumber});
  };

  closeChatBox = () => {
    this.setState({showChatBox: false});
  };

  render() {
    return (
      <main id="contents">
        {this.state.showChatBox ?
          <ChatBox chatRoomNumber={this.state.chatRoomNumber} closeChatBox={this.closeChatBox} />
          : null
        }
        <ChatRoomList openChatBox={this.openChatBox}/>
      </main>
    )
  }
}

export default Chats;
