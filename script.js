function revealMeme() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 + num2;

    // Display result in console (or alert for simplicity)
    console.log("Result: " + result);

    let meme = document.getElementById('meme');
    meme.style.display = 'block';
    let height = 0;
    let interval = setInterval(() => {
        if (height >= 500) { // Slightly smaller max height
            clearInterval(interval);
        } else {
            height += 5; // Slower reveal
            meme.style.height = height + 'px';
        }
    }, 50);
}