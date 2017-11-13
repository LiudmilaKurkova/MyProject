document.getElementById('hamburger-menu-link').onclick = function() {
      document.getElementById('about').style.opacity = '0';
      document.getElementById('drop-about').style.opacity = '1';
      document.getElementById('drop-about').style.zIndex++;
     }

document.getElementById('img-close').onclick = function() {
			document.getElementById('about').style.opacity = '1';
      document.getElementById('drop-about').style.opacity = '0';
      document.getElementById('drop-about').style.zIndex--;
      }

