import pdf from 'html-pdf';
import ejs from 'ejs';

let linguagem = "Javascript";

ejs.renderFile("./arquivo.ejs", {linguagem: linguagem}, (err, html) => {
    if(err) {
        console.log(err);
    }
    else {
        pdf.create(html, {

        }).toFile("./meupdf.pdf", (err, res) => {
            if(err) {
                console.log("Um erro aconteceu: ", err)
            }
            else {
                console.log(res)
            }
        })
    }
})

