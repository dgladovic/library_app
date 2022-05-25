let myLibrary = [
{title: "mala nocna muzika",
 author: "mozzart",
 pages: 25,
 read: "jesam"}
];

const tijelo = document.querySelector('body');
const toggle = document.querySelector('.user_input');

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.changer = function(){
    if(this.read == true){
        this.read = false;
    }
    else{
        this.read = true;
    }
}

function addBookToLibrary(){

  let naslov = document.querySelector('#title');
  let autor = document.querySelector('#author');
  let broj = document.querySelector('#pages');
  let citanje = document.querySelector('input[name="read"]:checked');

  let djokic = new Book(naslov.value,autor.value,broj.value,citanje.value);
  
  toggle.style.display = 'none';
  toggle.style.visibility = 'hidden';
  myLibrary.push(djokic);
  carousell();
    
}

function carousell(){
    myLibrary.forEach( (book,ind) => {
        const test = document.querySelector(`.card-${ind}`);
        if(test){
        }else{
            const kartica = document.createElement('div');
            kartica.classList.add(`card-${ind}`);
            kartica.setAttribute('id','rokaj');
            
            const switchfield = document.createElement('div');
            switchfield.classList.add("togel");
            switchfield.style.height = '30px';

            const tgllab = document.createElement('label');
            const tgl_btn = document.createElement('input');
            const tgl_text = document.createElement('span');

            tgllab.setAttribute('class','switch');
            tgl_btn.setAttribute('type','checkbox');
            tgl_text.setAttribute('class','slider round');

            tgllab.appendChild(tgl_btn);
            tgllab.appendChild(tgl_text);

            switchfield.appendChild(tgllab);
            kartica.appendChild(switchfield);
            
            for (key in book){
                const small_field = document.createElement('div');
                const title = document.createElement('p');

                small_field.style.height = '30px';
                
                title.style.width = '60px';
                title.style.display = "inline-block"

                const tekst = document.createElement('p');
                tekst.style.fontSize = '18px';
                tekst.style.margin = '2px';
                tekst.style.width = "210px";

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
                small_field.appendChild(title);
                small_field.appendChild(tekst);
                kartica.appendChild(small_field);
                if(key == 'changer'){
                    small_field.remove();
                }
            }
            const rmv_button = document.createElement('button');
            rmv_button.setAttribute('id','brisime');
            rmv_button.type = 'button';
            rmv_button.onclick = function(){
                myLibrary.splice(ind);
                kartica.remove();
            }
            rmv_button.textContent = 'Remove';
    
            kartica.appendChild(rmv_button);
            tijelo.appendChild(kartica);
        }
    })

}

const muljanje = document.querySelectorAll('.switch')
    muljanje.forEach( (prek) =>{
        prek.addEventListener('click',console.log(prek));
        }
    );

function dodaj(){
    toggle.style.display = 'block';
    toggle.style.visibility = 'visible';
}

