function getResults() {
    
    document.getElementById("result").innerHTML = "";

    var r1 = Math.floor((Math.random() * 3) + 0);
    var res1 = document.getElementsByClassName("school")[r1].value;

    var r2 = Math.floor((Math.random() * 3) + 0);
    var elems = document.getElementsByClassName("marry");
    input = elems[0].value.trim().toLowerCase();
    if (elems[1].value.toLowerCase() == input && elems[2].value.toLowerCase() == input) {
        res2 = "You will end up divorced";
    } else {
        res2 = "You will marry " + elems[r2].value;
    }

    var r3 = Math.floor((Math.random() * 3) + 0);
    var res3 = document.getElementsByClassName("live")[r3].value;

    var r4 = Math.floor((Math.random() * 3) + 0);
    var res4 = document.getElementsByClassName("kids")[r4].value;

    var r5 = Math.floor((Math.random() * 3) + 0);
    var res5 = document.getElementsByClassName("majors")[r5].value;

    var r6 = Math.floor((Math.random() * 3) + 0);
    var res6 = document.getElementsByClassName("occupations")[r6].value;

    var r7 = Math.floor((Math.random() * 4) + 0);
    var res7 = "";
    switch (r7) {
        case 0:
            res7 = "mansion";
            break;
        case 1:
            res7 = "apartment";
            break;
        case 2:
            res7 = "shack";
            break;
        case 3:
            res7 = "house";
            break;
    }     

    alert("Result: You will graduate from " + res1 + " majoring in " + 
            res5 + ". " + res2 + " and have " + 
            res4 + " kids. You'll settle down in " + res3 + ", live in a " + 
            res7 + ", and spend your days as a " + res6 + ".");
}