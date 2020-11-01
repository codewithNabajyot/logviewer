let state={
    
};

function setDateTimeNow(){
    $('#selectedDateTime').val(new Date().toISOString().substr(0, 16))
}