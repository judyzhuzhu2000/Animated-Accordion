const accordionItemsEl = document.getElementsByClassName("accordion__item");
//console.log(accordionItemsEl);

function accordion () {
    for(let item of accordionItemsEl) {
        let accHeading = item.firstElementChild;
        //console.log(accHeading);
        accHeading.addEventListener("click",function() {
            let accDetails = accHeading.nextElementSibling;
            if(accDetails.style.maxHeight) {
                accDetails.style.maxHeight = null;
                accHeading.lastElementChild.innerHTML = "+";
            } else {
                accDetails.style.maxHeight = accDetails.scrollHeight + "px";
                accHeading.lastElementChild.innerHTML = "-";
            }
        })
    }
}
accordion();
