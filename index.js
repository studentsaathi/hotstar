let id;
let movies_div=document.getElementById("lastest")


 async function searchMovies(q){
   try {
    let url=`https://www.omdbapi.com/?s=${q}&apikey=c980f154`;
    let res= await fetch (url)
    let data= await res.json();
    return data.Search;
    //console.log(data);

   }
   catch(error){
       console.log('error:',error)
   }

} 


function appendMovies (movies){
    movies_div.innerHTML=null;
   
    if(movies===undefined){
        return false;
    }
    movies.forEach(function(el){
        let p=document.createElement("p")
        p.innerText=el.Title;
        //div.append(p)
        let img=document.createElement("img")
        img.src=el.Poster;
        
        let div=document.createElement("div")
       // div.id="mov"
        div.append(img,p)
        movies_div.append(div)
    });

    
}



 async function main(){
    let query =document.getElementById("query").value;
     let response=searchMovies(query);
    let data =await response;
    appendMovies(data);
    console.log("data",data)

}

function debouncFunction(func,delay){
    if(id){
        clearTimeout(id)
    }
     id=setTimeout(function(){
        func();
    },delay);

}


//div show//




const url='https://www.omdbapi.com/?s=hero&apikey=c980f154';
fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    appendend(res);
    console.log(res);
})
.catch(function(err){
    console.log(err);
})

// console.log("res",res)
function appendend(data){
    let newmovies=document.getElementById("newmovies")
    
   for(let i=0;i<10;i++){

       i++
        let divf=document.createElement("div");
        let superimg=document.createElement("img");

        superimg.src=data.Search[i].Poster;
        i++
        divf.append(superimg)
        newmovies.append(divf)
}}


