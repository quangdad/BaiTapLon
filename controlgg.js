
$(document).ready(function(){
//viết php giảm giá--------------------------------------------------------------------------------------------------
$(".insertgg").on("click", function () {
    var dataclient={
        event : "insertGG",
        mgg_gg :$(".mgg_gg").val(),
        tengg_gg :$(".tengg_gg").val(),
        gg_gg : $(".gg_gg").val(),    
    }  
    if(dataclient.mgg_gg==""){
        alert("Mã giảm giá không được bỏ trống");
    }else{
        console.log(dataclient);
        queryDataGet("content.php",dataclient,function(res){
              console.log(res); 
              showdataGG();
              if(res.sucess==1){
                  alert("Thêm thành công");          
              } 
              else
              {
                  alert("Thêm thất bại");
              }
        });
    }
    
});
$(".editgg").on("click", function () {
    var dataclient={
        event : "updateGG",
        mgg_gg :$(".mgg_gg").val(),
        tengg_gg :$(".tengg_gg").val(),
        gg_gg : $(".gg_gg").val(), 
    } 
    console.log(dataclient);
    queryDataGet("content.php",dataclient,function(res){
        showdataGG();
          console.log(res); 
          if(res.sucess==1){
              alert("Sửa thành công");
          } 
          else
          {
              alert("Sửa thất bại");
          }
    });
    

})
$(".deletegg").on("click", function () {
    var mgg_gg=$(".mgg_gg").val();
    bootbox.confirm("Bạn có chắc xóa Mã giảm giá [ "+mgg_gg+" ] này không?", function(result){
       if(result==true) {
           
        var dataclient = {
            event: "deleteGG",
            mgg_gg:mgg_gg
           };
       //console.log(dataclient);
       queryDataGet("content.php",dataclient,function(res){
           showdataCTHD();
             console.log(res); 
             if(res.sucess==1){
                 alert("Xóa thành công");
             } 
             else
             {
                 alert("Xóa thất bại");
             }
       });
       
   }
    })
})

//xem tt GG
$(".loaddataGG").on('click','.click_view_GG', function(){
    var mgg_gg=  $(this).parent().attr("data-mgg_gg");
    var tengg_gg=  $(this).parent().attr("data-tengg_gg");
    var gg_gg=  $(this).parent().attr("data-gg_gg");

    $(".mgg_gg").val(mgg_gg);
    $(".tengg_gg").val(tengg_gg);
    $(".gg_gg").val(gg_gg);
})
$('.resetgg').on('click', function(){
    $(".mgg_gg").val("");
    $(".tengg_gg").val("");
    $(".gg_gg").val("");
})
});


//show data giảm giá
function showdataGG(){
    var dataclient={
        event:"getdataGG",
    } 
    queryDataGet("content.php",dataclient,function(res){
       console.log(res);
       var data=res.items; 
       var htmls='';
       let stt =1;
       for(var x in data){    
        var list=data[x];
        htmls=htmls+'<tr data-mgg_gg="'+list.mgg_gg+'" data-tengg_gg="'+list.tengg_gg+'" data-gg_gg="'+list.gg_gg+'" >'+
                '<td>'+stt+'</td>'+
                "<td>"+list.mgg_gg+"</td>"+
                "<td >"+list.tengg_gg+"</td>"+
                "<td >"+list.gg_gg+"</td>"+
                '<td class="click_view_GG"><span class="btn btn-success">Xem</span></td>'+
                '</tr>';
                        
                stt++;
                
       }
       console.log(htmls);
       $(".loaddataGG").html(htmls);

   });
}






