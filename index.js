let level = 1
let i = 0
let c = 0
let nrElemente = 0
let ordineButoane = []

$(".btn").on("click",function (){
    level = 1
    i = 0
    c = 0
    nrElemente = 0
    ordineButoane = []
    start()

    
})

$("button").on("click",function(){
    let id = this.id
    if(id==ordineButoane[i]) {i++,nrElemente++}
    else gameOver()
    if(nrElemente==ordineButoane.length) {nextLevel()}

    
})

function start() {
    let random
    $("h1").text("Nivelul " + level)
    random = Math.floor(Math.random() * 4);
    $(".btn" + random).animate({opacity: 0.3}).animate({opacity: 1.0})
    ordineButoane[c] = new Number(random)
    
    
}

function gameOver() {
    $("h1").text("Joc terminat.Apasa start ca sa reicepi")
    level = 1
    i = 0
    c = 0
    nrElemente = 0
    $("body").addClass("game-over")
    $("h3").addClass("game-over")
    setTimeout(function () {
        $("body").removeClass("game-over")
        $("h3").removeClass("game-over")
      }, 200);

    
}

function nextLevel() {
    level++
    c++
    i = 0
    nrElemente = 0
    start()
}


