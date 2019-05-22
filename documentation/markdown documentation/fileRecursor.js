var JavadocToMarkdown = require("./javadoc-to-markdown.js");
var fs = require('fs');

function fileRecursor(path){
    fs.readdir(path,function(err, files) {
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file) {
            let possiblePath = path + "/" + file;
            if(fs.statSync(possiblePath).isDirectory())
            {
                fileRecursor(possiblePath);
            }
            else{
                if(file.endsWith(".php") || file.endsWith(".js")){
                    let markdownConverter = new JavadocToMarkdown();
                    var data = fs.readFileSync(possiblePath, 'utf8');
                    if(file.endsWith(".php")){

                        var convertedData = (markdownConverter.fromPHPDoc(data, 2));
                        fs.writeFile("./markdown phpDoc/" + file.substr(0, file.length - 3) + "md", convertedData, function(err) {
                            if(err) {
                                return console.log(err);
                            }
                        });

                    }
                    else{

                        var convertedData = (markdownConverter.fromJSDoc(data, 2));
                        fs.writeFile("./markdown jsDoc/" + file.substr(0, file.length - 2) + "md", convertedData, function(err) {
                            if(err) {
                                return console.log(err);
                            }
                        });
                        
                    }

                    console.log("File: " + possiblePath + " was created and written with converted markdown");
                }
            }
        });
    });
}

fileRecursor("./../../");