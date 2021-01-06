import React from 'react';
import ReactDOM from 'react-dom';

class Book extends React.Component{
    constructor(props){
        super(props); /*ссылка на родительский класс*/
        this.state = {selected: false}; /*начальное свойство компанента*/
        this.handleClick = this.handleClick.bind(this); /*Связываем реальный this c нашим методом*/
    }
    
      handleClick(e){          /*метод  обработчика событий OnClick, e - событие*/
        e.preventDefault();    /*отменили действие по умолчанию*/
        console.log(this, e); /*проверяем на что указываеи this и событие*/
    }
    
render(){
const price = this.props.price ? <strong>{this.props.price
}</strong> : <del>&nbsp;</del>;
    
 const selected = this.state.selected;
    
return <div className={'book' + (selected ?
'book-selected' : 'book-default')} >
<h3>{this.props['title']}</h3>
<img src={'http://placehold.it/100x120?text='+this.
props['title']} />
<p>Автор: {this.props['author']}</p>
<p>Цена: {price}</p>
<div>
    <a href='#' onClick={this.handleClick}> 
     Сравнить</a>&nbsp;   
    <a href='#'>
     В корзину</a>   
    
</div>
</div
> ;
    }
}

export default Book;