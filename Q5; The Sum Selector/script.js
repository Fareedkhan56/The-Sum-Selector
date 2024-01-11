// Q6; The Sum Selector; You Are Working On A Function That Should Sum All The Numbers In An Array Untill It Encounters A Negative Number, Write A Function That Perform This Summation;

let array = [5, 5, 5, 5, -9];
Summation(array)

function Summation(data) {
    let res = 0;
    for (const key in data) {
        if (data[key] >= 0) {
            res += data[key]
        }
        else {
            break;
        }
    }
    console.log(res)
}