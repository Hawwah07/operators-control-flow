// Question 3
function choose (classGroup) {
if (classGroup === "Science") {
    console.log("Your subjects are: Physics, Chemistry, Biology, Technical Drawing, English, Mathematics");
    } else if (classGroup === "Social Science") {
    console.log("Your subjects are: Accounting, Commerce, Marketing, Geography, English, Mathematics");
    } else if (classGroup === "Arts") {
    console.log("Your subjects are: Government, Economics, Literature, History, English, Mathematics");
    } else {
    console.log("Invalid class group. Your subjects are: English, Mathematics");
    }
}


// Question 5
choose ("Arts");
 function power (num , pwr) {
let diff = num - pwr;
while (pwr * 2 <= num) {
    pwr *= 2;
    diff = num - pwr;
}
if (pwr * 2 - num < diff) {
    pwr *= 2;
    diff = pwr - num;
}
console.log("The number " + pwr + " is the power of 2 nearest to " + num + ".");
}
power (40 , 32);