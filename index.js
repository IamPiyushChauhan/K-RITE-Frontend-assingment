const dwList = document.getElementById("folders-list");

const data = [
    { item: "Product", menu: ["RoadMap","Feedback","Perfomace","Team","Analytics"] },
    { item: "Sales", menu: ["Four", "Five", "Six"] },
    { item: "Design", menu: ["Four", "Five", "Six"] },
  ];

  const isOpen = [false, false, false];

  for (let i = 0; i < data.length; i++) {
    let mainChild = document.createElement("div");
    let childDiv = document.createElement("div");
    childDiv.className = "folder-info";

    let childNameDiv = document.createElement("div");
    childNameDiv.className = "folder-name";
    
    //folder image
    let folderImage = document.createElement("img");
    folderImage.src = "images/folder.png"
    childNameDiv.appendChild(folderImage)
    //folder name
    let folderName = document.createElement("div");
    folderName.className = "folder-main-title";
    folderName.innerHTML = data[i].item;
    childNameDiv.appendChild(folderName)
    //dropdown image
    let dropdownImage = document.createElement("img");
    dropdownImage.src = "images/caret-down.png"
    
    childDiv.appendChild(childNameDiv);
    childDiv.appendChild(dropdownImage);
    console.log(childDiv)


    let nestedChildDiv = document.createElement("div");
    nestedChildDiv.style.display = "none";
    nestedChildDiv.className = "dw";

    for(let j=0;j<data[i].menu.length;j++){
        let nestedMenuName = document.createElement("div");
        nestedMenuName.className = "nested-menu-name"
        nestedMenuName.innerHTML = data[i].menu[j]
        nestedChildDiv.appendChild(nestedMenuName);
    }

    childDiv.addEventListener("click", function (event) {
        
        if (isOpen[i]) {
          isOpen[i] = false;
          nestedChildDiv.style.display = "none";
        } else {
          isOpen[i] = true;
          nestedChildDiv.style.display = "block";
        }
      });
      mainChild.appendChild(childDiv);
      mainChild.appendChild(nestedChildDiv);
    dwList.appendChild(mainChild);
  }
