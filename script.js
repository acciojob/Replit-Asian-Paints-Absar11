//your JS code here. If required.
const blockId = document.getElementById("block_id");
const colourId = document.getElementById("colour_id");
const change_btn = document.getElementById("change_button");
const resetBtn = document.getElementById("reset");

change_btn.addEventListener("click", ()=> {
	let block = blockId.value;
	let color = colourId.value;
	console.log("block and color is:  ", block, color)
	if(!block || !color){
		alert("Please choose both block and color"); 
		return;
	} 

	if(block > 9){
		alert("Please choose block between 1 and 9");
		return;
	}


	document.querySelectorAll(".grid-item").forEach((item) => {
		item.style.backgroundColor = "transparent";
	})

	const changeBlock = document.getElementById(block);
	changeBlock.style.backgroundColor = color;
})

resetBtn.addEventListener("click", ()=> {
	 document.querySelectorAll('.grid-item').forEach((item) => {
        item.style.backgroundColor = 'transparent';
    });
    blockId.value = '';
    colourId.value = '';
})