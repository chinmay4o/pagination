
var info = [
    {"name":"eliza", "age": "33", "email":"shyamjaiswal@gmail.com"},  
    {"name":"Bob","age": "24",  "email":"bob32@gmail.com"},  
    {"name":"victor","age": "54",  "email":"jai87@gmail.com"}, 
    {"name":"Red","age": "14",  "email":"shyamjaiswal@gmail.com"},  
    {"name":"Omkar","age": "54",  "email":"bob32@gmail.com"},  
    {"name":"siddhi","age": "32",  "email":"jai87@gmail.com"}, 
    {"name":"durg","age": "30",  "email":"shyamjaiswal@gmail.com"},  
    {"name":"happy","age": "34",  "email":"bob32@gmail.com"},  
    {"name":"pallavi","age": "24",  "email":"jai87@gmail.com"},
    {"name":"Shyam", "age": "33", "email":"shyamjaiswal@gmail.com"},  
    {"name":"raghav","age": "24",  "email":"bob32@gmail.com"},  
    {"name":"chinmay","age": "54",  "email":"jai87@gmail.com"}, 
    {"name":"Nim","age": "14",  "email":"shyamjaiswal@gmail.com"},  
    {"name":"Omkar","age": "54",  "email":"bob32@gmail.com"},  
    {"name":"Jai","age": "32",  "email":"jai87@gmail.com"}, 
    {"name":"liz","age": "30",  "email":"shyamjaiswal@gmail.com"},  
    {"name":"cooper","age": "34",  "email":"bob32@gmail.com"},  
    {"name":"raymond","age": "24",  "email":"jai87@gmail.com"}
]


var rowUpdate = document.querySelector(".rowUpdate");


function data(database){

    rowUpdate.innerHTML = " ";
    for(var i=0; i < database.length; i++ ){
        rowUpdate.innerHTML += `<tr> 
                               <td>${database[i].name} </td>
                               <td>${database[i].age} </td>
                               <td>${database[i].email} </td>
                               </tr>`
    }
}

data(info);


var search = document.querySelector("#searchBar");

search.addEventListener("keyup" , function(e){
    var value1 = search.value;
    
    var see = getResult(value1);

    data(see);
})



function getResult(value){
   var searchName = [];
    
   for (var i =0; i< info.length; i++){

    value = value.toLowerCase();
    var name = info[i].name.toLowerCase();

       if (name.includes(value))
        searchName.push(info[i]);
   }

   return searchName;
}
