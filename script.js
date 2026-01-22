// 1
document.querySelectorAll("footer")[0].addEventListener("click", function () {
    console.log("clique");
})

// 1.2
var clickCount = 0;
document.querySelectorAll("footer")[0].addEventListener("click", function () {
    clickCount += 1;
    console.log("clique numéro " + clickCount);
})

// 2

document.querySelectorAll(".navbar-toggler")[0].addEventListener("click", function () {
    document.getElementById("navbarHeader").classList.toggle("collapse")
})

// 3

let firstcard = document.querySelectorAll("div.col-md-4")[0]
firstcard.querySelectorAll("button.btn-outline-secondary")[0].addEventListener("click", function () {
    firstcard.style.color = "red"
})

// 4
let secondcard = document.querySelectorAll("div.col-md-4")[1]
secondcard.querySelectorAll("button.btn-outline-secondary")[0].addEventListener("click", function () {
    if (secondcard.style.color === "green") {
        secondcard.style.color = "";
    }
    else {
        secondcard.style.color = "green"
    }
})

// 5 
let link = document.getElementsByTagName("link")[0];
document.querySelectorAll("header")[0].addEventListener("dblclick", function () {
    if (link.disabled === true) {
        link.disabled = false;
    }
    else {
        link.disabled = true;
    }
})

// 6

/* firstcard.querySelectorAll("button.btn-success")[0].addEventListener("mouseover", function () {
    let cardtext = firstcard.querySelectorAll("p.card-text")
    let cardimg = firstcard.querySelectorAll("img.card-img-top")
    if (cardtext[0].style.display === "none") {
        cardtext[0].style.display = ""
        cardimg[0].style.width = "100%"
    }
    else {
        cardtext[0].style.display = "none"
        cardimg[0].style.width = "20%"
    }
}) */

let cards = document.querySelectorAll("div.col-md-4")
for (let i = 0; i < cards.length; i++) {
    cards[i].querySelectorAll("button.btn-success")[0].addEventListener("mouseover", function () {
        let cardtext = cards[i].querySelectorAll("p.card-text")
        let cardimg = cards[i].querySelectorAll("img.card-img-top")
        if (cardtext[0].style.display === "none") {
            cardtext[0].style.display = ""
            cardimg[0].style.width = "100%"
        }
        else {
            cardtext[0].style.display = "none"
            cardimg[0].style.width = "20%"
        }
    }
    )
}

// 7
console.log(document.querySelectorAll(".btn-secondary")[0])
document.querySelectorAll(".btn-secondary")[0].addEventListener("click", function () {
    let parent = document.querySelectorAll("div.row")[1]
    parent.insertBefore(parent.lastElementChild , parent.firstElementChild)
})

// 8

document.querySelectorAll(".btn-primary")[0].addEventListener("click", function () {
    let link = document.querySelectorAll("a")[4]
    link.setAttribute("href", "#")
    let parent = document.querySelectorAll("div.row")[1]
    parent.insertBefore(parent.firstElementChild , null)
})