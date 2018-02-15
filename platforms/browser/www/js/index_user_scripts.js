/*jshint browser:true */
/*global $ */(function()
{
 "use strict";

                //var db1 = openDatabase('dados', '2.0', 'AGENDA IEQ', 2000);
			         var msg;

    
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #bt_login */
    $(document).on("click", "#bt_login", function(evt)
    {
                 
                
                if(($("#ib_senha").val() === "512480")){
                   navigator.vibrate(1000);
                   //navigator.notification.beep(1);
                   //$("galeria").clear;
                    var src = "dados3.html";
            
                   location.href = src;
                    
                    //document.cookie = "ACESSO=OK";
                    //activate_page("#princ");    
                }
               else {
                   navigator.vibrate(2000);
                   navigator.notification.beep(2);
               }
            
        
        
        
         return false;
    });
    

        /* button  #camera */
    $(document).on("click", "#bt_sair", function(evt)
    {
         /*global activate_page */
        navigator.vibrate(2000);
        navigator.app.exitapp();
    });
     
     
        /* button  #camera */
    $(document).on("click", "#tfoto", function(evt)
    {
         /*global activate_page */
//navigator.app.exitapp();});
        

        navigator.camera.getPicture(onSuccess, onFail, { quality: 98, destinationType: Camera.DestinationType.FILE_URI, targetWidth: 516,  targetHeight:388 });
        

        
function onSuccess(imageURI) {
    var v_id=0;
    db.transaction(function (tx) {tx.executeSql('INSERT INTO AGENDA (FOTO) VALUES ("'+imageURI+'")');});
 
    db.transaction(function (tx) {
 
    tx.executeSql('SELECT * FROM AGENDA ORDER BY ID DESC', [], function (tx, results) {
    v_id=results.rows.item(0).ID;
    location.href = "dados.html?op=cad&id="+v_id+"&foto="+imageURI;    
}, null);
});

    
    
    //location.href = "dados.html?id="+v_id;
    
    //location.href = "dados.html?op=cadd&foto="+imageURI;
    //location.href = "dados.html?op=alt&id="+v_id;
}

function onFail(message) {
    alert('Failed because: ' + message);
} 

        return false;
    });

     
     
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
