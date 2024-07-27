// פונקציה לבחירת תמונה מתוך הגלריה
function selectImage(imageNumber) {
    // קבלת כל התמונות הממוזערות מהדף
    var thumbnails = document.getElementsByClassName('thumbnail');
    
    // הפחתת שקיפות לכל התמונות הממוזערות
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].style.opacity = 0.5; // הפחתת שקיפות לכל התמונות למעט התמונה הנבחרת
    }
    
    // בחירת התמונה הממוזערת שנבחרה (תמונה מספר imageNumber)
    var selectedThumbnail = thumbnails[imageNumber - 1];
    selectedThumbnail.style.opacity = 1; // הגדלת השקיפות של התמונה הנבחרת
    
    // קבלת אלמנטים לתמונה הנבחרת ולתמונה הנוספת
    var selectedImage = document.getElementById('selectedImage');
    var overlayImage = document.getElementById('overlayImage');

    // שינוי מקור התמונה ותיאום מיקום הטקסטים והתמונה הנוספת בהתאם לתמונה שנבחרה
    if (imageNumber === 1) {
        selectedImage.src = "images/dogs.jpg"; // שינוי מקור התמונה הנבחרת
        setTextPosition('27%', '22%', '67%', '22%'); // קביעת מיקום הטקסטים
        setOverlayPosition('15%', '64%'); // קביעת מיקום התמונה הנוספת
    } else if (imageNumber === 2) {
        selectedImage.src = "images/DisasterGirl.jpg"; // שינוי מקור התמונה הנבחרת
        setTextPosition('27%', '25%', '70%', '26%'); // קביעת מיקום הטקסטים
        setOverlayPosition('15%', '64%'); // קביעת מיקום התמונה הנוספת
    } else if (imageNumber === 3) {
        selectedImage.src = "images/pouTheBear.jpg"; // שינוי מקור התמונה הנבחרת
        setTextPosition('63%', '31%', '63%', '57%'); // קביעת מיקום הטקסטים
        setOverlayPosition('85%', '25%'); // קביעת מיקום התמונה הנוספת
    } else if (imageNumber === 4) {
        selectedImage.src = "images/monkey.webp"; // שינוי מקור התמונה הנבחרת
        setTextPosition('27%', '60%', '67%', '60%'); // קביעת מיקום הטקסטים
        setOverlayPosition('85%', '25%'); // קביעת מיקום התמונה הנוספת
    } else if (imageNumber === 5) {
        selectedImage.src = "images/womanCat.jpg"; // שינוי מקור התמונה הנבחרת
        setTextPosition('27%', '27%', '67%', '27%'); // קביעת מיקום הטקסטים
        setOverlayPosition('15%', '64%'); // קביעת מיקום התמונה הנוספת
    }

    // עדכון התמונה הנוספת לפי מצב ה-checkbox
    updateOverlayImage(); // עדכון מצב התמונה הנוספת
}

// פונקציה לקביעת מיקום הטקסטים
function setTextPosition(topX, topY, bottomX, bottomY) {
    // קבלת אלמנטים של הטקסט העליון והתחתון
    var topText = document.getElementById('topText');
    var bottomText = document.getElementById('bottomText');

    // קביעת מיקום הטקסטים
    topText.style.position = 'absolute'; // קביעת מיקום מוחלט לטקסט העליון
    bottomText.style.position = 'absolute'; // קביעת מיקום מוחלט לטקסט התחתון

    topText.style.left = topX; // קביעת מיקום אופקי של הטקסט העליון
    topText.style.top = topY; // קביעת מיקום אנכי של הטקסט העליון
    topText.style.transform = 'translate(-50%, -50%)'; // התמקמות המרכז של הטקסט העליון

    bottomText.style.left = bottomX; // קביעת מיקום אופקי של הטקסט התחתון
    bottomText.style.top = bottomY; // קביעת מיקום אנכי של הטקסט התחתון
    bottomText.style.transform = 'translate(-50%, -50%)'; // התמקמות המרכז של הטקסט התחתון
}

// פונקציה לקביעת מיקום התמונה הנוספת
function setOverlayPosition(left, top) {
    var overlayImage = document.getElementById('overlayImage');
    overlayImage.style.left = left; // קביעת מיקום אופקי של התמונה הנוספת
    overlayImage.style.top = top; // קביעת מיקום אנכי של התמונה הנוספת
    overlayImage.style.transform = 'translate(-50%, -50%)'; // התמקמות המרכז של התמונה הנוספת
}

// פונקציה להוספת או הסרת מסגרת סביב התמונה
function toggleFrame() {
    var selectedImage = document.getElementById('selectedImage');
    selectedImage.classList.toggle('framed'); // הוספת או הסרת class של מסגרת
}

// פונקציה לעדכון מצב התמונה הנוספת
function toggleEmoji() {
    updateOverlayImage(); // עדכון הצגת התמונה הנוספת
}

// פונקציה לעדכון הצגת התמונה הנוספת
function updateOverlayImage() {
    var overlayImage = document.getElementById('overlayImage');
    var emojiCheckbox = document.querySelector('input[name="emoji"]'); // קבלת ה-checkbox של התמונה הנוספת

    // אם ה-checkbox נבחר, התמונה הנוספת תוצג, אחרת תוסתר
    if (emojiCheckbox.checked) {
        overlayImage.style.display = "block"; // הצגת התמונה הנוספת
    } else {
        overlayImage.style.display = "none"; // הסתרת התמונה הנוספת
    }
}



// פונקציה לעדכון הטקסטים לפי מה שהוזן בשדות הקלט
function updateText() {
    var topText = document.getElementById('topTextInput').value; // קבלת ערך מהשדה של טקסט עליון
    var bottomText = document.getElementById('bottomTextInput').value; // קבלת ערך מהשדה של טקסט תחתון

    document.getElementById('topText').textContent = topText; // עדכון טקסט עליון בתצוגה
    document.getElementById('bottomText').textContent = bottomText; // עדכון טקסט תחתון בתצוגה

    checkFormCompletion(); // בדיקה אם כל השדות מולאו לאחר עדכון הטקסטים
}

// פונקציה לעדכון גודל הפונט
function updateFontSize() {
    var fontSize = document.querySelector('input[name="fontSize"]:checked').value; // קבלת ערך גודל הפונט הנבחר
    var topText = document.getElementById('topText'); // קבלת אלמנט הטקסט העליון
    var bottomText = document.getElementById('bottomText'); // קבלת אלמנט הטקסט התחתון

    topText.style.fontSize = fontSize; // עדכון גודל הפונט של הטקסט העליון
    bottomText.style.fontSize = fontSize; // עדכון גודל הפונט של הטקסט התחתון

    checkFormCompletion(); // בדיקה אם כל השדות מולאו לאחר עדכון גודל הפונט
}

// פונקציה לעדכון משקל הפונט
function updateFontWeight() {
    var fontWeight = document.querySelector('input[name="fontWeight"]:checked').value; // קבלת ערך משקל הפונט הנבחר
    var topText = document.getElementById('topText'); // קבלת אלמנט הטקסט העליון
    var bottomText = document.getElementById('bottomText'); // קבלת אלמנט הטקסט התחתון

    topText.style.fontWeight = fontWeight; // עדכון משקל הפונט של הטקסט העליון
    bottomText.style.fontWeight = fontWeight; // עדכון משקל הפונט של הטקסט התחתון

    checkFormCompletion(); // בדיקה אם כל השדות מולאו לאחר עדכון משקל הפונט
}

// פונקציה לבדוק אם כל השדות בטופס מולאו
function checkFormCompletion() {
    var topTextInput = document.getElementById('topTextInput').value; // קבלת הערך מהשדה של טקסט עליון
    var bottomTextInput = document.getElementById('bottomTextInput').value; // קבלת הערך מהשדה של טקסט תחתון
    var fontSizeSelected = document.querySelector('input[name="fontSize"]:checked'); // קבלת הערך הנבחר של גודל הפונט
    var fontWeightSelected = document.querySelector('input[name="fontWeight"]:checked'); // קבלת הערך הנבחר של משקל הפונט

    var createMemeButton = document.getElementById('createMeme'); // קבלת כפתור "צור מם"

    // אם כל השדות מולאו, הכפתור יהפוך לפעיל ויתקבל שקיפות מלאה
    if (topTextInput && bottomTextInput && fontSizeSelected && fontWeightSelected) {
        createMemeButton.classList.add('active'); // הוספת class של פעולה לכפתור
        createMemeButton.style.opacity = "1"; // שינוי שקיפות לכפתור
    } else {
        createMemeButton.classList.remove('active'); // הסרת class של פעולה מהכפתור
        createMemeButton.style.opacity = "0.5"; // שינוי שקיפות לכפתור
    }
}

// פונקציה להצגת סיכום המידע שהוזן
function showSummary() {
    var selectedImageSrc = document.getElementById('selectedImage').src; // קבלת מקור התמונה הנבחרת
    var frame = document.querySelector('input[name="frame"]').checked; // קבלת מצב ה-checkbox של המסגרת
    var emoji = document.querySelector('input[name="emoji"]').checked; // קבלת מצב ה-checkbox של התמונה הנוספת
    var fontSize = document.querySelector('input[name="fontSize"]:checked').value; // קבלת ערך גודל הפונט הנבחר
    var fontWeight = document.querySelector('input[name="fontWeight"]:checked').value; // קבלת ערך משקל הפונט הנבחר
    var topText = document.getElementById('topTextInput').value; // קבלת טקסט עליון
    var bottomText = document.getElementById('bottomTextInput').value; // קבלת טקסט תחתון

    // חילוץ שם התמונה מהנתיב
    var imageName = selectedImageSrc.split('/').pop(); // חילוץ שם הקובץ מהנתיב המלא

    // יצירת טקסט הסיכום
    var summaryText = 
        "<strong>תמונה שנבחרה:</strong> " + imageName + "<br>" +
        "<strong>מסגרת:</strong> " + (frame ? 'כן' : 'לא') + "<br>" +
        "<strong>תמונה נוספת:</strong> " + (emoji ? 'כן' : 'לא') + "<br>" +
        "<strong>גודל פונט:</strong> " + fontSize + "<br>" +
        "<strong>משקל פונט:</strong> " + fontWeight + "<br>" +
        "<strong>טקסט 1:</strong> " + topText + "<br>" +
        "<strong>טקסט 2:</strong> " + bottomText;

    // הצגת טקסט הסיכום בחלון הסיכום
    document.getElementById('summaryText').innerHTML = summaryText; // הצגת טקסט הסיכום
    document.getElementById('summaryWindowID').style.display = "flex"; // הצגת המודאל
}

// פונקציה לסגירת חלון הסיכום
function closeSummary() {
    document.getElementById('summaryWindowID').style.display = "none"; // הסתרת המודאל
}