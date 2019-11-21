function fillPage(){
    var queryString = decodeURIComponent(window.location.search);
    var resolveData = queryString.split('=')[1];
    console.log(resolveData);
    $('#resolveDiv').append(`<h2>Resolved!</h2>
                             <h4>Contact </h4>
                             <div id='contact'>
                                ${resolveData}
                             </div>`);
}

fillPage();