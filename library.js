console.log(`welcome to project no2`);

//Constructor
function bookLibrary (name , author , type){
    this.name = name;
    this.author = author;
    this.type = type;
}

//Making the display function
function Display(){

}

//Making the add prototype
Display.prototype.add = function(book){
    console.log('Adding the Book List');
     let tableBody = document.getElementById('tableBody');
     let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
     tableBody.innerHTML += uiString;
}

//Making the clear prototype
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

//Making the validate prototype
Display.prototype.validate = function(book){
     if(book.name.length<2 || book.author.length<2){
         return false;
     }
     else{
         return true;
     }
}

//Making the show prototype
Display.prototype.show = function(type , displayMessage ){
     let message = document.getElementById('message');
     message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function(){
        message.innerHTML = '';
    } ,2000);
}


//Adding Event listner to form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit' , libraryFormSubmit);


//Getting the data
function libraryFormSubmit(e){
    console.log('Your form is Submitted');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking')
    if(fiction.checked){
        type = fiction.value;
    }else if(programming.checked){
        type = programming.value;
    }else if(cooking.checked){
        type = cooking.value;
    }
    let book  = new bookLibrary(name , author , type);
    console.log(book);
    let bookStorage = function(book){
        let myBook = 
        localStorage.setItem('book' , )
    }
    let display = new Display();
    
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success' , 'Your book has been successfully added');
    }
    else{
        display.show('error' , 'Sorry you cannot add this book');
    }
    e.preventDefault();
}
