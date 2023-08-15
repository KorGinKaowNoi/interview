function getHandScore(input:string):number {
   const time = input.split(":")
   var hour = Number(time[0])
   var min = Number(time[1])
   const remain = (min/60) * 5
   min = min*6
    hour = ((hour*5)+remain)*6
    while(hour>=360){
        hour-=360
    }
    
    const preResult =  Math.abs(hour-min)
    const result = Math.min(preResult,Math.abs(preResult-360))
    return result
}

console.log(getHandScore("00:35"))
console.log(getHandScore("24:00"))
console.log(getHandScore("9:00"))
console.log(getHandScore("17:30"))