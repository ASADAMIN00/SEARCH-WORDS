var flag = "true"

function task(){
    
        var inputGet = document.getElementById("inputText").value;
        var paraGet = document.getElementById("paragraph").innerText;
    
            for(var i =0; i < paraGet.length;i++){
        
              if(inputGet == paraGet.slice(i, i+inputGet.length)){
                alert(inputGet + " " + "found")
                flag = "false"
            }
          }
          if(flag === "true"){
            alert("Not found")
          }
        }
        
        