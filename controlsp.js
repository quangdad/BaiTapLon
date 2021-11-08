var urlimagessp=""; //biến lưu tên tập tin hình ảnh 
$(document).ready(function(){
    urlimagessp="";
    $(".imgsp").addClass("is-hidden");    
	$("#imgsp").val("")
    document.querySelector("#imgsp").addEventListener('change', initUploadAllCommon);	
    $(".insertsp").on("click", function () {
       
    var dataclient={
        event : "insertSanPham",
        matl_sp :$(".matl_sp").val(),
        tentl_sp :$(".tentl_sp").val(),
        hsp_sp : $(".hsp_sp").val(),
        dg_sp : $(".dg_sp").val(),
        url_sp: urlimagessp,
    } 
    if(dataclient.matl_sp==""){
        alert("Mã sản phẩm không được bỏ trống");
    }else{
        console.log(dataclient);
        queryDataGet("content.php",dataclient,function(res){
            console.log(res);
            showdataSP();
               
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
$(".editsp").on("click", function () {
    var dataclient={
        event : "updateSanPham",
         matl_sp :$(".matl_sp").val(),
         tentl_sp :$(".tentl_sp").val(),
         hsp_sp : $(".hsp_sp").val(),
         dg_sp : $(".dg_sp").val(),
         url_sp: urlimagessp,
    } 
    console.log(dataclient);
    queryDataGet("content.php",dataclient,function(res){
        showdataSP();
          console.log(res.sucess); 
          if(res.sucess==1){
              alert("Sửa thành công");
          } 
          else
          {
              alert("Sửa thất bại");
          }
    });
})
$(".deletesp").on("click", function () {
    var matl_sp=$(".matl_sp").val();
    var tentl_sp=$(".tentl_sp").val();
 bootbox.confirm("Bạn có chắc xóa thể loại[ "+tentl_sp+" ] này không?", function(result){
    if(result==true) {
        
     var dataSend = {
         event: "deleteSP",
         matl_sp:matl_sp
        };
   
    
        queryDataGet("content.php", dataSend, function (data) {
            console.log(data.success)
          if(data.sucess==1){
              alert('Xóa thành công')
              showdataSP();
              resetSP();
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

//xem lại SP
$(".loaddataSP").on('click','.click_view_SP', function(){
    var matl_sp=  $(this).parent().attr("data-matl_sp");
    var tentl_sp=  $(this).parent().attr("data-tentl_sp");
    var hsp_sp=  $(this).parent().attr("data-hsp_sp");
    var dg_sp=  $(this).parent().attr("data-dg_sp");
    var url_sp=  $(this).parent().attr("data-url_sp");

    $(".progresscommon").html("Ảnh sách:Tải Thành công");
    urlimagessp=url_sp;
    //hiển thị lên 
    $(".imgsp").removeClass("is-hidden");
    $("#imgPreviewsp").attr("src","filesp/"+urlimagessp);

    $(".matl_sp").val(matl_sp);
    $(".tentl_sp").val(tentl_sp);
    $(".hsp_sp").val(hsp_sp);
    $(".dg_sp").val(dg_sp);
   
})

//reset SP
$('.resetsp').on('click', function(){
    $('.matl_sp').val("");
    $('.tentl_sp').val("");
    $('.hsp_sp').val("");
    $('.dg_sp').val("");
    urlimagessp="";
    //hiển thị lên 
    $(".progresscommon").html("Ảnh sách");
    $(".imgsp").addClass("is-hidden");
    $("#imgPreviewsp").attr("src","");
    console.log('reset');
})

//delete ảnh
$(".btndeletefilesp").on('click',function(){
    var dataclient={
        event:"deleteImage",
        linkdata:urlimagessp,
    };
    queryDataGet("content.php", dataclient, function (res) {
        if(res.success==1){
            urlimagessp="";
        //hiển thị lên 
         $(".progresscommon").html("Ảnh sách");
        $(".imgsp").addClass("is-hidden");
        $("#imgPreviewsp").attr("src","");
        }else{
           alert("Lỗi xóa file");
        }
    });
});
$('.btnfindsp').click(function(){
    showdataSP();
})
$('.txtfindsp').keypress(function(e){
    if(e.which==13){
        showdataSP();
    }
})
})
//show data SP
function showdataSP(){
    var find = $('.txtfindsp').val();
    var dataclient={
        search:find,
        event:"getdataSP",
    } 
    queryDataGet("content.php",dataclient,function(res){
       console.log(res);
       var data=res.items; 
       var htmls='';
       var stt =1;
       for(var x in data){    
        var list=data[x];
        htmls=htmls+'<tr data-matl_sp='+list.matl_sp+' data-tentl_sp="'+list.tentl_sp+'" data-hsp_sp="'+list.hsp_sp+'" data-dg_sp="'+list.dg_sp+'" data-url_sp="'+list.url_sp+'" >'+
                '<td>'+stt+'</td>'+
                "<td>"+list.matl_sp+"</td>"+
                "<td >"+list.tentl_sp+"</td>"+
                "<td >"+list.hsp_sp+"</td>"+
                "<td >"+list.soluong_sp+"</td>"+
                "<td >"+list.dg_sp+"</td>"+
                '<td class="click_view_SP"><span class="btn btn-success">Xem</span></td>'+
                '</tr>';

                stt++;
       }
       console.log(htmls);
       $(".loaddataSP").html(htmls);

   });
}
function ketquauploadsp(oj){
    console.log(oj);
    if(oj.status==true)
    {
        $(".progresscommon").html("Ảnh sách:Tải Thành công");
        urlimagessp=oj.attach;
        //hiển thị lên 
        $(".imgsp").removeClass("is-hidden");
        $("#imgPreviewsp").attr("src","filesp/"+urlimagessp);
        showdataSP();
    }else{
        $(".progresscommon").html("Ảnh sách:Tải thất bại");
    }
}
function resetSP(){
    //hiển thị lên 

    var dataclient={
        event:"deleteImage",
        linkdata:urlimagessp,
    };
    console.log(dataclient)
    queryDataGet("content.php", dataclient, function (res) {
        if(res.success==1){
            console.log('delete and reset');
            urlimagessp="";
        //hiển thị lên 
        $(".progresscommon").html("Ảnh sách");
        $(".imgsp").addClass("is-hidden");
        $("#imgPreviewsp").attr("src","");
        }else{
           alert_info("Lỗi xóa file");
        }
    });
}
