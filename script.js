console.log('working'); 
const texts=document.querySelector(".texts"); 
//const note=document.querySelector(".note") 
//inorder to include speech recognition for lower version of window we need to add the webskit version seperately 
window.SpeechRecognition=window.SpeechRecognition|| window.webkitSpeechRecognition; 
const recognition =new window.SpeechRecognition(); //new object created in javascritpv
recognition.interimResults = true; //will show whatever we speak simulatenously,if false,results would be shown after we complete our speech 
//cretaed a new para 
let p=document.createElement('p'); 
//creating an event listener to detect voice 
recognition.addEventListener('result',(e)=>{ 
	const text=(e.results[0][0].transcript);  
	const array=Array.from(e.results);
	/*result.map(result=>result[0]); 

	result.map(result=>result.transcript); 
	.join("");*/ 

	

	/*console.log(text);
	note.innerText=text;*/ 
	/*texts.appendChild(p);*/ 
	p.innerText=text; 
	texts.appendChild(p);

	if(e.results[0].isFinal){ 
	alert('session ended,pls speak again!'); 
	 //allowing our web browser to atart recording our voice  
	recognition.addEventListener('result',(ne)=>{
		const newtext=(ne.results[0][0].transcript); 
		//p=document.createElement('p');  
		console.log(newtext); 
		const space=' '; 
	//for storing the previous value  
	
	p.innerText=text+space+newtext; 
	
	recognition.start();
	}) 
	//alert("exists the loop");
	


}



}) 

//whenever the session ends,isFinal turns true,if it turns true,create a new paragraph 

recognition.addEventListener('end',()=>{
	recognition.start(); //manually starting the speech recogniton every time the session ends 
	
})
recognition.start(); //allowing our web browser to atart recording our voice  
