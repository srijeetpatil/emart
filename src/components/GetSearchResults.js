import GetCategory from './GetCategory';

function GetSearchResults({string, fetchResults}){
    var results = [];
    const stringAnalyser = (anagram, string) => {
        var length = anagram.length;        
        if(string.length >= length){
            for(var i = 0; i < string.length - length; i++){
                var substring = string.slice(i, i + length);
                if(substring.toUpperCase() === anagram.toUpperCase()){
                    return 1;
                }
            }
        }
        return 0;
    }

    var categories = ["electronics", "men", "women"];
    for(var i = 0; i < categories.length; i++){
        var subCat = GetCategory(categories[i]);    
        if(subCat != undefined){
            for(var j = 0; j < subCat.length; j++){
                var probability = stringAnalyser(string, subCat[j].category) + stringAnalyser(string, subCat[j].description) +  stringAnalyser(string, subCat[j].name);                
                if(probability > 0){                    
                    results = results.concat([subCat[j]]);                    
                }
            }
        }
    }    
    return results;
}

export default GetSearchResults;