//*Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.

// Menu Face Paint 

//Class Face
    //Design
    //faceType
class Face {
    constructor (design, faceType){
        this.design = design;
        this.faceType = faceType;
    }
}

// Class Menu

 class Menu { 
     constructor(){ 
        //Faces Array
        this.faces =[];
    }

    //See a menu

    //add Face
        //prompt for a design
        //prompt for a faceType
        //create new Face and push Face into array
addFace(){
    let faceDesign = prompt("Enter Face Design:");
    let faceType = prompt("Full Face or Half Face?");
    this.faces.push(new Face(faceDesign, faceType));
}

    //delete  Face
deleteFace(){
    let faceIndex = prompt("Enter design index to DELETE:");
    this.faces.splice(faceIndex, 1);
}
    //view face
viewFaces(){
    let displayFaces ='';
    for(let i=0; i< this.faces.length; i++){
        displayFaces +=  `
    ${i}) ${this.faces[i].design} ${this.faces[i].faceType}`

    }

alert(`
    Faces:

    ${displayFaces}
    `);
}
    
    showMainMenu(){
        return prompt(`
            Main Menu:
            -------------
            0) Exit Menu
            1) Add Face
            2) Delete Face
            3) View Faces
            `);
    }
    //start the menu
start(){
    let selection = this.showMainMenu();

    while(selection != 0){

        switch(selection){

            case "1": this.addFace();
            break;

            case "2": this.deleteFace();
            break;

            case "3": this.viewFaces();
            break;

            default: selection =0;

        }
        selection = this.showMainMenu();
    }
    alert("Existing Menu...Goodbye!");
}
}
//instantiate the menu and invoke the start method


let face1 = new Face ("Tiger","Full Face");
console.log(face1);

let menu = new Menu();

//menu.addFace();
//menu.addFace();
//menu.viewFaces();
//menu.deleteFace();

//menu.showMainMenu();

menu.start();