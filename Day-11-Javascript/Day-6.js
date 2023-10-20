//nested for loops

var main_menu=['Tea','Coffee','Soft Drinks'];
var sub_menu=[['Black tea','Green tea'],['Hot coffee','Cold coffee'],['Coca cola','Sprite']];

for(i=0;i<main_menu.length;i++){
    console.log(main_menu[i] + ":");
    for(j=0;j<sub_menu[i].length;j++){
        console.log(sub_menu[i][j]);
    }
        
}
