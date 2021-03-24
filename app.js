let pronoun = ['the', 'our'];
let adj = ['great', 'big', 'amazing'];
let noun = ['jogger', 'racoon', 'fox'];
let domain = ['.com', '.cr', '.org'];


for (p = 0; p < pronoun.length; p++) {
    for (a = 0; a < adj.length; a++) {
        for (n = 0; n < noun.length; n++) {
            for (d = 0; d < domain.length; d++) {
                console.log(pronoun[p]+adj[a]+noun[n]+domain[d]);
            }
        }
    }
}