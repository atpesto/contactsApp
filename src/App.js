import React, { Component } from 'react';

class ContactsItem extends Component {
  onDeleteHandler = (userID, event) => {
    console.log(userID);
    this.props.onDeleteCallback(userID);
  }

  render(){
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img alt={this.props.name} src="http://via.placeholder.com/350x150" />
        <div>{this.props.name}</div>
        <button data-id={this.props.userID} onClick={() => this.onDeleteHandler(this.props.userID)}>Delete</button>
      </div>
    )
  }
}

class ContactsList extends Component {
  state = {
    contacts: [
      {
        id: '1',
        name: 'Nikhil',
      },
      {
        id: '2',
        name: 'Random Name',
      },
      {
        id: '3',
        name: 'Random Name 2',
      }
    ]
  }

  onDeleteCallbackHandler = (id, event) => {
    this.setState(previousState => ({
        contacts: previousState.contacts.filter(item => item.id !== id)
      }));
  }

  render() {
    return (
      <div>
        {
          this.state.contacts.map((contact) => (
            <ContactsItem key={contact.id} userID={contact.id} name={contact.name} onDeleteCallback={this.onDeleteCallbackHandler}/>
          ))
        }
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 style={{ textAlign: 'center' }}>This is a Contacts App</h2>
        <ContactsList />
      </div>
    );
  }
}

export default App;
