$(document).ready(function(){
    notext();
    //xem tt thong ke
$(".loaddataTK_CTDDH").on('click','.click_view_TK_CTDDH', function(){
    
    var sodh_ctdh=  $(this).parent().attr("data-sodh_ctdh");
    var masp_ctdh=  $(this).parent().attr("data-masp_ctdh");
    var soluongdat_ctdh=  $(this).parent().attr("data-soluongdat_ctdh");
    var dg_sp=  $(this).parent().attr("data-dg_sp");
    var mgg_ctdh=  $(this).parent().attr("data-mgg_ctdh");
    var gg_ctdh=  $(this).parent().attr("data-gg_gg");

    $(".sodh_ctdh").val(sodh_ctdh);
    $(".masp_ctdh").val(masp_ctdh);
    $(".soluongdat_ctdh").val(soluongdat_ctdh);
    $(".giatien_tk_ctdh").val(dg_sp );   
    $(".mgg_ctdh").val(mgg_ctdh );   
    $(".gg_tk_ctdh").val(gg_ctdh );   

})
//tính thành tiền
$('.btn_thongke').on("click", function(){
    let solonhdat = $(".soluongdat_ctdh").val();
    let giatien = $(".giatien_tk_ctdh").val();   
    let giamgia = $(".gg_tk_ctdh").val();  
    let tong =  solonhdat*giatien*(1-giamgia);  
    var tongtt = tong.toFixed(0);   
    console.log(tongtt);
    $('.tong_thongke').val(tongtt);
})
$('.btnfindtk').click(function(){
    showdataTK_CTDDH();
})
$('.txtfindtk').keypress(function(e){
    if(e.which==13){
        showdataTK_CTDDH();
    }
})
})

//show data ct đơn đặt hàng
function showdataTK_CTDDH(){
    var find=$('.txtfindtk').val();
    var dataclient={
		search:find,
        event:"getdataTK_CTDDH",
    } 
    queryDataGet("content.php",dataclient,function(res){
       console.log(res);
       var data=res.items; 
       var stt=1;
       var htmls='';
       for(var x in data){    
        var list=data[x];
        htmls=htmls+'<tr data-sodh_ctdh="'+list.sodh_ctdh+'" data-masp_ctdh="'+list.masp_ctdh+'" data-soluongdat_ctdh="'+list.soluongdat_ctdh+'" data-giatien_ctdh="'+list.giatien_ctdh+'"  data-mgg_ctdh="'+list.mgg_ctdh+'" data-dg_sp="'+list.dg_sp+'" data-gg_gg="'+list.gg_gg+'">'+
                '<td>'+stt+'</td>'+
                "<td>"+list.sodh_ctdh+"</td>"+
                "<td >"+list.masp_ctdh+"</td>"+
                "<td >"+list.soluongdat_ctdh+"</td>"+
                "<td >"+list.dg_sp+"</td>"+
                "<td >"+list.mgg_ctdh+"</td>"+
                "<td >"+list.gg_gg+"</td>"+
                '<td class="click_view_TK_CTDDH"><span class="btn btn-success">Xem</span></td>'+
                '</tr>';
                        
                stt++;
                            
       }
       console.log(htmls);
       $(".loaddataTK_CTDDH").html(htmls);
   });
}