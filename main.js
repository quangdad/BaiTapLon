
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
// 
	$("."+main).removeClass("is-hidden");
}
$(document).ready(function(){
    swapMain("formsanpham");//mặc địch khi load trang chủ lên
    $(".menusanpham").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Sản phẩm</li>')
        swapMain("formsanpham");
        
    });
    $(".menukhachhang").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Khách hàng</li>');
        swapMain("formkhachhang");
       
    });
    $(".menunhanvien").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Nhân viên</li>');
        swapMain("formnhanvien");
    });
    $(".menunhacungcap").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Nhà cung cấp</li>');
        swapMain("formnhacungcap");
    });
    $(".menusp-ncc").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Sản phẩm_Nhà cung cấp</li>');
        swapMain("formsp-ncc");
        showDataCBMaSP();
        showDataCBMaNCC();
    });
    $(".menuhoadon").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Hóa đơn</li>');
        swapMain("formhoadon");
    });
    $(".menudondathang").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Đơn đặt hàng</li>');
        swapMain("formdondathang");
    });
    $(".menucthoadon").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Chi tiết hóa đơn</li>');
        swapMain("formcthoadon");
    });
    $(".menuctdondathang").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Chi tiết đặt hàng</li>');
        swapMain("formctdondathang");
    });
    $(".menugiamgia").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Giam giá</li>');
        swapMain("formgiamgia");
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
    console.log(permission);
        if(permission==1){
            $(".permission1").prop("disabled",true);
            alert('Bạn đang đăng nhập ở quyền nhân viên')
        }else{
            alert('Bạn đang đăng nhập ở quyền cao nhất')
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


var arr = $('.nav-link p').toArray();

console.log(arr)
var listArr = [];
arr.forEach( (e,i) => {
    listArr.push(e.innerText);
});

listArr.forEach((e,i) => {
    $(e).parent().click(function(){
        console.log(e)
    })
    console.log($(e).parents())
})

var listNav_item = $('.nav-treeview .nav-item').toArray();
console.log(listArr)
console.log(listNav_item)
listNav_item.forEach((e,i)=>{
    $(e).click(function(){
        $('.titlestatus').text("Danh muc/"+e.innerText)
    })
})

