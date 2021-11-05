$(document).ready(function(){
    //viết php sản phẩm nhà cc---------------------------------------------------------------------------------------------------------
$(".insertsp_ncc").on("click", function () {
    var dataclient={
        event : "insertSPNCC",
        mancc_spncc :$(".mancc_spncc").val(),   
        masp_spncc :$(".masp_spncc").val(),      
    } 
    if(dataclient.mancc_spncc==""){
        alert("Mã Nhà cung cấp không được bỏ trống");
    }else{
        console.log(dataclient);
        queryDataGet("content.php",dataclient,function(res){
              console.log(res); 
              showdataSPNCC();
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
$(".editsp_ncc").on("click", function () {
    var dataclient={
        event : "editSPNCC",
        mancc_spncc :$(".mancc_spncc").val(),   
        masp_spncc :$(".masp_spncc").val(),
    } 
    console.log(dataclient);
    queryDataGet("content.php",dataclient,function(res){
        showdataSPNCC();
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
$(".deletesp_ncc").on("click", function () {
    var masp_spncc=$(".masp_spncc").val();
 bootbox.confirm("Bạn có chắc xóa Mã sản phẩm [ "+masp_spncc+" ] này không?", function(result){
    if(result==true) {
        
     var dataclient = {
         event: "deleteSPNCC",
         masp_spncc:masp_spncc
        };
    //console.log(dataclient);
    queryDataGet("content.php",dataclient,function(res){
        showdataSPNCC();
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

//xem tt SPNCC
$(".loaddataSPNCC").on('click','.click_view_SPNCC', function(){
    var masp_spncc=  $(this).parent().attr("data-masp_spncc");
    var mancc_spncc=  $(this).parent().attr("data-mancc_spncc");

    $(".masp_spncc").val(masp_spncc);
    $(".mancc_spncc").val(mancc_spncc);
})
//reset SP-NCC
$('.resetsp_ncc').on('click', function(){
    $(".masp_spncc").val("");
    $(".mancc_spncc").val("");
})
})
//show data sản phẩm nhà cung cấp
function showdataSPNCC(){
    var dataclient={
        event:"getdataSPNCC",
    } 
    queryDataGet("content.php",dataclient,function(res){
       console.log(res);
       var data=res.items; 
       var htmls='';
       let stt =1;
       for(var x in data){    
        var list=data[x];
        htmls=htmls+'<tr data-masp_spncc="'+list.masp_spncc+'" data-mancc_spncc="'+list.mancc_spncc+'">'+
        '<td>'+stt+'</td>'+
        "<td>"+list.masp_spncc+"</td>"+
        "<td >"+list.mancc_spncc+"</td>"+
        '<td class="click_view_SPNCC"><span class="btn btn-success">Xem</span></td>'+
        '</tr>';
                
        stt++;
                
       }
       console.log(htmls);
       $(".loaddataSPNCC").html(htmls);

   });
}
//Viết hàm show cb masp
function showDataCBMaSP(){
    var dataclient = {
        event:"getdataSP",
    }
    queryDataGet("content.php",dataclient,function(res){
        var htmls ='<option values="">Chọn sản phẩm</option>';
        if(res.items.length == 0){
            htmls ='<option values="">Chọn sản phẩm</option>'
        }else{
            var list =res.items;
            for(var x in list){
                var d = list[x];
                htmls = htmls+'<option values="'+d.matl_sp+'">'+d.matl_sp+'</option>'
            }
            $('.masp_spncc').html(htmls);
        }
    })
}
function showDataCBMaNCC(){
    var dataclient = {
        event:"getdataNCC",
    }
    queryDataGet("content.php",dataclient,function(res){
        var htmls ='<option values="">Chọn nhà cung cấp</option>';
        if(res.items.length == 0){
            htmls ='<option values="">Chọn nhà cung cấp</option>'
        }else{
            var list =res.items;
            for(var x in list){
                var d = list[x];
                htmls = htmls+'<option values="'+d.ma_ncc+'">'+d.ma_ncc+'</option>'
            }
            $('.mancc_spncc').html(htmls);
        }
    })
}