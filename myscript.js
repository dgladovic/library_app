let myLibrary = [
{title: "mala nocna muzika",
 author: "mozzart",
 pages: 25,
 read: "jesam"},
 {title: "pederi"

 }

];

const tijelo = document.querySelector('body');
const toggle = document.querySelector('.user_input');

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){

  let naslov = document.querySelector('#title');
  let autor = document.querySelector('#author');
  let broj = document.querySelector('#pages');
  let citanje = document.querySelector('input[name="read"]:checked');

  let djokic = new Book(naslov.value,autor.value,broj.value,citanje.value);
  
  toggle.style.display = 'none';
  toggle.style.visibility = 'hidden';
  return myLibrary.push(djokic);

    
}

function carousell(){
    myLibrary.forEach( (book) => {
        const kartica = document.createElement('div');
        kartica.style.width = '400px';
        for (key in book){
            const title = document.createElement('p');
            title.style.width = '60px';
            title.style.display = "inline-block"

            const tekst = document.createElement('p');
            tekst.style.fontSize = '18px';
            tekst.style.margin = '2px';
            tekst.style.display = "inline-block"


            title.style.fontSize = '18px';
            title.style.margin = '2px';


            switch(key){
                case 'title': 
                    title.textContent = "Title: ";
                    tekst.textContent = book[key];
                    break;
                case 'author':
                    title.textContent = "Author: ";
                    tekst.textContent = book[key];
                    break;
                case 'pages':
                    title.textContent = "Pages: ";
                    tekst.textContent = book[key];
                    break;
                case 'read':
                    title.textContent = "Status: ";
                    tekst.textContent = book[key];
                    break;
            }

            kartica.appendChild(title);
            kartica.appendChild(tekst);
        }
        tijelo.appendChild(kartica);
        
    })
}

function dodaj(){

    toggle.style.display = 'block';
    toggle.style.visibility = 'visible';


}

