  
function organizeExcuter(input)
{
    // here we have to organize the file
let types={
    media:["mp4","mp3","mkv"],
    document:["docx","doc","pdf","xslx","xls","odt","odp","ods","odg","odf","txt","tex","ps"],
    archive:["zip","7z","rar","tar","gz","ar","iso","xz"],
    app:["exe","dmg","pkg","deb"]
    
}
let path=require("path");
let fs=require("fs");
function is_file(dirpath)
{
  return  fs.lstatSync(dirpath).isFile();
}
function readcontent(dirpath)
{
  return  fs.readdirSync(dirpath);
}
function dircreator(dirname)
{
  if(fs.existsSync(dirname)==false)
  {
      fs.mkdirSync(dirname);
  }
}
let orgdirpath=path.join(input[1],"organize file");
dircreator(orgdirpath);
for(let key in types)
{
    let innerdirpath=path.join(orgdirpath,key);
    dircreator(innerdirpath);
}
let otherdirpath=path.join(orgdirpath,"others");
dircreator(otherdirpath);
function copy(src,dest)
{let orgfilename=path.basename(src);
    let destfilepath=path.join(dest,orgfilename);
    fs.copyFileSync(src,destfilepath);// to copy file in to folder
}
function extensionmaker(dirpath)
{
    // here we have to copy the file in to expected related foleder
    let str=dirpath.split(".");
    let ext=str.pop();

    for(let key in types)
    {
        for(let j=0;j<types[key].length;j++)
        {
            if(types[key][j]==ext)
            {
              return key
            }
        }
    }
    return "others";
}
function travsal(dirpath)
{
    let isFile=is_file(dirpath);
    if(isFile==true)
    {
       //console.log(path.basename(dirpath)+"*");
      let foldername= extensionmaker(dirpath);
       console.log(dirpath+"->"+foldername)
       let destfile=path.join(orgdirpath,foldername);
       copy(dirpath,destfile);
    }
    else{
        let children=readcontent(dirpath);
        for(let i=0;i<children.length;i++)
        {
            travsal(path.join(dirpath,children[i]));
        }
    }
}
let org=input[2];
travsal(org);
}
module.exports={
    orgFn:organizeExcuter
}