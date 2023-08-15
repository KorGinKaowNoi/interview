//a bit confuse by the rule but will try my best.


function getHandScore(input:string):number {
    // return score
    const cards = input.split(" ")
    var ref = cards[0][1]
    var sameRank = true
    var store :number[] = [0,0,0,0]
    cards.forEach(card =>{
        const suit = card[0]
        card = card.replace(suit,"")
        var val: number;
        if(card === "J" || card === "Q" ||card === "K"){
             val = 10
        }else if(card === "A"){
            val = 11
       }else{
        val = Number(card)
       }

        if(suit==='S') store[0]+=val
        if(suit==='C') store[1]+=val
        if(suit==='H') store[2]+=val
        if(suit==='D') store[3]+=val
        if(card != ref){
            sameRank = false
        }else{
            ref = card
        }
    });
    if(sameRank && ref === "A") return 35
    if(sameRank) return 32.5
    return Math.max.apply(Math,store)
    }

    console.log(getHandScore("S2 S7 C10"))