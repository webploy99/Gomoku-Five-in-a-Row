
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/gomoku-five-in-a-row/id6499569513";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/45/17/56/4517561c-92c8-93d9-6caf-ffdc885a9aa8/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  image2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  image3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  image4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  image5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8b/3f/1b/8b3f1ba2-8b24-28ff-94d3-e9af16162ce6/7dc4291d-c48b-4421-b9a4-ac0dac5f275e_IOS-Description-meng-chhy_11.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/1b/91/1f/1b911f10-46c5-2936-279d-95122277cde0/50fe71dc-4249-47da-97aa-9b98156759ed_IOS-Description-meng-chhy_12.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/05/5b/69/055b6919-bf45-820a-4af0-52060b53da28/70f52137-5063-4684-96d1-23df20d7ec2c_IOS-Description-meng-chhy_13.jpg/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3

