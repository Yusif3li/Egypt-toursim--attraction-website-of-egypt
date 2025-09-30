var pName=document.getElementById("pName")
var pDescription=document.getElementById("pDescription")
var pImg=document.getElementById("pImg")
var psearch=document.getElementById("pSearch")
var placesList
if (localStorage.getItem("lista")==null) {
    
    placesList=[]
}
else{
    placesList=JSON.parse(localStorage.getItem("lista"))
    showData()
}
 function addProduct(){
if (document.getElementById("addBtn").innerHTML=="Update") {
    document.getElementById("addBtn").innerHTML="Add Ptoduct"
    var productUpdate={
        name:pName.value,
    image:pImg.value,
        description:pDescription.value
    }
    placesList.splice(updateIndex,1,productUpdate)
}


else{var product={

    name:pName.value,
    image:pImg.value,
        description:pDescription.value
}
placesList.push(product)}

clearItem()
localStorage.setItem("lista",JSON.stringify(placesList))
showData()
console.log(product)

 }
 function showData(){

   var temp=''
    for (let i = 0; i < placesList.length; i++) {
        var path=placesList[i].image.split("\\")
        console.log(path)
        
         temp +=`
          <button onclick="updatePr(`+i+`)" class="btn btn-warning
          w-25 mb-2">Update</button>
          <button onclick="deletePr(`+i+`)" class="btn btn-danger
          w-25 mb-2 ">delete</button> 
           <img src="resources/`+path[2]+`" class="w-50 m-auto" alt="" ><
          
  <h1>`+placesList[i].name+`</h1>
  <p>`+placesList[i].description+`</p>
`
        
    }
   
    document.getElementById("data").innerHTML=temp
  
 }


 function clearItem(){


pName.value=''
pImg.value=''
pDescription.value=''
    
 }
 function deletePr(index){
placesList.splice(index,1)
showData()
localStorage.setItem("lista",JSON.stringify(placesList))
 }
 function search(){
    var result=''
  var serchVAl=psearch.value.toLowerCase()
    for (let i = 0; i < placesList.length; i++) {
        
        if (placesList[i].name.toLowerCase().includes(psearch.value.toLowerCase())==true ) {
            var path=placesList[i].image.split("\\")
            result +=`
            <button onclick="updatePr(`+i+`)" class="btn btn-warning
          w-25 mb-2">Update</button>
          <button onclick="deletePr(`+i+`)" class="btn btn-danger
          w-25 mb-2 ">delete</button> 
           <img src="resources/`+path[2]+`" class="w-50 m-auto" alt="" ><
          
  <h1>`+placesList[i].name.toLowerCase().replace(serchVAl,"<span class='bg-info'>"+serchVAl+"</span>")+`</h1>
  <p>`+placesList[i].description+`</p>
`
        }
        
    }
    document.getElementById("data").innerHTML=result
 }
 var updateIndex=-1
 function updatePr(index) {

    updateIndex=index
   console.log(updateIndex);
    pName.value=placesList[index].name
pDescription.value=placesList[index].description
document.getElementById("addBtn").innerHTML="Update"
localStorage.setItem("lista",JSON.stringify(placesList))

 
 }

