let colorPickerContainer = document.getElementById("colorPickerContainer");
let selectedColorHexcode = document.getElementById("selectedColorHexcode");

function changetoGreyAndUpdateText(){
    colorPickerContainer.style.backgroundColor = "#e0e0e0";
    selectedColorHexcode.textContent = "#e0e0e0";
}

function changetoGreenAndUpdateText(){
    colorPickerContainer.style.backgroundColor = "#6fcf97";
    selectedColorHexcode.textContent = "#6fcf97";
}

function changetoBlueAndUpdateText(){
    colorPickerContainer.style.backgroundColor = "#56ccf2";
    selectedColorHexcode.textContent = "#56ccf2";
}

function changetoVioletAndUpdateText(){
    colorPickerContainer.style.backgroundColor = "#bb6bd9";
    selectedColorHexcode.textContent = "#bb6bd9";

}