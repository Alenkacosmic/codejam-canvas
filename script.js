const canvas = document.getElementById('switcher'); // see more information here https://www.youtube.com/watch?v=1NQE6vcVK6M 
    canvas.width = 512;                                                             // https://www.youtube.com/watch?v=dYjSV5UUxJg 
    canvas.height = 512;                                                            // https://www.youtube.com/watch?v=0ZJ1Ev7qgmM
let context = canvas.getContext('2d');

let small_img = [
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
];
for (let i=0; i<small_img.length; i++) {
    for (let j=0; j<small_img[i].length; j++) {
        context.fillStyle = "#" + small_img[i][j];
        context.fillRect(i*128, j*128, 128, 128);
    }     
}