const a=document.getElementsByClassName("btn");
//const b=document.getElementByClassName("box");
const b=document.getElementsByClassName("box");


for (let i=0;i<a.length;i++)
{


  a[i].addEventListener("click",function(){
    console.log(`a${a[i]} clicked`);
  b.className="box"+i;
  });



}

function Change(){

  const a=document.getElementsByClassName("btn");
  const b=document.getElementsByClassName("box");
  for(let i in b)
  {
 i.className='box'+i;
 console.log(b);
  }

}
// b.addEventListener("click",function(){
//   console.log("b clicked");
//   b.className="box2";
//   });
// c.addEventListener("click",function(){
//   console.log("a clicked");
//     c.className="box3";
//     });


