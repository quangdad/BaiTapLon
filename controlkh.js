$(document).ready(function(){
    //viết php khách hàng-----------------------------------------------------------------------------------------------------------------
$(".insertkh").on("click", function () {
    var dataclient={
        event : "insertKhachHang",
        makh_kh :$(".makh_kh").val(),
        tenkh_kh :$(".tenkh_kh").val(),
        sdt_kh : $(".sdt_kh").val(),
        email_kh : $(".email_kh").val(),
        diachi_kh : $(".diachi_kh").val(),
         
    } 
    if(dataclient.makh_kh ==""){
        alert("Mã khách hàng không được bỏ trống")
    }else{
        console.log(dataclient);
        queryDataGet("content.php",dataclient,function(res){
            console.log(res);
              showdataKH();
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
$(".editkh").on("click", function () {
    var dataclient={
        event : "updateKhachHang",
        makh_kh :$(".makh_kh").val(),
        tenkh_kh :$(".tenkh_kh").val(),
        sdt_kh : $(".sdt_kh").val(),
        email_kh : $(".email_kh").val(),
        diachi_kh : $(".diachi_kh").val(),
    } 
    console.log(dataclient);
    queryDataGet("content.php",dataclient,function(res){
        console.log(res); 
        showdataKH();
          
          if(res.sucess==1){
              alert("Sửa thành công");
          } 
          else
          {
              alert("Sửa thất bại");
          }
    });
    

})
$(".deletekh").on("click", function () {
    var makh_kh=$(".makh_kh").val();
    var tenkh_kh=$(".tenkh_kh").val();
 bootbox.confirm("Bạn có chắc xóa khách hàng [ "+tenkh_kh+" ] này không?", function(result){
    if(result==true) {
        
     var dataSend = {
         event: "deleteKH",
         makh_kh:makh_kh
        };
   
    
        queryDataGet("content.php", dataSend, function (data) {
            console.log(data.success)
          if(data.sucess==1){
              alert('Xóa thành công')
              showdataKH();
          }else if(data.sucess==2){
              alert("Sản phẩm đã được sử dụng ");
          }else{
            alert("Xóa lỗi ");
          }
           
            
        });
        
        
    }else
    {
        // alert_info("Lỗi");
    }
})
    
})

//xem lại kh
$(".loaddataKH").on('click','.click_view_Kh', function(){
    var makh_kh=  $(this).parent().attr("data-makh_kh");
    var tenkh_kh=  $(this).parent().attr("data-tenkh_kh");
    var sdt_kh=  $(this).parent().attr("data-sdt_kh");
    var email_kh=  $(this).parent().attr("data-email_kh");
    var diachi_kh=  $(this).parent().attr("data-diachi_kh");

    $(".makh_kh").val(makh_kh);
    $(".tenkh_kh").val(tenkh_kh);
    $(".sdt_kh").val(sdt_kh);
    $(".email_kh").val(email_kh);
    $(".diachi_kh").val(diachi_kh);
   
})
$('.resetkh').on('click', function(){
    $(".makh_kh").val("");
    $(".tenkh_kh").val("");
    $(".sdt_kh").val("");
    $(".email_kh").val("");
    $(".diachi_kh").val("");
   
})
//nút find
$('.btnfindkh').click(function(){
    showdataKH();
})
$('.txtfindkh').keypress(function(e){
    if(e.which==13){
        showdataKH();
    }
})
})
//show data KH--------------------------------------------------------------------------
function showdataKH(){
    var find = $('.txtfindkh').val();
    var dataclient={
        search: find,
        event:"getdataKH",
    } 
    queryDataGet("content.php",dataclient,function(res){
       console.log(res);
       var data=res.items; 
       var htmls='';
       var stt=1;
       for(var x in data){    
        var list=data[x];
        htmls=htmls+'<tr data-makh_kh='+list.makh_kh+' data-tenkh_kh="'+list.tenkh_kh+'" data-sdt_kh="'+list.sdt_kh+'" data-email_kh="'+list.email_kh+'" data-diachi_kh="'+list.diachi_kh+'" >'+
        '<td>'+stt+'</td>'+
        "<td>"+list.makh_kh+"</td>"+
                "<td >"+list.tenkh_kh+"</td>"+
                "<td >"+list.sdt_kh+"</td>"+
                "<td >"+list.email_kh+"</td>"+
                "<td >"+list.diachi_kh+"</td>"+
                '<td class="click_view_Kh"><span class="btn btn-success">Xem</span></td>'+
                '</tr>';

                stt++;
       }
       console.log(htmls);
       $(".loaddataKH").html(htmls);

   });
}