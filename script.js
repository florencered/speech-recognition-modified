// console.log('working'); 
const texts=document.querySelector(".texts"); 
//const note=document.querySelector(".note") 
//inorder to include speech recognition for lower version of window we need to add the webskit version seperately 
window.SpeechRecognition=window.SpeechRecognition|| window.webkitSpeechRecognition; 
const recognition =new window.SpeechRecognition(); //new object created in javascritpv
recognition.interimResults = true; //will show whatever we speak simulatenously,if false,results would be shown after we complete our speech 
//cretaed a new para 
let div=document.createElement('div');  //Using a div instead of a <p></p> because div elements stack on top of each by default
let listOfRecognitions = []; //Empty array to store the results of the speech recognition
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
	// texts.appendChild(div);
	// listOfRecognitions.push(text);


	if(e.results[0].isFinal){ //if the result is final, we will append the text to the div
		console.log(text);
		//Save each result to an array called listOfRecognitions
		listOfRecognitions.push(text);
		texts.innerHTML = ''; //We need to clear the parent div before appending the new text; otherwise everything will be appended to the same div
		

	alert('session ended,pls speak again!'); 
	 //allowing our web browser to atart recording our voice  
	recognition.addEventListener('result',(ne)=>{
		const newtext=(ne.results[0][0].transcript); 
		//p=document.createElement('p');  
		const space=' '; 
	//for storing the previous value  
	
	// p.innerText=text+space+newtext; 
	
	recognition.start();
	}) 
	//Iterate through the results and create a seperate div element for each result
	listOfRecognitions.map(text => {
		console.log(text);
		let elementalDiv = document.createElement('div'); //Create div
		elementalDiv.className = 'elementalDiv'; //Add class for some styling
		elementalDiv.innerHTML = text; //Set inner html to the result text
		elementalDiv.addEventListener('click', () => { //Creating an event listener which will delete the div from the list when clicked
			listOfRecognitions.splice(listOfRecognitions.indexOf(text), 1); //Remove the result from the array
			elementalDiv.remove(); //Remove the div from the DOM
		})
		texts.appendChild(elementalDiv); //Append div to the parent element
	})
	//alert("exists the loop");
	


}

}) 

//whenever the session ends,isFinal turns true,if it turns true,create a new paragraph 

recognition.addEventListener('end',()=>{
	recognition.start(); //manually starting the speech recogniton every time the session ends 
	
})
recognition.start(); //allowing our web browser to atart recording our voice  
