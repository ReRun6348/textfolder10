let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("aboutE").innerHTML = myObj.name + " birthday is " + myObj.birthday;
  }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();

let newBio = new XMLHttpRequest();
newBio.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myObj2 = JSON.parse(this.responseText);
        document.getElementById("btn").addEventListener("click", function (){
        document.getElementById("eBio").innerHTML = myObj2.bio; 
        })
    }
        
};
newBio.open("GET", "einstein.json", true)
newBio.send();