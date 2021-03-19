let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];


function generator(part1,part2,part3){
    for(let a = 0; a < part1.length; a++){
        for(let b = 0; b < part2.length; b++){
            for(let c = 0; c < part3.length; c++){
             console.log(part1[a] + part2[b] + part3[c] + "com");
            }
        }
    }
  
}
generator(pronoun,adj,noun)

/* execute terminal and node app.js */
