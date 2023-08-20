
document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');

    uploadButton.addEventListener('click', function () {
        const selectedFile = fileInput.files[0];

        if (selectedFile) {
            const reader = new FileReader();

            reader.onload = function (event) {
                const fileData = event.target.result;
                
                // You can do something with the fileData here, such as uploading it to a server.
                // Example: Call a function to upload the file data to a server using AJAX.
                uploadFileToServer(fileData);
            };

            reader.readAsDataURL(selectedFile);
        } else {
            alert('Please select a file.');
        }
    });

    function uploadFileToServer(fileData) {
        // You need to implement this function to handle uploading the file to your server.
        // You can use AJAX, Fetch API, or any other method to send the file data.
        // Server-side code is required to handle the file storage on the server.
        // This example focuses on the client-side part.
        console.log('Uploading file to the server...');
    }
});








//In detailed explanation how code is working comment to the above all line  code and uncomment to the
//below all line code





// document.addEventListener('DOMContentLoaded', function () {
//     const fileInput = document.getElementById('fileInput');
//     const uploadButton = document.getElementById('uploadButton');

//     uploadButton.addEventListener('click', function () {

//         const selectedFile = fileInput.files[0];


//         //  console.log("fileInput 🥳🥳::=",fileInput)
//         //  console.log("fileInput.files😍😍",fileInput.files)
//         //  console.log("fileInput.files[0] 😎😎",fileInput.files[0])


//         if (selectedFile) {

//             // console.log("File is Uploaded ❤️❤️")

//             const reader = new FileReader();

//             console.log("reader 🎶🎶",reader)

//             reader.onload = function (event) {

//             //   console.log("event inside reader.onload⭐⭐",event)
//             //    console.log("event.target",event.target)

//                 const fileData = event.target.result;
                
//                 // console.log("fileData 👌👌",fileData)

//                 // You can do something with the fileData here, such as uploading it to a server.
//                 // Example: Call a function to upload the file data to a server using AJAX.
//                 uploadFileToServer(fileData);
//             };

//             reader.readAsDataURL(selectedFile);
//         } else {
//             alert('Please select a file.');
//         }
//     });

//     function uploadFileToServer(fileData) {
//         // You need to implement this function to handle uploading the file to your server.
//         // You can use AJAX, Fetch API, or any other method to send the file data.
//         // Server-side code is required to handle the file storage on the server.
//         // This example focuses on the client-side part.
//         console.log('Uploading file to the server...');
//     }
// });