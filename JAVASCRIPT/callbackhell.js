function test1(cb) {
    setTimeout(() => {
        console.log("Task1");
        cb();
    }, 4000);
}

function test2(cb) {
    setTimeout(() => {
        console.log("Task2");
        cb();
    }, 2000);
}

function test3(cb) {
    setTimeout(() => {
        console.log("Task3");
        cb();
    }, 200);
}

function test4(cb) {
    setTimeout(() => {
        console.log("Task4");
        cb();
    }, 100);
}

// Callback Hell
test1(() => {
    test2(() => {
        test3(() => {
            test4(() => {
                test1(() => {
                    test2(() => {
                        test3(() => {
                            test4(() => {
                                console.log("All tasks completed");
                            });
                        });
                    });
                });
            });
        });
    });
});