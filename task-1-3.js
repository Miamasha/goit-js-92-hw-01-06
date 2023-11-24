console.log("--------- Task 3");

function getElementWidth (content, padding, border) {
    const elementWidth = parseFloat(content.replace(',', '.')) + parseFloat(padding.replace(',', '.'))*2 + parseFloat(border.replace(',', '.'))*2;
    return elementWidth;
    }
    console.log(getElementWidth("50px", "8px", "4px")); // 74
    console.log(getElementWidth("60px", "12px", "8.5px")); // 101
    console.log(getElementWidth("200px", "0px", "0px")); // 200
    console.log(getElementWidth("10,11px", "3.15px", "1.4px"));