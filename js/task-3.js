function getElementWidth(content, padding, border) {
    const contentWith = parseFloat(content);
    const paddingWith = parseFloat(padding);
    const borderWith = parseFloat(border);
    return contentWith + 2 * paddingWith + 2 * borderWith 
}
    

    console.log(getElementWidth("50px", "8px", "4px")); // 74
    console.log(getElementWidth("60px", "12px", "8.5px")); // 101
    console.log(getElementWidth("200px", "0px", "0px")); // 200


