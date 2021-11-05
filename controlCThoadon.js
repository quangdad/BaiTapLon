$(document).ready(function(){
    
// viết php chi tiết hóa đơn
$(".insertcthd").on("click", function () {
    var dataclient={
        event : "insertCTHD",
        sohd_cthd :$(".sohd_cthd").val(),
        masp_cthd :$(".masp_cthd").val(),
        soluongban_cthd : $(".soluongban_cthd").val(),
        giaban_cthd : $(".giaban_cthd").val(),   
        giamgia_cthd : $(".giamgia_cthd").val(),         
      
    } 
    if(dataclient.sohd_cthd ==""){
        alert("Số hoá đơn không được bỏ trống");
    } else{
        queryDataGet("content.php",dataclient,function(res){
            console.log(res); 
            showdataCTHD();
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
$(".editcthd").on("click", function () {
    var dataclient={
        event : "updateCTHD",
        sohd_cthd :$(".sohd_cthd").val(),
        masp_cthd :$(".masp_cthd").val(),
        soluongban_cthd : $(".soluongban_cthd").val(),
        giaban_cthd : $(".giaban_cthd").val(),   
        giamgia_cthd : $(".giamgia_cthd").val(), 
    } 
    console.log(dataclient);
    queryDataGet("content.php",dataclient,function(res){
        showdataCTHD();
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
$(".deletecthd").on("click", function () {
    var sohd_cthd=$(".sohd_cthd").val();
 bootbox.confirm("Bạn có chắc xóa Số chi tiết hóa đơn [ "+sohd_cthd+" ] này không?", function(result){
    if(result==true) {
        
     var dataclient = {
         event: "deleteCTHD",
         sohd_cthd:sohd_cthd
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

//xem tt CTHD
$(".loaddataCTHD").on('click','.click_view_CTHD', function(){
    var sohd_cthd=  $(this).parent().attr("data-sohd_cthd");
    var masp_cthd=  $(this).parent().attr("data-masp_cthd");
    var soluongban_cthd=  $(this).parent().attr("data-soluongban_cthd");
    var giaban_cthd=  $(this).parent().attr("data-giaban_cthd");
    var giamgia_cthd=  $(this).parent().attr("data-giamgia_cthd");

    $(".sohd_cthd").val(sohd_cthd);
    $(".masp_cthd").val(masp_cthd);
    $(".soluongban_cthd").val(soluongban_cthd);
    $(".giaban_cthd").val(giaban_cthd );   
    $(".giamgia_cthd").val(giamgia_cthd );   

})
$('.resetcthd').on('click', function(){
    $(".sohd_cthd").val("");
    $(".masp_cthd").val("");
    $(".soluongban_cthd").val("");
    $(".giaban_cthd").val("" );   
    $(".giamgia_cthd").val("" );  
})
})
//show data ct hóa đơn
function showdataCTHD(){
    var dataclient={
        event:"getdataCTHD",
    } 
    queryDataGet("content.php",dataclient,function(res){
       console.log(res);
       var data=res.items; 
       var htmls='';
       let stt =1;
       for(var x in data){    
        var list=data[x];
        htmls=htmls+'<tr data-sohd_cthd="'+list.sohd_cthd+'" data-masp_cthd="'+list.masp_cthd+'" data-soluongban_cthd="'+list.soluongban_cthd+'" data-giaban_cthd="'+list.giaban_cthd+'"  data-giamgia_cthd="'+list.giamgia_cthd+'">'+
                '<td>'+stt+'</td>'+
                "<td>"+list.sohd_cthd+"</td>"+
                "<td >"+list.masp_cthd+"</td>"+
                "<td >"+list.soluongban_cthd+"</td>"+
                "<td >"+list.giaban_cthd+"</td>"+
                "<td >"+list.giamgia_cthd+"</td>"+
                '<td class="click_view_CTHD"><span class="btn btn-success">Xem</span></td>'+
                '</tr>';
                        
                stt++;
                
       }
       console.log(htmls);
       $(".loaddataCTHD").html(htmls);

   });
}