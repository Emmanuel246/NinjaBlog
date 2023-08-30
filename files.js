const fs = require('fs');


// reading files
// fs.readFile('./docx/blog1.txt',(err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// } );
  
// writing files
// fs.writeFile('./docx/blog2.txt', 'Hello World', () => {
//     console.log('File was written')
// })

// directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err){
//             console.log(err);
//         }
//         console.log('Folder Created');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log("Folder Deleted")
//     })
// }

// deleting files
if (fs.existsSync('./docx/deleteme.txt')) {
    fs.unlink('./docx/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('File Deleted')
    })
}