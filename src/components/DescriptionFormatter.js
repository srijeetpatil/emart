const descriptionFormatter = (string) => {
    var count = 0;
    var index = string.length;
    for(var i = 0; i < string.length; i++){
        if(string.charAt(i) === ' '){
            count++;
        }
        if(count > 30){
            index = i;
            break;
        }
    }
    return index;
}

export default descriptionFormatter;