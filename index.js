let pronoun = ['the','our']; 
let adj = ['great', 'big' ]; 
let noun = ['jogger','racoon'];
let domain = document.getElementById('domain');
let result = [];

for (let i = 0; i < pronoun.length; i++){
    
    for(e = 0; e < adj.length; e++){
        
        for(a = 0; a < noun.length; a++){

            //console.log(pronoun[i]+adj[e]+noun[a]+'.com');
            result.push(pronoun[i]+adj[e]+noun[a]+'.com'+"<br>");
           
        }
    }
}

domain.innerHTML = result.join(" ")