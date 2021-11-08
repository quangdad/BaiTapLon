$(document).ready(function(){
    
//viết php đơn đặt hàng----------------------------------------------------------------------------------------------------
$(".insertdh").on("click", function () {
    var dataclient={
        event : "insertDDH",
        sodh_dh :$(".sodh_dh").val(),
        makh_dh :$(".makh_dh").val(),
        manv_dh :$(".manv_dh").val(),
        ngaydh_dh : $(".ngaydh_dh").val(),
        trangthai_dh : $(".trangthai_dh").val(), 
        ngaydukien_dh : $(".ngaydukien_dh").val(), 
        ngaythucte_dh : $(".ngaythucte_dh").val(),  
        
        } 
        const e = new Date($(".ngaydukien_dh").val());
        const d = new Date($(".ngaythucte_dh").val());
        console.log('day ='+e)
        console.log('day ='+d)
        let day = d.getDate() - e.getDate();
        console.log('day ='+day)
        let month = d.getMonth() - e.getMonth();
        console.log('month ='+month)
        let year = d.getFullYear() - e.getFullYear();
        console.log('year ='+year)
    if(dataclient.sodh_dh ==""){
        alert("Số đặt hàng không được bỏ trống")
    } 
    else if(day < 0){  
        alert('Nhập ngày thực tế giao không nhỏ hơn ngày dự kiến giao!')
    }
    else if(month<0){
        alert('Nhập ngày thực tế giao không nhỏ hơn ngày dự kiến giao!')
    }
    else if(year<0){
        alert('Nhập ngày thực tế giao không nhỏ hơn ngày dự kiến giao!')
    }
    else{
        console.log(dataclient);
        queryDataGet("content.php",dataclient,function(res){
              console.log(res); 
              showdataDDH();
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
$(".editdh").on("click", function () {
    var dataclient={
        event : "updateDDH",
        sodh_dh :$(".sodh_dh").val(),
        makh_dh :$(".makh_dh").val(),
        manv_dh :$(".manv_dh").val(),
        ngaydh_dh : $(".ngaydh_dh").val(),
        trangthai_dh : $(".trangthai_dh").val(), 
        ngaydukien_dh : $(".ngaydukien_dh").val(), 
        ngaythucte_dh : $(".ngaythucte_dh").val(),  
    } 
    console.log(dataclient);
    queryDataGet("content.php",dataclient,function(res){
        showdataDDH();
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
$(".deletedh").on("click", function () {
    var sodh_dh=$(".sodh_dh").val();
    bootbox.confirm("Bạn có chắc xóa Số đặt hàng [ "+sodh_dh+" ] này không?", function(result){
       if(result==true) {
           
        var dataclient = {
            event: "deleteDHH",
            sodh_dh:sodh_dh
           };
       //console.log(dataclient);
       queryDataGet("content.php",dataclient,function(res){
           showdataDDH();
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

//xem tt DDH
$(".loaddataDDH").on('click','.click_view_DDH', function(){
    var sodh_dh=  $(this).parent().attr("data-sodh_dh");
    var makh_dh=  $(this).parent().attr("data-makh_kh");
    var manv_dh=  $(this).parent().attr("data-manv_nv");
    var ngaydh_dh=  $(this).parent().attr("data-ngaydh_dh");
    var trangthai_dh=  $(this).parent().attr("data-trangthai_dh");
    var ngaydukien_dh=  $(this).parent().attr("data-ngaydukien_dh");
    var ngaythucte_dh=  $(this).parent().attr("data-ngaythucte_dh");

    $(".sodh_dh").val(sodh_dh);
    $(".makh_dh").val(makh_dh);
    $(".manv_dh").val(manv_dh);
    $(".ngaydh_dh").val(ngaydh_dh);
    $(".trangthai_dh").val(trangthai_dh);
    $(".ngaydukien_dh").val(ngaydukien_dh);
    $(".ngaythucte_dh").val(ngaythucte_dh);
   
})
$('.btnfindddh').click(function(){
    showdataDDH();
})
$('.txtfindddh').keypress(function(e){
    if(e.which==13){
        showdataDDH();
    }
})
})
//show data đơn dặt hàng
function showdataDDH(){
    var find =  $(".txtfindddh").val();
    var dataclient={
        search : find,
        event:"getdataDDH",
    } 
    queryDataGet("content.php",dataclient,function(res){
       console.log(res);
       var data=res.items; 
       var htmls='';
       let stt =1;
       for(var x in data){    
        var list=data[x];
        htmls=htmls+'<tr data-sodh_dh="'+list.sodh_dh+'" data-makh_dh="'+list.makh_dh+'" data-manv_dh="'+list.manv_dh+'" data-ngaydh_dh="'+list.ngaydh_dh+'"data-trangthai_dh="'+list.trangthai_dh+'" data-ngaydukien_dh="'+list.ngaydukien_dh+'" data-ngaythucte_dh="'+list.ngaythucte_dh+'" data-manv_nv="'+list.manv_nv+'" data-tennv_nv="'+list.tennv_nv+'" data-makh_kh="'+list.makh_kh+'" data-tenkh_kh="'+list.tenkh_kh+'">'+
                '<td>'+stt+'</td>'+
                "<td>"+list.sodh_dh+"</td>"+
                "<td >"+list.tenkh_kh+"</td>"+
                "<td >"+list.tennv_nv+"</td>"+
                "<td >"+list.ngaydh_dh+"</td>"+
                "<td >"+list.trangthai_dh+"</td>"+
                "<td >"+list.ngaydukien_dh+"</td>"+
                "<td >"+list.ngaythucte_dh+"</td>"+
                '<td class="click_view_DDH"><span class="btn btn-success">Xem</span></td>'+
                '</tr>';
                        
                stt++;
                        
                
       }
       console.log(htmls);
       $(".loaddataDDH").html(htmls);

   });
}
function showDataCBMKH(){
    var find =  $(".txtfindddh").val();
    var dataclient = {
        search : find,
        event:"getdataKH",
    }
    queryDataGet("content.php",dataclient,function(res){
        var htmls ='<option values="">Chọn tên khách hàng</option>';
        if(res.items.length == 0){
            htmls ='<option values="">Chọn tên khách hàng</option>'
        }else{
            var list =res.items;
            for(var x in list){
                var d = list[x];
                htmls = htmls+'<option values="'+d.tenkh_kh+'">'+d.makh_kh+'</option>'
            }
            $('.makh_dh').html(htmls);
        }
    })
}
function showDataCBMNV(){
    var find =  $(".txtfindddh").val();
    var dataclient = {
        search : find,
        event:"getdataNV",
    }
    queryDataGet("content.php",dataclient,function(res){
        var htmls ='<option values="">Chọn tên nhân viên</option>';
        if(res.items.length == 0){
            htmls ='<option values="">Chọn tên nhân viên</option>'
        }else{
            var list =res.items;
            for(var x in list){
                var d = list[x];
                htmls = htmls+'<option values="'+d.tennv_nv+'">'+d.manv_nv+'</option>'
            }
            $('.manv_dh').html(htmls);
        }
    })
}