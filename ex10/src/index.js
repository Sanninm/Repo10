function myFunction(){
var myMusic = {
    001: {
        artist: "Billy Joel",
        title: "Piano Man",
        relase_year: 1073,
        formats: {
            1: "CD",
            2: "8T",
            3: "LP"

        },
        gold: true
    },
    002: {
        artist: "Billy Joel",
        title: "Piano Man",
        relase_year: 1073,
        formats: {
            1: "CD",
            2: "8T",
            3: "LP"

        },
        gold: true
    }
};
}
console.log(myFunction());
myFunction()[2];
module.exports = myFunction;
