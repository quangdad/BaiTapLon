$(document).ready(function(){
    //viết php chi tiết đặt hàng
$(".insertctdh").on("click", function () {
    var dataclient={
        event : "insertCTDDH",
        sodh_ctdh :$(".sodh_ctdh").val(),
        masp_ctdh :$(".masp_ctdh").val(),
        soluongdat_ctdh : $(".soluongdat_ctdh").val(),
        giatien_ctdh : $(".giatien_ctdh").val(),   
        mgg_ctdh : $(".mgg_ctdh").val(),         
      
    } 
    if(dataclient.sodh_ctdh ==""){
        alert("Số đặt hàng không được bỏ trống");
    } else{
        console.log(dataclient);
        queryDataGet("content.php",dataclient,function(res){
            console.log(res); 
            showdataCTDDH();
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
$(".editctdh").on("click", function () {
    var dataclient={
        event : "updateCTDDH",
        sodh_ctdh :$(".sodh_ctdh").val(),
        masp_ctdh :$(".masp_ctdh").val(),
        soluongdat_ctdh : $(".soluongdat_ctdh").val(),
        giatien_ctdh : $(".giatien_ctdh").val(),   
        mgg_ctdh : $(".mgg_ctdh").val(),         
      
    } 
    console.log(dataclient);
    queryDataGet("content.php",dataclient,function(res){
        showdataCTDDH();
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
$(".deletectdh").on("click", function () {
    var sodh_ctdh=$(".sodh_ctdh").val();
    bootbox.confirm("Bạn có chắc xóa Số chi tiết đơn đặt hàng[ "+sodh_ctdh+" ] này không?", function(result){
       if(result==true) {
           
        var dataclient = {
            event: "deleteCTDDH",
            sodh_ctdh:sodh_ctdh
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

//xem tt CTDH
$(".loaddataCTDDH").on('click','.click_view_CTDDH', function(){
    var sodh_ctdh=  $(this).parent().attr("data-sodh_ctdh");
    var masp_ctdh=  $(this).parent().attr("data-masp_ctdh");
    var soluongdat_ctdh=  $(this).parent().attr("data-soluongdat_ctdh");
    var giatien_ctdh=  $(this).parent().attr("data-giatien_ctdh");
    var mgg_ctdh=  $(this).parent().attr("data-mgg_ctdh");

    $(".sodh_ctdh").val(sodh_ctdh);
    $(".masp_ctdh").val(masp_ctdh);
    $(".soluongdat_ctdh").val(soluongdat_ctdh);
    $(".giatien_ctdh").val(giatien_ctdh );   
    $(".mgg_ctdh").val(mgg_ctdh );   

})
$('.resetctdh').on('click', function(){
    $(".sodh_ctdh").val("");
    $(".masp_ctdh").val("");
    $(".soluongdat_ctdh").val("");
    $(".giatien_ctdh").val("" );   
    $(".mgg_ctdh").val("" ); 
})
})
//show data ct đơn đặt hàng
function showdataCTDDH(){
    var dataclient={
        event:"getdataCTDDH",
    } 
    queryDataGet("content.php",dataclient,function(res){
       console.log(res);
       var data=res.items; 
       var htmls='';
       let stt=1;
       for(var x in data){    
        var list=data[x];
        htmls=htmls+'<tr data-sodh_ctdh="'+list.sodh_ctdh+'" data-masp_ctdh="'+list.masp_ctdh+'" data-soluongdat_ctdh="'+list.soluongdat_ctdh+'" data-giatien_ctdh="'+list.giatien_ctdh+'"  data-mgg_ctdh="'+list.mgg_ctdh+'">'+
                '<td>'+stt+'</td>'+
                "<td>"+list.sodh_ctdh+"</td>"+
                "<td >"+list.masp_ctdh+"</td>"+
                "<td >"+list.soluongdat_ctdh+"</td>"+
                "<td >"+list.giatien_ctdh+"</td>"+
                "<td >"+list.mgg_ctdh+"</td>"+
                '<td class="click_view_CTDDH"><span class="btn btn-success">Xem</span></td>'+
                '</tr>';
                        
                stt++;
                
                
       }
       console.log(htmls);
       $(".loaddataCTDDH").html(htmls);

   });
}