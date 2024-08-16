document.addEventListener('DOMContentLoaded', () => {
    const texts = ["Frontend Developer", "UI Designer", "Python Developer"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    const dynamicText = document.getElementById('dynamic-text');

    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        dynamicText.textContent = letter;
        if (letter.length === currentText.length) {
            setTimeout(() => {
                setTimeout(erase, 2000); // delay before erasing starts
            }, 1000);
        } else {
            setTimeout(type, 100);
        }
    }

    function erase() {
        if (letter.length === 0) {
            count++;
            index = 0;
            setTimeout(type, 100);
        } else {
            letter = currentText.slice(0, --index);
            dynamicText.textContent = letter;
            setTimeout(erase, 100);
        }
    }

    type();

});

