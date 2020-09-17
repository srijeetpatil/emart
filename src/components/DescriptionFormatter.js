const descriptionFormatter = (string) => {
    var count = 0;
    var index = string.length;
    for(var i = 0; i < string.length; i++){
        count++;
        if(count > 140){
            index = i;
            break;
        }
    }
    return index;
}

export default descriptionFormatter;