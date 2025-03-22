const body = document.body;
const html = document.documentElement;
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
  html.style.cssText = ` 
     height:100%;
  `;
  body.style.cssText = `
     background-color: #141414;
     display:flex;
     justify-content:center;
     height:100%;
    `;
}

function createCard() {
  const links=["GitHub"," Frontend Mentor","LinkedIn","Twitter","Instagram"]
  const div = document.createElement("div");
  div.style.cssText = `
     margin-top:50px;
     width: 384px;
     border-radius:12px;
     background-color:#1F1F1F;
     padding:40px;
     height:550px;
      `;

  const avatar = document.createElement("img");
  avatar.src = "./profile-pic.png";
  avatar.style.cssText = `
     display:flex;
     justify-content:center;
     margin-left:auto;
     margin-right:auto;
     margin-bottom:24px;
  `;

  const title = document.createElement("h1");
  title.innerText = "Jessica Randall";
  title.style.cssText = `
     text-align: center;
     color:#FFFFFF;
     font-size: 24px;
     margin-bottom:4px;
  `;

  const address = document.createElement("h3");
  address.innerText = "London, United Kingdom";
  address.style.cssText = `
     color:#C4F82A;
     text-align: center;
     margin-bottom:24px;
 `;

  const desc = document.createElement("p");
  desc.innerText = `"Front-end developer and avid reader."`;
  desc.style.cssText = `
     color:#FFFFFF;
     text-align: center;
     margin-bottom:24px;
 `;

  const ul = document.createElement("ul");
  ul.style.cssText = `
     list-style:none;
     margin-right:40px;
     display:flex;
     flex-direction:column;
     gap:16px
`;
links.forEach((el)=>{
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.innerText =el;
    link.style.cssText = `
     display:block;
     text-align: center;
     padding:12px;
     color:white;
     background-color:#333333;
     border-radius:8px;
  `;
  
  li.append(link);
  ul.append(li);
  
})
 
  div.append(avatar, title, address, desc, ul);
  body.append(div);
}

function linkNextPage(){

   const a=document.createElement("a")
   a.href="./homework/index.html"
   a.textContent="Next Page"
   a.style.cssText=`
   text-decoration:none;
   color:white;
   margin-right:-50px;
   margin-top:700px;
 `
 body.appendChild(a)
}
styleBody();
createCard();
linkNextPage()