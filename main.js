var images = ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Happy_Cartoon_Man_Using_A_Smartphone.svg/791px-Happy_Cartoon_Man_Using_A_Smartphone.svg.png", "https://previews.123rf.com/images/vectorkif/vectorkif1904/vectorkif190400179/121610276-concept-of-modern-young-business-woman-cartoon-character-businesswoman-holds-folder-and-documents-ve.jpg", "https://w7.pngwing.com/pngs/96/861/png-transparent-boy-cartoon-child-hat-boy-painted-hand-toddler-thumbnail.png"];
var names = ["Gaurav Jain", "Arti Jain", "Arav Jain"];
var i = 0;

function nextfamilymember(){ 
    document.getElementById("name").innerHTML=names[i];
    document.getElementById("images").src=images[i];
    document.getElementById("audio").play();
    i++;
   }