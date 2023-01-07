let myLibrary = []; // declare array of books

// stop submit from being weird

document.getElementById("submitbutton").addEventListener("click", function(event){
    event.preventDefault();
}); 

// create the book object

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

// add the inputted info to library

function addBookToLibrary() {

    // take new input

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    if (title == "") { title = "Unknown Title"; }
    if (author == "") { author = "Unknown Author"; }
    if (pages == "") { pages = "N/A"; }

    let checkbox = document.getElementById("checkbox");
    let read = checkbox.checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    
    displayBooks(myLibrary.indexOf(newBook)); 
    closeForm();

}

// loop through the array

function displayBooks(i) {

    let bookgrid = document.getElementById("thegrid");

    const newDiv = document.createElement('div');

    bookgrid.appendChild(newDiv);

    const titleP = document.createElement('p');
    titleP.textContent = myLibrary[i].title;
    newDiv.appendChild(titleP);

    const authorP = document.createElement('p');
    authorP.textContent = myLibrary[i].author;
    newDiv.appendChild(authorP);

    const pagesP = document.createElement('p');
    pagesP.textContent = (myLibrary[i].pages + " Pages");
    newDiv.appendChild(pagesP);

    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute("id", "buttonDiv");
    newDiv.appendChild(buttonDiv);

    const readB = document.createElement('button');
    readB.setAttribute("id", "readButton");

    readB.addEventListener("click", function(event) {
        
        if (myLibrary[i].read == false) {
            readB.textContent = "Read";
            readB.style.backgroundColor = "#9FFF9C";
            myLibrary[i].read = true;
        } else {
            readB.textContent = "Not Read";
            readB.style.backgroundColor = "#FF9C9C";
            myLibrary[i].read = false;
        }
    })

    let checkbox = myLibrary[i].read;
    
    if ( checkbox ) {
        readB.textContent = "Read";
        readB.style.backgroundColor = "#9FFF9C";
    } else {
        readB.textContent = "Not Read";
        readB.style.backgroundColor = "#FF9C9C";
    }

    buttonDiv.appendChild(readB);

    // delete button

    const deleteB = document.createElement('button');
    deleteB.textContent = "Remove";

    deleteB.addEventListener("click", function(event) {
        
        while (newDiv.hasChildNodes()) {
            newDiv.removeChild(newDiv.lastChild);
        }

        newDiv.remove();

        myLibrary.splice(i, 1);


    })

    buttonDiv.appendChild(deleteB);

}

// // opening and closing the popup form


function openForm() {
    document.getElementById("theactualform").reset(); 
    document.getElementById("popupform").style.display = "flex";
    document.getElementById("popupform").style.justifyContent = "center";
    // document.getElementById("body").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
}

function closeForm() {
    document.getElementById("popupform").style.display = "none";
}