// to get file or folder from given path,we have to require path module and path.basename(dirpath)->it will give file or folder
// to join file in best suitable formate we use path.join(dirpath,adder)
let fs=require("fs")
let path=require("path")
function is_file(dirpath)
{
    return fs.lstatSync(dirpath).isFile()
}
function readcontent(dirpath)
{
    return fs.readdirSync(dirpath)
}
function viewtree(dirpath,indent)
{
    let isFile=is_file(dirpath);
    if(isFile==true)
    {
        console.log(indent,path.basename(dirpath)+"*");// it will print file name in dirpath
    }
    else{
        console.log(indent,path.basename(dirpath));// it will give folder name in curr dirpath
        let children=readcontent(dirpath);
        for(let i=0;i<children.length;i++)
        {
            viewtree(path.join(dirpath,children[i]),indent+"\t")
        }
        
    }
}
function viewFlat(dirpath)
{
    let isFile=is_file(dirpath);
    if(isFile==true)
    {
        console.log(dirpath+"*")
    }
    else{
        // if dirctory path is showing directory
        // then read the content and read content will be children
        let children=readcontent(dirpath)
        console.log(dirpath);
        for(let i=0;i<children.length;i++)
        {
            viewFlat(path.join(dirpath,children[i]));// path.join always join the path in best suitable format
        }
    }
}

function view(dirpath,mode)
{ 
    if(mode=="tree")
    {
      viewtree(dirpath," ")
    }
    if(mode=="flat"){ 
      viewFlat(dirpath)
    }
}
module.exports={
    viewFn:view
}