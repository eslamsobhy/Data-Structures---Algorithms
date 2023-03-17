const one = () => {
  console.log("RUN: function (1)");
  const two = () => {
    console.log("RUN: function (2)");
    const three = () => {
      console.log("RUN: function (3)");
      console.log("Finish of scope (3)");
    };
    three();
    console.log("Finish of scope (2)");
  };
  two();
  console.log("Finish of scope (1)");
};

one();

/*
    CALL STACK:


        three()
        two()
        one()
    |_______________________|


    EXECUTION:

        RUN: function (1)
        RUN: function (2)
        RUN: function (3)
        Finish of scope (3)
        Finish of scope (2)
        Finish of scope (1)

*/

/*
    JavaScript is a single threaded language:
        - It has only one call stack
        - It only can do one thing at a time
        - That's synchronous here: can't execute the next line until the current finishes! (blocking)
        - Multi threaded language may have some issues like: Deadlocks
    
    JavaScript can be non-blocking:
        - Here we use asynchronous behavior!
        - Make the current block of code takes its time executing while it goes to the next line...

*/
