$(document).ready(function(){
    //viết php nhà cung cấp-------------------------------------------------------------------------------------------------------------
$(".insertncc").on("click", function () {
    var dataclient={
        event : "insertNCC",
        ma_ncc :$(".ma_ncc").val(),
        ten_ncc :$(".ten_ncc").val(),
        sdt_ncc : $(".sdt_ncc").val(),
        email_ncc : $(".email_ncc").val(),
        dc_ncc : $(".dc_ncc").val(),
         
    } 
    if(dataclient.ma_ncc==""){
        alert('Mã Nhà cung cấp không được bỏ trống')
    }else{
        console.log(dataclient);
        queryDataGet("content.php",dataclient,function(res){
              console.log(res); 
              showdataNCC();
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
$(".editncc").on("click", function () {
    var dataclient={
        event : "updateNCC",
        ma_ncc :$(".ma_ncc").val(),
        ten_ncc :$(".ten_ncc").val(),
        sdt_ncc : $(".sdt_ncc").val(),
        email_ncc : $(".email_ncc").val(),
        dc_ncc : $(".dc_ncc").val(),
    } 
    console.log(dataclient);
    queryDataGet("content.php",dataclient,function(res){
        showdataNCC();
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
$(".deletencc").on("click", function () {
    var ma_ncc=$(".ma_ncc").val();
    var ten_ncc=$(".ten_ncc").val();
 bootbox.confirm("Bạn có chắc xóa nhà cung cấp [ "+ten_ncc+" ] này không?", function(result){
    if(result==true) {
        
     var dataSend = {
         event: "deleteNCC",
         ma_ncc:ma_ncc
        };
   
    
        queryDataGet("content.php", dataSend, function (data) {
            console.log(data.success)
          if(data.sucess==1){
              alert('Xóa thành công')
              showdataSP();
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

//xem tt NCC
$(".loaddataNCC").on('click','.click_view_NCC', function(){
    var ma_ncc=  $(this).parent().attr("data-ma_ncc");
    var ten_ncc=  $(this).parent().attr("data-ten_ncc");
    var sdt_ncc=  $(this).parent().attr("data-sdt_ncc");
    var email_ncc=  $(this).parent().attr("data-email_ncc");
    var dc_ncc=  $(this).parent().attr("data-dc_ncc");

    $(".ma_ncc").val(ma_ncc);
    $(".ten_ncc").val(ten_ncc);
    $(".sdt_ncc").val(sdt_ncc);
    $(".email_ncc").val(email_ncc);
    $(".dc_ncc").val(dc_ncc);
   
})
//reset NCC
$('.resetncc').on('click', function(){
    $(".ma_ncc").val("");
    $(".ten_ncc").val("");
    $(".sdt_ncc").val("");
    $(".email_ncc").val("");
    $(".dc_ncc").val("");
})
//nút find
$('.btnfindncc').click(function(){
    showdataNCC();
})
$('.txtfindncc').keypress(function(e){
    if(e.which==13){
        showdataNCC();
    }
})
})
//show data nhà cung cấp
function showdataNCC(){
    var find = $('.txtfindncc').val();
    var dataclient={
        search : find,
        event:"getdataNCC",
    } 
    queryDataGet("content.php",dataclient,function(res){
       console.log(res);
       var data=res.items; 
       var htmls='';
       let stt =1;
       for(var x in data){    
        var list=data[x];
        htmls=htmls+'<tr data-ma_ncc='+list.ma_ncc+' data-ten_ncc="'+list.ten_ncc+'" data-sdt_ncc="'+list.sdt_ncc+'" data-email_ncc="'+list.email_ncc+'" data-dc_ncc="'+list.dc_ncc+'">'+
                '<td>'+stt+'</td>'+
                "<td>"+list.ma_ncc+"</td>"+
                "<td >"+list.ten_ncc+"</td>"+
                "<td >"+list.sdt_ncc+"</td>"+
                "<td >"+list.email_ncc+"</td>"+
                "<td >"+list.dc_ncc+"</td>"+
                '<td class="click_view_NCC"><span class="btn btn-success">Xem</span></td>'+
                '</tr>';
                
                stt++;
       }
       console.log(htmls);
       $(".loaddataNCC").html(htmls);

   });
}