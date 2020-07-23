
  function more(){
      var less = document.getElementById('less');
      var more = document.getElementById('more');
      var  btn = document.getElementById('btn');

    if(more.style.display === "none"){
        more.style.display = "inline";
        btn.innerHTML = "Read Less"; 
    }
    else{
        more.style.display = "none";
        btn.innerHTML = "Read More"
    }
  }
  