const body = document.body;
const general = `
<style>
*{
     padding: 0;
     margin: 0;
     box-sizing: border-box;
}
</style>
`;
function styleBody() {
  body.style.cssText = `
     display:flex;
     justify-content:center;
     height:100%;
    background-color: blue;
    `;
}

function addCards() {
  const div = document.createElement("div");
  div.style.cssText = `
  border-radius:80px;
   display:flex;
   
    width:100%
   flex-wrap:wrap;
  `;
  const div1 = document.createElement("div");
  div1.style.cssText = `
      background-color: #E28625;
      padding:48px
    `;

  const img = document.createElement("img");
  img.src = "images/sedan.svg";
  img.style.cssText = `
    margin-bottom:35px;
    width:64px;
    `;

  const title = document.createElement("h1");
  title.innerText = "Sedans";
  title.style.cssText = `
   font-family: 'Big Shoulders';
  font-weight: 700;
     text-align: left;
     color:#FFFFFF;
     font-size: 48px;
     margin-bottom:25px;
  `;

  const desc = document.createElement("p");
  desc.innerText =
    "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.";
  desc.style.cssText = `
   font-family: 'Lexend Deca';
  font-weight: 400;
    color:#FFFFFF;
    width:212px;
    font-size:15px;
    line-height:25px;
    margin-bottom:83px;
  `;
  const button = document.createElement("button");
  button.innerText = "Learn More";
  button.style.cssText = `
   padding: 11.5px 31.5px;
    font-family: 'Lexend Deca';
  font-weight: 400;
   color:#E28625;
  border-radius:25px;
  border:none;
  font-size:15px;
  line-height:25px;
  `;

  const div2 = document.createElement("div");
  div2.style.cssText = `
      background-color:#006971;
      padding:48px
    `;

  const img2 = document.createElement("img");
  img2.src = "images/suvs.svg";
  img2.style.cssText = `
    margin-bottom:35px;
    width:64px;
    `;

  const title2 = document.createElement("h1");
  title2.innerText = "SUVS";
  title2.style.cssText = `
     text-align: left;
      font-family: 'Big Shoulders';
     font-weight: 700;
     color:#FFFFFF;
     font-size: 48px;
     margin-bottom:25px;
  `;

  const desc2 = document.createElement("p");
  desc2.innerText =
    "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.";
  desc2.style.cssText = `
    font-family: 'Lexend Deca';
  font-weight: 400;
    color:#FFFFFF;
    width:212px;
    font-size:15px;
    line-height:25px;
    margin-bottom:83px;
  `;
  const button2 = document.createElement("button");
  button2.innerText = "Learn More";
  button2.style.cssText = `
   font-family: 'Lexend Deca';
  font-weight: 400;
   padding: 11.5px 31.5px;
   color:#006971;
  border-radius:25px;
  border:none;
  font-size:15px;
  line-height:25px;
  `;

  const div3 = document.createElement("div");
  div3.style.cssText = `
      background-color:#004140;
      padding:48px
    `;

  const img3 = document.createElement("img");
  img3.src = "images/luxury.svg";
  img3.style.cssText = `
    margin-bottom:35px;
    width:64px;
    `;

  const title3 = document.createElement("h1");
  title3.innerText = "LUXURY";
  title3.style.cssText = `
     text-align: left;
      font-family: 'Big Shoulders';
      font-weight: 700;
     color:#FFFFFF;
     font-size: 48px;
     margin-bottom:25px;
  `;

  const desc3 = document.createElement("p");
  desc3.innerText =
    "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ";
  desc3.style.cssText = `
    font-family: 'Lexend Deca';
  font-weight: 400;
    color:#FFFFFF;
    width:212px;
    font-size:15px;
    line-height:25px;
    margin-bottom:83px;
  `;
  const button3 = document.createElement("button");
  button3.innerText = "Learn More";
  button3.style.cssText = `
   font-family: 'Lexend Deca';
  font-weight: 400;
   padding: 11.5px 31.5px;
   color:#004140;
  border-radius:25px;
  border:none;
  font-size:15px;
  line-height:25px;
  `;

  div3.append(img3, title3, desc3, button3);
  div2.append(img2, title2, desc2, button2);
  div1.append(img, title, desc, button);
  div.append(div1, div2, div3);
  body.append(div);
}

addCards();
styleBody();
