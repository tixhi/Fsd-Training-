// const sum = (a, b) => a + b;

// function sumwithmsg(clbk,msg)
// {
// const result = clbk(10,20);
// const fresult = "hi" + msg + "your score is  " + result;
// console.log(fresult);
// }
// sumwithmsg(sum,"rishi");

function check(username, password,) {
    if (username === "rishi" && password === "1234") {
        console.log("login success");
        return "success";
    }
    else{
        console.log("login failed");
        return "failed";
    }
}
 function login(clbk,msg) {
    const result = clbk("rishi", "1234");
    const fresult = "hi" + msg + "your login is  " + result;
    console.log(fresult);
}   
login(check, "rishi");