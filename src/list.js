import React from "react"
import { Link } from "react-router-dom"
import './index.css';

function getitems() {
  const table2 = document.getElementById("table1");
  table2.innerHTML = ''
  for (var i = 0; i < localStorage.length; i++) {
    let list_items = localStorage.getItem(localStorage.key(i))
    console.log(list_items)
    var items_array = list_items.split(",")
    const table1 = document.getElementById("table1");

    table1.innerHTML += `<tr><td>${items_array[0]}</td><td>${items_array[1]}</td><td>${items_array[2]}</td></tr>`;


    //let newtr = document.createElement('tr')
    //newtr.innerHTML = '<tr>' + '<td>' + list_items[0] + '</td>' + '<td>' + list_items[1] + '</td>' + '<td>' + list_items[2] + '</td>' + '</tr>'
    //document.getElementById('table1').appendChild(newtr)
  }
}

function gettreks() {
  const table2 = document.getElementById("table1");
  table2.innerHTML = ''
  for (var i = 0; i < localStorage.length; i++) {
    let list_items = localStorage.getItem(localStorage.key(i))
    console.log(list_items)
    var items_array = list_items.split(",")

    if (items_array[2] == "Trek") {
      const table1 = document.getElementById("table1");
      table1.innerHTML += `<tr><td>${items_array[0]}</td><td>${items_array[1]}</td><td>${items_array[2]}</td></tr>`;
    }
    


    //let newtr = document.createElement('tr')
    //newtr.innerHTML = '<tr>' + '<td>' + list_items[0] + '</td>' + '<td>' + list_items[1] + '</td>' + '<td>' + list_items[2] + '</td>' + '</tr>'
    //document.getElementById('table1').appendChild(newtr)
  }
}

function getclubs() {
  const table2 = document.getElementById("table1");
  table2.innerHTML = ''
  for (var i = 0; i < localStorage.length; i++) {
    let list_items = localStorage.getItem(localStorage.key(i))
    console.log(list_items)
    var items_array = list_items.split(",")

    if (items_array[2] == "Club") {
      const table1 = document.getElementById("table1");
      table1.innerHTML += `<tr><td>${items_array[0]}</td><td>${items_array[1]}</td><td>${items_array[2]}</td></tr>`;
    }
    


    //let newtr = document.createElement('tr')
    //newtr.innerHTML = '<tr>' + '<td>' + list_items[0] + '</td>' + '<td>' + list_items[1] + '</td>' + '<td>' + list_items[2] + '</td>' + '</tr>'
    //document.getElementById('table1').appendChild(newtr)
  }
}

function gettropics() {
  const table2 = document.getElementById("table1");
  table2.innerHTML = ''
  for (var i = 0; i < localStorage.length; i++) {
    let list_items = localStorage.getItem(localStorage.key(i))
    console.log(list_items)
    var items_array = list_items.split(",")

    if (items_array[2] == "Tropic") {
      const table1 = document.getElementById("table1");
      table1.innerHTML += `<tr><td>${items_array[0]}</td><td>${items_array[1]}</td><td>${items_array[2]}</td></tr>`;
    }
    


    //let newtr = document.createElement('tr')
    //newtr.innerHTML = '<tr>' + '<td>' + list_items[0] + '</td>' + '<td>' + list_items[1] + '</td>' + '<td>' + list_items[2] + '</td>' + '</tr>'
    //document.getElementById('table1').appendChild(newtr)
  }
}

let deletealldata = () => {
  localStorage.clear()
  window.location.reload();
}


class List extends React.Component {
  
    render() {
      
      return <>
        <div className="container">
        <div className="side-pane">
            <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="icons"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"/></svg></Link><br></br><br></br><br></br>
            <Link to='/addtrip'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="icons"><path d="M96 32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32zM448 464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192H448V464zM200 272V328H144C130.7 328 120 338.7 120 352C120 365.3 130.7 376 144 376H200V432C200 445.3 210.7 456 224 456C237.3 456 248 445.3 248 432V376H304C317.3 376 328 365.3 328 352C328 338.7 317.3 328 304 328H248V272C248 258.7 237.3 248 224 248C210.7 248 200 258.7 200 272z"/></svg></Link><br></br><br></br><br></br>
            <Link to='/triplist'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="icons"><path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z"/></svg></Link><br></br><br></br><br></br>
        </div>
        <div className="main-pane">
            <div className="above-pane1">
                <span className="text3">List of Trips</span>
            </div>
            <div className="below-pane1">
                <table className="table1">
                  <tr>
                    <th>Date</th>
                    <th>Place</th>
                    <th>Type</th>
                  </tr>
                </table>
                <table id="table1" className="table1">
                  
                </table>
                <br></br><br></br>
                Filter By: &nbsp;
                <button onClick={getitems}>All</button>
                <button onClick={gettreks}>Treks</button>
                <button onClick={getclubs}>Clubs</button>
                <button onClick={gettropics}>Tropics</button>
                <br></br><br></br>
                <button onClick={deletealldata}>Delete All Trips</button>
            </div>
        </div>
      </div>
      </> 
    }
}

export {List}