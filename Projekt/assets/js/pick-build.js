const arrRahmen = ["rahmen.png", "rahmen1.png", "rahmen2.png","rahmen3.png","rahmen4.png"];
const arrRahmenPrise=[10,80,60,40,100];
const arrRaeder = ["reder.png", "reder1.png", "reder2.png", "reder3.png","reder4.png"];
const arrRaederPrise=[100,800,600,400,200];
const arrSattle = ["cover.png", "cover1.png", "cover2.png", "cover3.png"];
const arrSattlePrise=[50,100,250,30];
const arrSitz = ["sitz.png", "sitz1.png", "sitz2.png"];
const arrSitzPrise=[10,80,60];
const rhamenbtn=document.getElementById("rahmen_btn");
const raederbtn=document.getElementById("räder_btn");
const sattlebtn=document.getElementById("sattle_btn");
const sitzbtn=document.getElementById("sitz_btn");
const submit=document.getElementById("btn_chang");
const erg=document.getElementById("erg");
const finalProduckt = [1,2,3,4];
// ["./assets/images/bikes/rahmen/rahmen.png","./assets/images/bikes/cover/cover.png","./assets/images/bikes/reder/reder.png","./assets/images/bikes/sitz/sitz.png"]
const imageContainer = document.getElementById("imageContainer");
var functions=[zeigeRhamenBilder,zeigeSattleBilder,zeigeRaederBilder,zeigeSitzBilder]
var aktuelleFunctionIndex = 0;
function zeigeRhamenBilder() {
    imageContainer.innerHTML = "";
    arrRahmen.forEach((bild,index) => {
    const imgWrapper = document.createElement("div");
    imgWrapper.setAttribute("class", "image-wrapper");

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", 'assets/images/bikes/rahmen/'+bild);
    imgElement.setAttribute("id",`rahmen_${index}`)
    imgWrapper.appendChild(imgElement);

    const priceElement = document.createElement("p");
    priceElement.textContent = "Price: $" + arrRahmenPrise[index];
    imgWrapper.appendChild(priceElement);

    imageContainer.appendChild(imgWrapper);

    aktuelleFunctionIndex=0;  // für next and previous
    imgElement.addEventListener("click", function() {
    const selectedSrc = this.getAttribute("src");
    img_click(imgWrapper) ;
    // finalProduckt.push(selectedSrc);
    finalProduckt[0]=selectedSrc;
    });
    });
  }
  function img_click(img) {
    let img_activ = document.getElementsByClassName("img_click")[0];
      img_activ?img_activ.classList.remove("img_click"):console.log("object");
      img.setAttribute("class",`img_click`);
      console.log(finalProduckt);
  }

  function zeigeRaederBilder() {
    imageContainer.innerHTML = "";
    arrRaeder.forEach((bild,index) => {
    const imgWrapper = document.createElement("div");
    imgWrapper.setAttribute("class", "image-wrapper");

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", 'assets/images/bikes/reder/'+bild);
    imgElement.setAttribute("id",`raeder_${index}`)
    imgWrapper.appendChild(imgElement);

    const priceElement = document.createElement("p");
    priceElement.textContent = "Price: $" + arrRaederPrise[index];
    imgWrapper.appendChild(priceElement);

    imageContainer.appendChild(imgWrapper);
    aktuelleFunctionIndex=2;
    imgElement.addEventListener("click", function() {
    const selectedSrc = this.getAttribute("src");
    img_click(imgWrapper) ;
    // finalProduckt.push(selectedSrc)
    finalProduckt[2]=selectedSrc;
    });
    });
  }
  function zeigeSattleBilder() {
    imageContainer.innerHTML = "";
    arrSattle.forEach((bild,index) => {
    const imgWrapper = document.createElement("div");
    imgWrapper.setAttribute("class", "image-wrapper");

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", 'assets/images/bikes/cover/'+bild);
    imgElement.setAttribute("id",`sattle_${index}`)
    imgWrapper.appendChild(imgElement);

    const priceElement = document.createElement("p");
    priceElement.textContent = "Price: $" + arrSattlePrise[index];
    imgWrapper.appendChild(priceElement);

    imageContainer.appendChild(imgWrapper);
    aktuelleFunctionIndex=1;
    imgElement.addEventListener("click", function() {
    const selectedSrc = this.getAttribute("src");
    img_click(imgWrapper) ;
    // finalProduckt.push(selectedSrc)
    finalProduckt[1]=selectedSrc;
    });
    });
  }
  function zeigeSitzBilder() {
    imageContainer.innerHTML = "";
    arrSitz.forEach((bild,index) => {
    const imgWrapper = document.createElement("div");
    imgWrapper.setAttribute("class", "image-wrapper");

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src",'assets/images/bikes/sitz/'+ bild);
    imgElement.setAttribute("id",`sitz_${index}`);
    imgWrapper.appendChild(imgElement);

    const priceElement = document.createElement("p");
    priceElement.textContent = "Price: $" + arrSitzPrise[index];
    imgWrapper.appendChild(priceElement);

    imageContainer.appendChild(imgWrapper);
    aktuelleFunctionIndex=3;
    imgElement.addEventListener("click", function() {
    const selectedSrc = this.getAttribute("src");
    img_click(imgWrapper) ;
    // finalProduckt.push(selectedSrc)
    finalProduckt[3]=selectedSrc;

    });
    });

  }
  function next() {

    if (aktuelleFunctionIndex < functions.length) {
         aktuelleFunctionIndex++;
        functions[aktuelleFunctionIndex]();
  }
}
  function previous() {
    if (aktuelleFunctionIndex > 0) {
      aktuelleFunctionIndex--;
      functions[aktuelleFunctionIndex]();
    }
  }

  function createProduckt(){
    console.log(finalProduckt);
    erg.innerHTML="";
    finalProduckt.forEach((bild,index) => {
    const extractedStr = bild.split("/")[3];
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", bild);
    if (extractedStr) {
    imgElement.setAttribute("id", extractedStr);
    }
    erg.appendChild(imgElement);
    });
    }
    neu_beginnen.addEventListener("click",function() {
      erg.innerHTML=`<img src="assets/images/bikes/rahmen/rahmen.png" alt="Rahmen" id="rahmen" />
       <img src="assets/images/bikes/cover/cover.png" alt="Cover" id="cover" />
      <img src="assets/images/bikes/reder/reder.png" alt="Reder" id="reder" />
      <img src="assets/images/bikes/sitz/sitz.png" alt="Sitz" id="sitz" />
      `
    });
  btn_chang.addEventListener("click", createProduckt);
  rahmen_btn.addEventListener("click", zeigeRhamenBilder);
  räder_btn.addEventListener("click", zeigeRaederBilder);
  sattle_btn.addEventListener("click", zeigeSattleBilder);
  sitz_btn.addEventListener("click", zeigeSitzBilder);
  next_btn.addEventListener("click", next);
  previous_btn.addEventListener("click", previous);
