const $key = "9ddde0b3";

(function(){
    document
    .getElementById("box")
    .addEventListener("keyup", function() {
        let searchText = this.value;
        console.log(searchText);
        getAnswer(searchText);
    });

    function getAnswer(searchText){
        fetch(`https://www.omdbapi.com/?apikey=`+$key+`&s=`+searchText+``)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.Search.forEach(element => {
                console.log(element.Title);
                document.getElementById("answer").innerHTML += `
                    <div class="card">
                        <h2 class="title">`+element.Title+`</h2><p class="type">`+element.Type+`</p>
                        <img  class="poster" src="`+element.Poster+`"/>
                        <p class="genre">genre de film</p><p class="year">`+element.Year+`</p>
                    </div>
                `; 
            });
             
        })
        .catch(function(error) {
            console.log(error);
        });
    }
}())