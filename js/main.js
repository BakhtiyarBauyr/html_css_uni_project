function searchMovie(){
    let titleSearch = $("#titleSearch").val();
    let typeSearch = $('#typeSearch').val();
    let apikey = 'b6290d96';
    let card = '';
    let url = 'http://www.omdbapi.com/?apikey=' + apikey;
    function isFill(titleSearch, typeSearch){
        if(titleSearch != '' && typeSearch != ''){
            return url+'&t='+titleSearch
        }
        else{
            alert('Error! Type should be fillin')
        }
    }
    $.ajax({
        method: 'GET',
        url: isFill(titleSearch, typeSearch),
        success: function(respond){
            card = `
            <div class="result_card">
                <div class="card_border">
                    <div class="card_image">
                        <img src="${respond.Poster}" alt="" class="image_card">
                    </div>
                    <div class="card_name">
                        <p>${respond.Title}</p>
                    </div>
                    <div class="card_description">
                        <p>${respond.Plot}</p>
                    </div>
                </div>
            </div>
            `;
            $('#card').html(card);
        }
    })
}