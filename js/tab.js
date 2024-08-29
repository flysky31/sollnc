//company tab



document.addEventListener('DOMContentLoaded', function() {
    var activeTab = localStorage.getItem('activeTab');
    var tabButtons = document.getElementsByClassName('tab-btn');
    var tabContents = document.getElementsByClassName('tab-content');
  
    if (activeTab) {
      for (var i = 0; i < tabButtons.length; i++) {
        if (tabButtons[i].getAttribute('data-tab') === activeTab) {
          tabButtons[i].classList.add('active');
          tabContents[i].style.display = 'block';
          break;
        }
      }
    } else {
      tabButtons[0].classList.add('active');
      tabContents[0].style.display = 'block';
    }
  
    function handleTabClick(event) {
      var tabName = event.target.getAttribute('data-tab');
  
      for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
      }
  
      for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
      }
  
      event.target.classList.add('active');
      document.getElementById('tab' + tabName).style.display = 'block';
      localStorage.setItem('activeTab', tabName);
      history.pushState(null, null, '#' + tabName);
    }
  
    for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].addEventListener('click', handleTabClick);
    }
  
    function selectTabFromUrl() {
      var tabNumber = window.location.hash.substr(1);
      if (tabNumber) {
        var tabButton = document.querySelector('.tab-btn[data-tab="' + tabNumber + '"]');
        if (tabButton) {
          tabButton.click();
        } else {
          tabButtons[0].click();
        }
      }
    }
  
    window.addEventListener('hashchange', selectTabFromUrl);
    selectTabFromUrl();
  });
  
