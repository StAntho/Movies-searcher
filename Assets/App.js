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
                        <h4>`+element.Type+`</h4>
                        <img src="`+element.Poster+`" class="card-img-top poster" alt="`+element.Title+`">
                        <div class="card-body">
                        <div class="titleyear">
                            <h2 class="card-title">`+element.Title+`</h2>
                            <p>`+element.Year+`</p>
                        </div>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">See More</a>
                        </div>
                    </div>
                `; 
            });
             
        })
        .catch(function(error) {
            console.log(error);
        });
    }
}())