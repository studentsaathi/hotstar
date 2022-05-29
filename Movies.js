let id;
let movies_div=document.getElementById("ditil")


 async function searchMovies(q){
   try {
    let url=`https://www.omdbapi.com/?s=${q}&apikey=c980f154`;
    let res= await fetch (url)
    let data= await res.json();
    return data.Search;
    console.log(data);

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
        p.innerText=`Year of release :-${el.Year}`
        let rating=document.createElement("p")
        rating.innerText=`imdb rating :-${el.imdbID}`
        //div.append(p)
        let img=document.createElement("img")
        img.src=el.Poster;
        let name=document.createElement("h1")
        name.innerText=el.Title;
        
        let div=document.createElement("div")
       // div.id="mov"
        div.append(name,img,p,rating)
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
