
    
    let header = document.querySelector('header');
    header.addEventListener('click', function(){
    
        console.log('header clicked!');
        document.body.style.background = 'yellow';
        document.querySelector('header').innerHTML = "Egypt: Although Not the Craddle of Civilization, One of the First!"

    });
    
    
let date = new Date().getDay();
//let date = 6;

console.log(date);

if(date == 0){
    document.body.style.background == 'gray';

} else if (date == 1){
    document.body.style.background = 'lightblue';

} else if (date == 2){
    document.body.style.background = 'lightgreen';
    
} else if (date == 3){
    document.body.style.background = 'lightyellow';
    
} else if (date == 4){
    document.body.style.background = 'purple';
    
} else if (date == 5){
    document.body.style.background = 'red';
    
} else if (date == 6){
    document.body.style.background = 'orange';
    
}











    //let para=document.createElement('p');
    //para.textContent="JavaScript is fun!";
    //sect.appendChild(para);

    //para.style.color='red'
    //para.style.background='yellow'
   //para.style.padding='10px'
   // para.style.width='250px'
   // para.style.textAlign='center'
    
   // let button = document.getElementById('myButton');
   // let button2 = document.getElementById('myButton2');
    
   // myButton.addEventListener('click', function(){
    
        //console.log('clicked!');
        //document.body.style.background = 'purple';
        
  //  });

   // myButton2.addEventListener('click', function(){
    
       //console.log('clicked!');
      //  document.body.style.background = 'white';

    //});
