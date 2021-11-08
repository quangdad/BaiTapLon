$(document).ready(function(){
    //viết php nhân viên--------------------------------------------------------------------------------------------------
$(".insertnv").on("click", function () {
    var dataclient={
        event : "insertNV",
        manv_nv :$(".manv_nv").val(),
        tennv_nv :$(".tennv_nv").val(),
        sdt_nv : $(".sdt_nv").val(),
        email_nv : $(".email_nv").val(),         
    } 
    if(dataclient.manv_nv==""){
        alert('Mã Nhân viên không được bỏ trống')
    }else{
        console.log(dataclient);
        queryDataGet("content.php",dataclient,function(res){
              console.log(res); 
              showdataNV();
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
$(".editnv").on("click", function () {
    var dataclient={
        event : "updateNV",
        manv_nv :$(".manv_nv").val(),
        tennv_nv :$(".tennv_nv").val(),
        sdt_nv : $(".sdt_nv").val(),
        email_nv : $(".email_nv").val(),   
    } 
    console.log(dataclient);
    queryDataGet("content.php",dataclient,function(res){
        showdataNV();
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
$(".deletenv").on("click", function () {
    var manv_nv=$(".manv_nv").val();
    var tennv_nv=$(".tennv_nv").val();
 bootbox.confirm("Bạn có chắc xóa nhân viên[ "+tennv_nv+" ] này không?", function(result){
    if(result==true) {
        
     var dataSend = {
         event: "deleteNV",
         manv_nv:manv_nv
        };
   
    
        queryDataGet("content.php", dataSend, function (data) {
            console.log(data.success)
          if(data.sucess==1){
              alert('Xóa thành công')
              showdataNV();
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

$(".loaddataNV").on('click','.click_view_NV', function(){
    var manv_nv=  $(this).parent().attr("data-manv_nv");
    var tennv_nv=  $(this).parent().attr("data-tennv_nv");
    var sdt_nv=  $(this).parent().attr("data-sdt_nv");
    var email_nv=  $(this).parent().attr("data-email_nv");

    $(".manv_nv").val(manv_nv);
    $(".tennv_nv").val(tennv_nv);
    $(".sdt_nv").val(sdt_nv);
    $(".email_nv").val(email_nv);
   
})
//reset NV
$('.resetnv').on('click', function(){
    $(".manv_nv").val("");
    $(".tennv_nv").val("");
    $(".sdt_nv").val("");
    $(".email_nv").val("");
})
//nút find
$('.btnfindnv').click(function(){
    showdataNV();
})
$('.txtfindnv').keypress(function(e){
    if(e.which==13){
        showdataNV();
    }
})
})
//show data nhân viên
function showdataNV(){
    var find = $('.txtfindnv').val();
    var dataclient={
        search:find,
        event:"getdataNV",
    } 
    queryDataGet("content.php",dataclient,function(res){
       console.log(res);
       var data=res.items; 
       var htmls='';
       let stt =1;
       for(var x in data){    
        var list=data[x];
        htmls=htmls+'<tr data-manv_nv='+list.manv_nv+' data-tennv_nv="'+list.tennv_nv+'" data-sdt_nv="'+list.sdt_nv+'" data-email_nv="'+list.email_nv+'" >'+
                '<td>'+stt+'</td>'+
                "<td>"+list.manv_nv+"</td>"+
                "<td >"+list.tennv_nv+"</td>"+
                "<td >"+list.sdt_nv+"</td>"+
                "<td >"+list.email_nv+"</td>"+
                '<td class="click_view_NV"><span class="btn btn-success">Xem</span></td>'+
                '</tr>';
                
                stt++;
       }
       console.log(htmls);
       $(".loaddataNV").html(htmls);

   });
}

