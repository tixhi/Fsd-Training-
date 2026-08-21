// // const sum = (a, b) => a + b;

// // function sumwithmsg(clbk,msg)
// // {
// // const result = clbk(10,20);
// // const fresult = "hi" + msg + "your score is  " + result;
// // console.log(fresult);
// // }
// // sumwithmsg(sum,"rishi");

// function check(username, password,) {
//     if (username === "rishi" && password === "1234") {
//         console.log("login success");
//         return "success";
//     }
//     else{
//         console.log("login failed");
//         return "failed";
//     }
// }
//  function login(clbk,msg) {
//     const result = clbk("rishi", "1234");
//     const fresult = "hi" + msg + "your login is  " + result;
//     console.log(fresult);
// }   
// login(check, "rishi");


function getuser (userid, callback)
{
    console.log("fetching user from database");
    setTimeout(() => {
        console.log("fetched user from database");
        callback({userid: userid, username: "rishi"});
    }, 2000);
}
 function getOrders (user, callback)
{
    console.log("fetching orders for user " + user.username);   
}
function processOrders (userorders, callback)
{
    console.log("processing orders for user " + userorders.username);   
}

getUser (userid, (user))
{
    getOrders ( user, (userorders))
    {
        processOrders (userorders, (processedorders))
        {
            console.log("processed orders are " + processedorders);
        }
    } 
}