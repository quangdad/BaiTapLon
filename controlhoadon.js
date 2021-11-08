$(document).ready(function(){
    //viết php hóa đơn-------------------------------------------------------------------------------------------------------------
$(".inserthd").on("click", function () {
    var dataclient={
        event : "insertHD",
        shd_hd :$(".shd_hd").val(),
        makh_hd :$(".makh_hd").val(),
        manv_hd : $(".manv_hd").val(),
        ngayhd_hd : $(".ngayhd_hd").val(),         
    } 
    if(dataclient.shd_hd==""){
        alert("Số hóa đơn không được bỏ trống");
    }else{
        console.log(dataclient);
        queryDataGet("content.php",dataclient,function(res){
              console.log(res); 
              showdataHD();
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
$(".edithd").on("click", function () {
    var dataclient={
        event : "updateHD",
        shd_hd :$(".shd_hd").val(),
        makh_hd :$(".makh_hd").val(),
        manv_hd : $(".manv_hd").val(),
        ngayhd_hd : $(".ngayhd_hd").val(),   
    } 
    console.log(dataclient);
    queryDataGet("content.php",dataclient,function(res){
        showdataHD();
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
$(".deletehd").on("click", function () {
    var shd_hd=$(".shd_hd").val();
    bootbox.confirm("Bạn có chắc xóa số hóa đơn [ "+shd_hd+" ] này không?", function(result){
       if(result==true) {
           
        var dataclient = {
            event: "deleteHD",
            shd_hd:shd_hd
           };
       //console.log(dataclient);
       queryDataGet("content.php",dataclient,function(res){
           showdataHD();
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

//xem tt HD
$(".loaddataHD").on('click','.click_view_HD', function(){
    var shd_hd=  $(this).parent().attr("data-shd_hd");
    var makh_hd=  $(this).parent().attr("data-makh_hd");
    var manv_hd=  $(this).parent().attr("data-manv_hd");
    var ngayhd_hd=  $(this).parent().attr("data-ngayhd_hd");

    $(".shd_hd").val(shd_hd);
    $(".makh_hd").val(makh_hd);
    $(".manv_hd").val(manv_hd);
    $(".ngayhd_hd").val(ngayhd_hd );   
})
// nút find 
$('.btnfindhd').click(function(){
    showdataHD();
})
$('.txtfindhd').keypress(function(e){
    if(e.which==13){
        showdataHD();
    }
})
})
//show data hóa đơn
function showdataHD(){
    var find = $('.txtfindhd').val();
    var dataclient={
        search : find,
        event:"getdataHD",
    } 
    queryDataGet("content.php",dataclient,function(res){
       console.log(res);
       var data=res.items; 
       var htmls='';
       let stt =1;
       for(var x in data){    
        var list=data[x];
        htmls=htmls+'<tr data-shd_hd="'+list.shd_hd+'" data-makh_hd="'+list.makh_hd+'" data-manv_hd="'+list.manv_hd+'" data-ngayhd_hd="'+list.ngayhd_hd+'" >'+
                '<td>'+stt+'</td>'+
                "<td>"+list.shd_hd+"</td>"+
                "<td >"+list.makh_hd+"</td>"+
                "<td >"+list.manv_hd+"</td>"+
                "<td >"+list.ngayhd_hd+"</td>"+
                '<td class="click_view_HD"><span class="btn btn-success">Xem</span></td>'+
        '</tr>';
                
        stt++;
                
                
       }
       console.log(htmls);
       $(".loaddataHD").html(htmls);

   });
}
