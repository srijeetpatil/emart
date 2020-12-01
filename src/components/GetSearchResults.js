import GetCategory from './GetCategory';

function GetSearchResults(string){
    var results = [];
    const stringAnalyser = (strings, string) => {
        var count = 0;
        for(var x in strings){            
            var length = strings[x].length;   
            if(strings[x].length === 0){
                break;
            }     
            if(string.length >= length){
                for(var i = 0; i < string.length - length; i++){
                    var substring = string.slice(i, i + length);
                    if(substring.toUpperCase() === strings[x].toUpperCase()){
                        count ++;
                    }
                }
            }            
        }
        return count;
    }

    var categories = ["electronics", "men", "women", "kids", "sports", "books"];

    var strings = string.split(" ");    
        
    for(var i = 0; i < categories.length; i++){
        var subCat = GetCategory(categories[i]);    
        if(subCat != undefined){
            for(var j = 0; j < subCat.length; j++){
                var probability = stringAnalyser(strings, subCat[j].category) + stringAnalyser(strings, subCat[j].description) +  stringAnalyser(strings, subCat[j].name) + stringAnalyser(strings, subCat[j].prod_id);                
                if(probability > 0){                    
                    results = results.concat([subCat[j]]);                    
                }
            }
        }
    }      
    return results;
}

export default GetSearchResults;