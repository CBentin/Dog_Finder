function initSesion(){
    $('loginForm').on('submit', function(event){
        event.preventDefault();
        validateUser($('#userNameLogin').val(),$('#passwordLogin').val());
    });
}