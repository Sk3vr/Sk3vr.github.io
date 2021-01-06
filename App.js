import React,{Component} from 'react';      /*ссылка на React, компоненты с помощью деструктуризацией */
import '../styles/App.css';                 /*импортировали стили*/
import Book from './Book.js';

class App extends React.Component{

render(){ 
let dataBook = this.props.dataBook;
let books = [];
for (let i in dataBook){
    let book = (
    <Book
    key={i}
    title={dataBook[i]['title']}
    price={dataBook[i]['price']}
    author={dataBook[i]['author']}
     />
    );
    books.push(book);
}
    return books;
}

}

export default App;                       /*компонентный подход для использования содержимого в других местах*/