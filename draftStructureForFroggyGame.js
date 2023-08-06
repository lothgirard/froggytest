// some imports idk yet what though probably the folder and react
import React, { useState } from 'react';
import './assets/scss/sassOutlineForFroggyGame.scss';


function FroggyDressUp() {

	const [bgState, setBgState] = useState("bg0");
	const [hatState, setHatState] = useState("hat0");
	const [bodyState, setBodyState] = useState("body0");
	const [accState, setAccState] = useState("acc0");
	const [faceState, setFaceState] = useState("face0");
	const [creditState, setCreditState] = useState("credit0");
	const [gridState, setGridState] = useState("bgs0");
	
	function makeGrid(elements) {
		/*check number of elements <= 9
		 *if == 9, make grid normally, else
		 *fill as much as you can
		 setGridState("bgs0")
		 */
		
	}
	
	function selectTab(name) {
		/*when the user clicks a tab, we use this function
		 *to switch to the 0th tab of that category
		 *would look something like:
		 setGridState(name);
		 */
		
	}
	
	function saveImage() {
		/*idk how this would work, will need to be googled
		 *but i feel like it's important
		 saveToUserComputerWhichWeDefinitelyHaveAccessTo(); 
		 */
		
	}
	
	return (
		//here comes the html,
		<div className="FroggyDressUp">
			<div id="frogContainer">
				<div id="frog"> /* this has id background in the tutorial but idk if that's strictly necessary */
					<div id="frogbody"></div>
					<input type="button" value="BG" id="BGButton" onClick={() => selectTab("bgs")}/>
					/*
					 *put in all the body parts here
					 */
				</div>
			</div>
			
			<div id="optionContainer">
				<div id="grid">
					<div id="gridbody"></div>
					/*make the grid*/
				</div>
			</div> 
			
			
			<input type="button" value="HAT" id="HATButton" onClick={() => selectTab("hats")}/>
			<input type="button" value="BODY" id="BODYButton" onClick={() => selectTab("bodys")}/>
			<input type="button" value="ACC" id="ACCButton" onClick={() => selectTab("accs")}/>
			<input type="button" value="FACE" id="FACEButton" onClick={() => selectTab("faces")}/>
			<input type="button" value="C" id="CButton" onClick={() => selectTab("cs")}/>
			
			/*possibly this:*/
			<input type="button" value="SAVE" id="SAVEButton" onClick={() => saveImage()}/>
		</div>

	);
}
	
	
	
	
	