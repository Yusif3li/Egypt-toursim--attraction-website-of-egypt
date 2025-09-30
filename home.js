var psearch=document.getElementById("search")
if (localStorage.getItem("lista")==null) {
    
    placesList=[]
}
else{
    placesList=JSON.parse(localStorage.getItem("lista"))
    showUserData()
}
function showUserData(){

  
      content=''
     for (let i = 0; i < placesList.length; i++) {
         var path=placesList[i].image.split("\\")
         console.log(path)
         
         content +=`
          <div class="hotel-card">
       <img src="resources/`+path[2]+`" width=100% alt="">
                    <a href=""><h2>`+placesList[i].name+`</h2></a>
                    <p>`+placesList[i].description+`</p>
                </div>
          `
         
     }
 
     console.log(content)
     document.getElementById("Hotels").innerHTML=content
    }
 
    function hsearch(){
        var result=''
      var serchVAl=psearch.value.toLowerCase()
        for (let i = 0; i < placesList.length; i++) {
            
            if (placesList[i].name.toLowerCase().includes(psearch.value.toLowerCase())==true ) {
                var path=placesList[i].image.split("\\")
                result +=`
          <div class="hotel-card">
       <img src="resources/`+path[2]+`" width=100% alt="">
                    <a href=""><h1>`+placesList[i].name.toLowerCase().replace(serchVAl,"<span class='bg-info'>"+serchVAl+"</span>")+`</h1></a>
                    <p>`+placesList[i].description+`</p>
                </div>
          `
            }
            
        }
        document.getElementById("Hotels").innerHTML=result

}