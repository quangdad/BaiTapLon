
function swapMain(main){
	$(".formsanpham").addClass("is-hidden");
	$(".formkhachhang").addClass("is-hidden");
    $(".formnhanvien").addClass("is-hidden");
    $(".formnhacungcap").addClass("is-hidden");
    $(".formsp-ncc").addClass("is-hidden");
    $(".formhoadon").addClass("is-hidden");
    $(".formdondathang").addClass("is-hidden");
    $(".formcthoadon").addClass("is-hidden");
    $(".formctdondathang").addClass("is-hidden");
    $(".formgiamgia").addClass("is-hidden");
    $(".formthongke").addClass("is-hidden");

// 
	$("."+main).removeClass("is-hidden");
}
$(document).ready(function(){
    swapMain("formsanpham");//mặc địch khi load trang chủ lên
    $(".menusanpham").on("click", function(){
        let menusanpham2=$('.nav-treeview .menusanpham').text();
        let menusanpham=$('.listmenu_open').parent().text();
        $(".titlestatus2").text("/"+menusanpham2);
        $(".titlestatus").text(menusanpham);
        swapMain("formsanpham");
        
    });
    $(".menukhachhang").on("click", function(){
        let menukhachhang2=$('.nav-treeview .menukhachhang').text();
        let menukhachhang=$('.listmenu_open').parent().text();
        $(".titlestatus2").text("/"+menukhachhang2);
        $(".titlestatus").text(menukhachhang);
        swapMain("formkhachhang");
       
    });
    $(".menunhanvien").on("click", function(){
        let menunhanvien2=$('.nav-treeview .menunhanvien').text();
        let menunhanvien=$('.listmenu_open').parent().text();
        $(".titlestatus2").text("/"+menunhanvien2);
        $(".titlestatus").text(menunhanvien);
        swapMain("formnhanvien");
    });
    $(".menunhacungcap").on("click", function(){
        let menunhacungcap2=$('.nav-treeview .menunhacungcap').text();
        let menunhacungcap=$('.listmenu_open').parent().text();
        $(".titlestatus2").text("/"+menunhacungcap2);
        $(".titlestatus").text(menunhacungcap);
        swapMain("formnhacungcap");
    });
    $(".menusp-ncc").on("click", function(){
        let menusp_ncc2=$('.nav-treeview .menusp-ncc').text();
        let menusp_ncc=$('.listmenu_open').parent().text();
        $(".titlestatus2").text("/"+menusp_ncc2);
        $(".titlestatus").text(menusp_ncc);
        swapMain("formsp-ncc");
        showDataCBMaSP();
        showDataCBMaNCC();
    });
    $(".menuhoadon").on("click", function(){
        let menuhoadon2=$('.nav-treeview .menuhoadon').text();
        let menuhoadon=$('.listmenu_open').parent().text();
        $(".titlestatus2").text("/"+menuhoadon2);
        $(".titlestatus").text(menuhoadon);
        swapMain("formhoadon");
    });
    $(".menudondathang").on("click", function(){
        let menudondathang2=$('.nav-treeview .menudondathang').text();
        let menudondathang=$('.listmenu_open').parent().text();
        $(".titlestatus2").text("/"+menudondathang2);
        $(".titlestatus").text(menudondathang);
        swapMain("formdondathang");
    });
    $(".menucthoadon").on("click", function(){
        let menucthoadon2=$('.nav-treeview .menucthoadon').text();
        let menucthoadon=$('.listmenu_open').parent().text();
        $(".titlestatus2").text("/"+menucthoadon2);
        $(".titlestatus").text(menucthoadon);
        swapMain("formcthoadon");
    });
    $(".menuctdondathang").on("click", function(){
        let menuctdondathang2=$('.nav-treeview .menuctdondathang').text();
        let menuctdondathang=$('.listmenu_open').parent().text();
        $(".titlestatus2").text("/"+menuctdondathang2);
        $(".titlestatus").text(menuctdondathang);
        swapMain("formctdondathang");
        showDataCBMagg();
        showDataCBGiaTien();
        showDataCBDDH();
        showDataCBMSP();
    });
    $(".menugiamgia").on("click", function(){
        let menugiamgia2=$('.nav-treeview .menugiamgia').text();
        let menugiamgia=$('.listmenu_open').parent().text();
        $(".titlestatus2").text("/"+menugiamgia2);
        $(".titlestatus").text(menugiamgia);
        swapMain("formgiamgia");
    });
    $(".menuthongke").on("click", function(){
        let menuthongke2=$('.nav-treeview .menuthongke').text();
        let menuthongke=$('.listmenu_thongke').parent().text();
        $(".titlestatus2").text("/"+menuthongke2);
        $(".titlestatus").text(menuthongke);
        $("h1.m-0").text("Thống kê");
        swapMain("formthongke");
    });
    showdataSP();
    showdataKH();
    showdataNV();
    showdataNCC();
    showdataSPNCC();
    showdataHD();
    showdataDDH();
    showdataCTHD();
    showdataCTDDH();
    showdataGG();
    showdataTK_CTDDH();
    buildUserDropdown();
    permission1();
//logout
    $(".addusername").on("click", ".btn_log_out", function(){
        console.log("logout");
        logout();
    })
//change mat khau
    $(".btn_change_matkhau").click(function() {	
		$('.showmodalchangematkhau').modal('show');	
	});
	$(".btn_change_pass").click(function() {
	//var txtpassold=$('.txtpassold').val();
	var txtpassnew=$('.txtpassnew').val();
	var txtpassnewagain=$('.txtpassnewagain').val();
	if(txtpassnew==""||txtpassnewagain=="")
	{
		alert("Mật khẩu không được trống");
	}
	else if(txtpassnew!=txtpassnewagain){
		alert("Mật khẩu cũ và mới không khớp");
	}else{
		 var dataSend={
		event:"updatepass",
		pass:txtpassnew,
		
		username:localStorage.getItem("usernamebookstore")
		}
			console.log(dataSend);
		$(".progesschangepass").html("<img src='images/loading.gif' width='5px' height='5px'/>");
  
        queryDataGet("content.php",dataSend,function (res) {
				console.log(res);
				if(res["updatepass"]==1){
					
					alert("Thay đổi mật khẩu thành công");
					$('.showmodalchangematkhau').modal('hide');
				}else
				{
					alert("Thay đổi mật khẩu thất bại");
				}
					
          $(".progesschangepass").html("");
			})
	}
});
})
function alert_error(mes) {
    bootbox.alert({
        size: "small",
        title: "<span style='color: red'>Thất bại</span>",
        message: mes,
        callback: function(){ /* your callback code */ }
    });
}

//Hàm upload ảnh
function initUploadAllCommon(){
	'use strict';
	var resize = new window.resize();
	resize.init();

	event.preventDefault();
	var files = event.target.files;
		var countFile=files.length;
		for (var i in files) {
			if (typeof files[i] !== 'object') return false;

			(function () {

				var initialSize = files[i].size;

				resize.photo(files[i], 2000, 'file', function (resizedFile) {

					var resizedSize = resizedFile.size;
					 $(".progresscommon").html("Ảnh sách:Đang tải file");
					upload(resizedFile, function(res){
						
						
					   console.log(JSON.parse(res));
						//Lưu ý hàm này
							ketquauploadsp(JSON.parse(res));
						
					});

					// This is not used in the demo, but an example which returns a data URL so yan can show the user a thumbnail before uploading th image.
					resize.photo(resizedFile, 600, 'dataURL', function (thumbnail) {
						//console.log('Display the thumbnail to the user: ', thumbnail);
					});

				});

			}());

		}

	
}
var upload = function (photo, callback) {
	
	var formData = new FormData();
    formData.append('photo', photo);
    
    $.ajax({
        url: './spuploadimagestatus/process.php',
        type : 'POST',
        data : formData,
        async: true,
        xhrFields: {
            withCredentials: true
        },
        processData: false,  // tell jQuery not to process the data
        contentType: false,  // tell jQuery not to set contentType
        success : callback
    });
};
function logout() {
    localStorage.removeItem("rememberbookstore");
    localStorage.removeItem("usernamebookstore");
    localStorage.removeItem("passwordbookstore");
    
    localStorage.removeItem("userbookstore");
   
    location.href ="login.html";

}
function buildUserDropdown(){
		
    myUser=JSON.parse(localStorage.getItem("userbookstore"));
	
	var avatar=localStorage.getItem("avatarbookstore");
	
	if(myUser==undefined || myUser==null||myUser==""){
		
	//    location.href="login.html";
	}
	else{
			
		$(".addusername").html("<div style='text-align=center;' class ='submenuacc'>"+myUser.items[0].fullname+'<br><div class ="menuacc" ><li><a href="#" class="btn_change_matkhau"><i class="fas fa-key"></i>&#160;Đổi mật khẩu</a></li> <li><a href="#" class="btn_log_out"><i class="fas fa-sign-out-alt"></i>&#160;Đăng xuất </a></li></div></div>');
		
		if(avatar=="" || avatar==undefined||avatar=="null"){
			$(".addvartar").attr("src","images/avatar.png");
		}
		else{
			$(".addvartar").attr("src","filesp/"+avatar);
		}	
		
	}
}

function permission1(){
        var permission = localStorage.getItem("permissionbookstore")
        if(permission==1){
            $(".permission1").prop("disabled",true);
            console.log('Bạn đang đăng nhập ở quyền nhân viên');
        }else if(permission==0){
            console.log('Bạn đang đăng nhập ở quyền cao nhất');
        }
        else{
            console.log('Đăng nhập bất hợp pháp');
        }
    }
    
//dùng thư viện
function alert_error(mes) {
    bootbox.alert({
        size: "small",
        title: "",
        message: mes,
        callback: function(){ /* your callback code */ }
    });
}
function alert_success(mes,callback) {
    bootbox.alert({
        size: "small",
        title: "",
        message: mes,
        callback: callback
    });
}
function notext(){
    $('.notext').prop("disabled", true);
}

function buildSlidePage(obj,codan,pageActive,totalPage) {
    var html="";
    pageActive=parseInt(pageActive);
    for(i = 1 ; i <=codan; i++) {
        if(pageActive-i<0) break;
        html='<button type="button" class="btn btn-outline btn-default" value="'+(pageActive-i)+'">'+(pageActive-i+1)+'</button>'+html;
    }
    if(pageActive>codan){
        html='<button type="button" class="btn btn-outline btn-default" value="'+(pageActive-i)+'">...</button>'+html;
    }
    html+='<button type="button" class="btn btn-outline btn-default" style="background-color: #5cb85c" value="'+pageActive+'">'+(pageActive+1)+'</button>';
    for(i = 1 ; i <=codan; i++){
        if(pageActive+i>=totalPage) break;
        html=html+'<button  type="button" class="btn btn-outline btn-default" value="'+(pageActive+i)+'">'+(pageActive+i+1)+'</button>';
    }
    if(totalPage-pageActive>codan+1){
        html=html+'<button type="button" value="'+(pageActive+i)+'" class="btn btn-outline btn-default">...</button>';
    }
    obj.html(html);
}
function printSTT(record,pageCurr){
    if ((pageCurr+1)==1) {
        return 1;
    }else{
        return record*(pageCurr+1)-(record-1);
    }
}


