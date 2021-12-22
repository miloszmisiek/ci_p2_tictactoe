/**  After DOM finis loading, gameboard is drawn by
 * adding respective side of the border based on index number. 
 */
 document.addEventListener("DOMContentLoaded", function() {

    let fields = document.getElementsByClassName("field");

    for (let i = 0; i < fields.length; i++) {
        if (i < 3) {
            fields[i].style.borderBottom = "1px solid var(--gray)";
        };
        if (i % 3 === 0) {
            fields[i].style.borderRight = "1px solid var(--gray)";
        };
        if (i > 5) {
            fields[i].style.borderTop = "1px solid var(--gray)";
        };
        if (i % 3 === 2) {
            fields[i].style.borderLeft = "1px solid var(--gray)";
        }
    }
})