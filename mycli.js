/*
there are some steps way to link file that are stored at some other location
1)there is inbuid keyword module.exports={},that is export which file you want to use 
2)require() is node js module ,that is used in current main file
3)syntax of require("./path name")
4)we can call directly object key
5)we can call using.notation
*/
let {viewFn}=require("./command/view.js")
let {helpFn}=require("./command/help.js")
let{orgFn}=require("./command/organize.js")
let input=process.argv.slice(2)
let cmd=input[0]
// in js there is a way to write multiple line string->`lin1
                                                    // lin2`
switch(cmd)
{
    case"view":{
        viewFn(input[1],input[2])
      break
    }

    case "help":{
         helpFn()
        break;

    }
    case "organize":{
       orgFn(input)
       break;
    }  
    default:{
      console.log("invalid command")
      break
    }
}                                                    