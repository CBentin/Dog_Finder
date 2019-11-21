function uploadPicture(){
    $('#inputPicture').on('change', function(event){
        var file = this.files[0];
        if(file){
            var reader = new FileReader();
            $('.imagePreviewText').css('display','none');
            $('.imagePreviewPhoto').css('display','block');

            reader.addEventListener('load', function(){
                $('.imagePreviewPhoto').attr('src', this.result);
            });

            reader.readAsDataURL(file);
        }
    });
}

uploadPicture();