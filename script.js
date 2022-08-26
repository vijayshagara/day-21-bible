//creating div:
let div = document.createElement('div')
div.setAttribute('class', 'searchButton')
div.style.textAlign = 'center'
// creating searching button:
let searchButton = document.createElement('button');
searchButton.innerHTML = 'search';
searchButton.setAttribute('type', 'submit');
searchButton.addEventListener('click', foo)
//creating search bar:
let inputText = document.createElement('input');
inputText.setAttribute('type', 'search');
inputText.setAttribute('id', 'number');
inputText.setAttribute('placeholder', 'ENTER NUMBER');
//creating book Name:
let bookName = document.createElement('div');
bookName.setAttribute('id', 'bookName');

//creating book Author:
let bookAuthor = document.createElement('div');
bookAuthor.setAttribute('id', 'bookAuthor');

//creating book verses:
let bookVerses = document.createElement('div');
bookVerses.setAttribute('id', 'bookVerses');

//appending:
div.append(inputText, searchButton, bookName, bookAuthor, bookVerses)
document.body.append(div)
//creating function:
async function foo() {
      let idCall = document.getElementById('number').value;
      let url = `https://www.abibliadigital.com.br/api/verses/nvi/sl/${idCall}Search`
      let sologan = await fetch(url);
      let sologan1 = await sologan.json();

      //looping:
      let a = sologan1.verses;
      /* console.log(a); */
      for (var i in a) {
            console.log(a[i].text);
      }
      //creating result:

      bookName.innerHTML = `<span id="name">Book Name:</span> ${sologan1.book.name}`;
      bookAuthor.innerHTML = `<span id="author">Book Author:</span>${sologan1.book.author}`;
      bookVerses.innerHTML = `<span id="verses">Book Verses:</span>${a[i].text}`;

}
