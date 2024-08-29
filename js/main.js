//main project tab
function openTab(evt, tabName) {
  var i, tabContent, tabButtons;

  tabContent = document.getElementsByClassName('tab-content');
  tabButtons = document.getElementsByClassName('tab-button');

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].className = tabButtons[i].className.replace(' active', '');
  }

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';

}


$(document).ready(function(){
    var video = document.getElementById("myVideo");
    
    video.addEventListener("play", function() {
        video.currentTime = 7;
    });

    video.play();
});
























//nav 
function handleLinkClick(event) {
  event.preventDefault(); // 留곹겕�� 湲곕낯 �숈옉(�섏씠吏� �대룞)�� 留됱뒿�덈떎.
  
  var links = document.querySelectorAll(".nav-link");
  
  // 紐⑤뱺 留곹겕 �붿냼�먯꽌 �대옒�� �쒓굅
  links.forEach(function(link) {
    link.classList.remove("highlight");
  });
  
  // �대┃�� 留곹겕�먮쭔 �대옒�� 異붽�
  event.target.classList.add("highlight");
  
  // �섏씠吏� �대룞
  window.location.href = event.target.href;
}

// 紐⑤뱺 留곹겕 �붿냼瑜� �좏깮�⑸땲��.
var links = document.querySelectorAll(".nav-link");

// 媛� 留곹겕 �붿냼�� �대┃ �대깽�� 由ъ뒪�덈� 異붽��⑸땲��.
links.forEach(function(link) {
  link.addEventListener("click", handleLinkClick);
});





//totop 踰꾪듉
 function toggleTotopButton() {
  var totopButton = document.getElementById("totop");
  if (document.documentElement.scrollTop > 300) {
    totopButton.style.opacity = "1";
  } else {
    totopButton.style.opacity = "0";
  }
}

// �곷떒�쇰줈 �ㅽ겕濡ㅽ븯�� �⑥닔
function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

// �ㅽ겕濡� �대깽�몃� 媛먯��섏뿬 "totop" 踰꾪듉�� �쒖떆/�④��� 泥섎━
window.onscroll = function() {
  toggleTotopButton();
};
