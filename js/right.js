function inputvalue(inputid){
    const inputi=document.getElementById(inputid).value;
    const values=inputi;
   return values;
}
function textvalue(elementid){
    const textid=document.getElementById(elementid).innerText;
    const texts=parseFloat(textid);
    return texts;
} 
function setelement(elementid,total){
    const set= document.getElementById(elementid);
    set.innerText=total;
}
document.getElementById('apply-btn').addEventListener('click',function(){
    const inputvalues=inputvalue('input');
    const totalprize=textvalue('total-1')
    if(inputvalues==='SELL200' && totalprize>=200){
    const disprize=totalprize*0.2;

    setelement('total-2',disprize.toFixed(2));
    const discoustless=textvalue('total-2')
    const minus=totalprize-discoustless
    setelement('total-3',minus.toFixed(2));
    }
})



document.getElementById('card-1').addEventListener('click',function(){
    const newvalues = textvalue('tk1');
    const previousvalue = textvalue('total-1');
    
    const totals=previousvalue+newvalues;
    setelement('total-1',totals.toFixed(2)) ; 
    const ulcontainer=document.getElementById('list')
   const li3=document.createElement('li')
   li3.innerText='K. Accessories'
    const setting=ulcontainer.appendChild(li3)  ;
 })



 document.getElementById('card-2').addEventListener('click',function(){
    const newvalues = textvalue('tk2');
    const previousvalue = textvalue('total-1');
    const totals=previousvalue+newvalues;
    setelement('total-1',totals.toFixed(2)) ;
    const ulcontainer=document.getElementById('list')
   const li3=document.createElement('li')
   li3.innerText='K. Accessories'
    const setting=ulcontainer.appendChild(li3)
 })



 document.getElementById('card-3').addEventListener('click',function(){
    const newvalues = textvalue('tk3');
    const previousvalue = textvalue('total-1');
    const totals=previousvalue+newvalues;
    setelement('total-1',totals.toFixed(2)) ;
    const ulcontainer=document.getElementById('list')
   const li3=document.createElement('li')
   li3.innerText='Home Cooker'
    const setting=ulcontainer.appendChild(li3) 
 })



 document.getElementById('card-4').addEventListener('click',function(){
    const newvalues = textvalue('tk4');
    const previousvalue = textvalue('total-1');
    const totals=previousvalue+newvalues;
    setelement('total-1',totals.toFixed(2)) ;
    const ulcontainer=document.getElementById('list')
   const li3=document.createElement('li')
   li3.innerText='Sports Back Cap'
   ulcontainer.appendChild(li3) 
 })



 document.getElementById('card-5').addEventListener('click',function(){
    const newvalues = textvalue('tk5');
    const previousvalue = textvalue('total-1');
    const totals=previousvalue+newvalues;
    setelement('total-1',totals.toFixed(2)) ;
    const ulcontainer=document.getElementById('list')
   const li3=document.createElement('li')
   li3.innerText='Full Jersey Set'
    const setting=ulcontainer.appendChild(li3)  
 })



 document.getElementById('card-6').addEventListener('click',function(){
    const newvalues = textvalue('tk6');
    const previousvalue = textvalue('total-1');
    const totals=previousvalue+newvalues;
    setelement('total-1',totals.toFixed(2)) ;
    const ulcontainer=document.getElementById('list')
   const li3=document.createElement('li')
   li3.innerText='Sports cates'
    const setting=ulcontainer.appendChild(li3) 
 })


 
 document.getElementById('card-1').addEventListener('click',function(){
   const the=textvalue('total-1');
   const applybtn=document.getElementById('apply-btn');
   if(the>=200){
      applybtn.disabled=false
      }else{
         applybtn.disabled=true
      
      }
 })



 document.getElementById('card-2').addEventListener('click',function(){
   const the=textvalue('total-1');
   const applybtn=document.getElementById('apply-btn');
   if(the>=200){
      applybtn.disabled=false
      }else{
         applybtn.disabled=true
      
      }
 })



 document.getElementById('card-3').addEventListener('click',function(){
   const the=textvalue('total-1');
   const applybtn=document.getElementById('apply-btn');
   if(the>=200){
      applybtn.disabled=false
      }else{
         applybtn.disabled=true
      
      }
 })



 document.getElementById('card-4').addEventListener('click',function(){
   const the=textvalue('total-1');
   const applybtn=document.getElementById('apply-btn');
   if(the>=200){
      applybtn.disabled=false
      }else{
         applybtn.disabled=true
      
      }
 })



 document.getElementById('card-5').addEventListener('click',function(){
   const the=textvalue('total-1');
   const applybtn=document.getElementById('apply-btn');
   if(the>=200){
      applybtn.disabled=false
      }else{
         applybtn.disabled=true
      
      }
 })



 document.getElementById('card-6').addEventListener('click',function(){
   const the=textvalue('total-1');
   const applybtn=document.getElementById('apply-btn');
   if(the>=200){
      applybtn.disabled=false
      }else{
         applybtn.disabled=true
      
      }
 })
 
 document.getElementById('go-home').addEventListener('click',function(){
   window.location.href='index.html'
   
 })
 