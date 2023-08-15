function getQuestionPart(p:string[]):string[] {
    // return array of three strings that makes a question for "Remote Associates Test".
    var word1 = p[0]
    var word2 = p[1]
    var word3 = p[2]
    var result:string = ""
    var temp:string = ""
    var found2:number[] = []
    var found3:number[] = []
    for(let i=0;i<word1.length;i++){
        let target = word1[i]
        if(found2.length===0){
            found2 = loopFind(word2,i,target)
        }else{
            found2 = indexFind(word2,found2,target)
        }
        if(found3.length===0){
            found3 = loopFind(word3,i,target)
        }else{
            found3 = indexFind(word3,found3,target)
        }
        if(found2.length !== 0&& found3.length !== 0){
            temp = temp.concat(target)
        }else{
            if(temp.length > result.length){
                result = temp
                temp = ""
            }
        }
    }
    word1=word1.replace(result,"")
    word2=word2.replace(result,"")
    word3=word3.replace(result,"")
    return [word1.trim(),word2.trim(),word3.trim()]
    }


function loopFind(t:string,start:number,tar:string):number[]{
    let result:number[] = []
    for(let i=start;i<t.length;i++){
        if(t[i] === tar) result.push(i+1)
    }
    return result
}

function indexFind(t:string,index:number[],tar:string):number[]{
    let result:number[] = []
    index.forEach(i=>{
        if(t[i] === tar) result.push(i+1)
    })
    return result
}

    console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]))