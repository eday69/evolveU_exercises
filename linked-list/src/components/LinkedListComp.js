import React, { Component } from 'react';
import ll from './LinkedList';

class LinkedListComp extends Component {
  constructor(props) {
      super(props)
      this.state  = {
          linkedlist: null,
          pointer: null
      }
      this.btn_newList = this.btn_newList.bind(this);
      this.btn_newNode = this.btn_newNode.bind(this);
      this.btn_showList = this.btn_showList.bind(this);
      this.btn_firstOnList = this.btn_firstOnList.bind(this);
      this.btn_nextOnList = this.btn_nextOnList.bind(this);
      this.btn_insertOnList = this.btn_insertOnList.bind(this);
//      this.btn_deleteOnList = this.btn_deleteOnList.bind(this);
  }

  btn_firstOnList() {
      let newPtr = this.state.linkedlist.firstNode();
      this.setState({
          pointer: newPtr
      })
      let container = document.getElementById('resultContainer');
      container.innerHTML = `pointer--><div class='myNode'>${this.state.linkedlist.show(newPtr)}</div>`;
  }

  btn_nextOnList() {
      let newPtr = this.state.linkedlist.nextNode(this.state.pointer);
      console.log(newPtr);
      this.setState({
          pointer: newPtr
      })
      if (this.state.pointer) {
          let container = document.getElementById('resultContainer');
//          container.textContent = this.state.linkedlist.show(newPtr);
          container.innerHTML = `pointer--><div class='myNode'>${this.state.linkedlist.show(newPtr)}</div>`;
      }
  }

  btn_insertOnList() {
      let subject = document.getElementById('subject');
      let amount = document.getElementById('amount');
      this.state.linkedlist.insertNode(this.state.pointer, subject.value, amount.value);
      subject.value = '';
      amount.value = '';
  }

  btn_newList() {
      let subject = document.getElementById('subject');
      let amount = document.getElementById('amount');
      this.setState({
          linkedlist: new ll.LinkedList(subject.value, amount.value)
      })
      subject.value = '';
      amount.value = '';
  }

  btn_newNode() {
      let subject = document.getElementById('subject');
      let amount = document.getElementById('amount');
      this.state.linkedlist.add(subject.value, amount.value);
      subject.value = '';
      amount.value = '';
  }

  btn_showList() {
      let container = document.getElementById('resultContainer');
      container.innerHTML = this.state.linkedlist.showAll();
  }

  render() {
    return (
      <div className="LinkedList">
        <h2>Hello Master. <br />What is your command?</h2><br />
        <button id='newList' onClick={ this.btn_newList }>New List</button>
        <button id='newNode' onClick={ this.btn_newNode }>New Node</button>
        <br /> <br />
        <input type="text" alt="input list inicial value" size="15" id="subject" placeholder="Subject" />
        <input type="text" alt="input node value" size="15" id="amount" placeholder="Amount" />
        <br /> <br />
        <button id='firstOnList' onClick={ this.btn_firstOnList }>First</button>
        <button id='nextOnList' onClick={ this.btn_nextOnList }>Next</button>
        <button id='insertOnList' onClick={ this.btn_insertOnList }>Insert</button>
        <button id='deleteOnList' onClick={ this.btn_deleteOnList }>Delete</button>
        <button id='displayList' onClick={ this.btn_showList }>Display List</button>
        <br /> <br />
        <div className='nodeContainer' id='resultContainer'>{`---->This is where we would display our linked list<------`}</div>
      </div>
    );
  }

}

export default LinkedListComp;
