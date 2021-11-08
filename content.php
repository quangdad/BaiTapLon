<?php
require_once("server.php");//Đưa code của file server vào file apiall
$event=$_GET['event']; //nhận sự kiện từ client gửi lên
switch ($event) {
    //viết php sản phẩm--------------------------------------------------------------------------------------	
    case "deleteImage":
		$filelinkanh=$_GET['linkdata'];
		
              if($filelinkanh==""){
					$res["success"] = 1;
				}else{
					$filelinkanh="filesp/".$filelinkanh;
				if(unlink($filelinkanh)){
						$res["success"] = 1;
						
					}else{
						
						$res["success"] = 2;//file not exsit
					}
				}
				
		echo json_encode($res);
        mysqli_close($conn);
        break;
    case "insertSanPham":
				$matl_sp=$_GET['matl_sp'];
				$tentl_sp=$_GET['tentl_sp'];
				$hsp_sp=$_GET['hsp_sp'];
                $soluong_sp=0;
				$dg_sp=$_GET['dg_sp'];
                $url_sp=$_GET['url_sp'];

        $sql="INSERT INTO sanpham (matl_sp, tentl_sp, hsp_sp, soluong_sp, dg_sp, url_sp) VALUES ('".$matl_sp."','".$tentl_sp."','".$hsp_sp."','".$soluong_sp."','".$dg_sp."','".$url_sp."')"; 
        if (mysqli_query($conn, $sql)) {
                $res["sucess"] = 1;  //thành công
            } else {
                $res["sucess"] = 0;
            }       
            echo  json_encode($res);
            mysqli_close($conn);
            break;		
        case "updateSanPham":
            $matl_sp=$_GET['matl_sp'];
			$tentl_sp=$_GET['tentl_sp'];
			$hsp_sp=$_GET['hsp_sp'];
            $soluong_sp=0;
			$dg_sp=$_GET['dg_sp'];
            $url_sp=$_GET['url_sp'];

            $sql="UPDATE sanpham SET tentl_sp='$tentl_sp', hsp_sp='$hsp_sp', soluong_sp='$soluong_sp', dg_sp= '$dg_sp', url_sp= '$url_sp' where matl_sp='$matl_sp'"; 
             if (mysqli_query($conn, $sql)) {
                 $res["sucess"] = 1;  //thành công
            } else {
               $res["sucess"] = 0;
          }    
             echo  json_encode($res);
            mysqli_close($conn);
            break;
        case "deleteSP":
                $matl_sp=$_GET['matl_sp']; 
                $rs=mysqli_query($conn,"select COUNT(*) as 'total' from  chitiethoadon where masp_cthd='".$matl_sp."' ");
                $row=mysqli_fetch_array($rs);
                if((int)$row['total']>0){
                    $res["sucess"] = 2; //{success:2} //đã trùng tên
                }
               else{              
                $sql="DELETE FROM sanpham where  matl_sp='".$matl_sp."'"; 
                 if (mysqli_query($conn, $sql)) {
                     $res["sucess"] = 1;  //thành công
                } else {
                   $res["sucess"] = 0;
              }
            }    
                 echo  json_encode($res);
                mysqli_close($conn);
                break;
        case "getdataSP": 
		
        $mang=array();
       
        
        $sql=mysqli_query($conn,"SELECT * from sanpham"); 
        while($rows=mysqli_fetch_array($sql))
        {
           
            $usertemp['matl_sp']=$rows['matl_sp'];
            $usertemp['tentl_sp']=$rows['tentl_sp'];
            $usertemp['hsp_sp']=$rows['hsp_sp'];
            $usertemp['soluong_sp']=$rows['soluong_sp'];
            $usertemp['dg_sp']=$rows['dg_sp'];
            $usertemp['url_sp']=$rows['url_sp'];
            
            array_push($mang,$usertemp);
        }
        $jsonData['items'] =$mang;
        echo json_encode($jsonData);
        mysqli_close($conn);
         break;
    //viết php khách hàng----------------------------------------------------------------------------------
    case "insertKhachHang":
        $makh_kh=$_GET['makh_kh'];
        $tenkh_kh=$_GET['tenkh_kh'];
        $sdt_kh=$_GET['sdt_kh'];
        $email_kh=$_GET['email_kh'];
        $diachi_kh=$_GET['diachi_kh'];

$sql="INSERT INTO khachhang (makh_kh, tenkh_kh, sdt_kh, email_kh, diachi_kh) VALUES ('$makh_kh','$tenkh_kh','$sdt_kh','$email_kh','$diachi_kh')"; 
    if (mysqli_query($conn, $sql)) {
        $res["sucess"] = 1;  //thành công
    } else {
        $res["sucess"] = 0;
    }       
echo  json_encode($res);
mysqli_close($conn);
break;	

case "updateKhachHang":
    $makh_kh=$_GET['makh_kh'];
    $tenkh_kh=$_GET['tenkh_kh'];
    $sdt_kh=$_GET['sdt_kh'];
    $email_kh=$_GET['email_kh'];
    $diachi_kh=$_GET['diachi_kh'];

$sql="UPDATE khachhang SET tenkh_kh='$tenkh_kh', sdt_kh='$sdt_kh', email_kh='$email_kh', diachi_kh= '$diachi_kh' WHERE makh_kh='$makh_kh'"; 
     if (mysqli_query($conn, $sql)) {
         $res["sucess"] = 1;  //thành công
    } else {
       $res["sucess"] = 0;
  }    
     echo  json_encode($res);
     mysqli_close($conn);
    break;

    case "deleteKH":
        $makh_kh=$_GET['makh_kh']; 
        $rs=mysqli_query($conn,"select COUNT(*) as 'total' from hoadon where makh_hd='".$makh_kh."' ");
        $row=mysqli_fetch_array($rs);
        if((int)$row['total']>0){
            $res["sucess"] = 2; //{success:2} //đã trùng tên
        }
       else{              
        $sql="DELETE FROM khachhang where  makh_kh='".$makh_kh."'"; 
         if (mysqli_query($conn, $sql)) {
             $res["sucess"] = 1;  //thành công
        } else {
           $res["sucess"] = 0;
      }
    }    
         echo  json_encode($res);
        mysqli_close($conn);
        break;

case "getdataKH":
		
        $mang=array();
       
        
        $sql=mysqli_query($conn,"select * from khachhang"); 
        while($rows=mysqli_fetch_array($sql))
        {
           
            $usertemp['makh_kh']=$rows['makh_kh'];
            $usertemp['tenkh_kh']=$rows['tenkh_kh'];
            $usertemp['sdt_kh']=$rows['sdt_kh'];
            $usertemp['email_kh']=$rows['email_kh'];
            $usertemp['diachi_kh']=$rows['diachi_kh'];
            
            array_push($mang,$usertemp);
        }
        $jsonData['items'] =$mang;
        echo json_encode($jsonData);
        mysqli_close($conn);
         break;	
# code...
break;

//viết php nhân viên--------------------------------------------------------------------------------------------
case "insertNV":
    $manv_nv=$_GET['manv_nv'];
    $tennv_nv=$_GET['tennv_nv'];
    $sdt_nv=$_GET['sdt_nv'];
    $email_nv=$_GET['email_nv'];

$sql="INSERT INTO nhanvien (manv_nv, tennv_nv, sdt_nv, email_nv) VALUES ('$manv_nv','$tennv_nv','$sdt_nv','$email_nv')"; 
if (mysqli_query($conn, $sql)) {
    $res["sucess"] = 1;  //thành công
} else {
    $res["sucess"] = 0;
}       
echo  json_encode($res);
mysqli_close($conn);
break;	

case "updateNV":
    $manv_nv=$_GET['manv_nv'];
    $tennv_nv=$_GET['tennv_nv'];
    $sdt_nv=$_GET['sdt_nv'];
    $email_nv=$_GET['email_nv'];

$sql="UPDATE nhanvien SET tennv_nv='$tennv_nv', sdt_nv='$sdt_nv', email_nv='$email_nv' WHERE manv_nv='$manv_nv'"; 
 if (mysqli_query($conn, $sql)) {
     $res["sucess"] = 1;  //thành công
} else {
   $res["sucess"] = 0;
}    
 echo  json_encode($res);
 mysqli_close($conn);
break;

case "deleteNV":
    $manv_nv=$_GET['manv_nv']; 
    $rs=mysqli_query($conn,"select COUNT(*) as 'total' from hoadon where manv_hd='".$manv_nv."' ");
    $row=mysqli_fetch_array($rs);
    if((int)$row['total']>0){
        $res["sucess"] = 2; //{success:2} //đã trùng tên
    }
   else{              
    $sql="DELETE FROM nhanvien where  manv_nv='".$manv_nv."'"; 
     if (mysqli_query($conn, $sql)) {
         $res["sucess"] = 1;  //thành công
    } else {
       $res["sucess"] = 0;
  }
}    
     echo  json_encode($res);
    mysqli_close($conn);
    break;

case "getdataNV":
    
    $mang=array();
   
    
    $sql=mysqli_query($conn,"select * from nhanvien"); 
    while($rows=mysqli_fetch_array($sql))
    {
        $usertemp['manv_nv']=$rows['manv_nv'];
        $usertemp['tennv_nv']=$rows['tennv_nv'];
        $usertemp['sdt_nv']=$rows['sdt_nv'];
        $usertemp['email_nv']=$rows['email_nv'];  
        array_push($mang,$usertemp);
    }
    $jsonData['items'] =$mang;
    echo json_encode($jsonData);
    mysqli_close($conn);
     break;	
# code...
break;

//viết php nhà cung cấp---------------------------------------------------------------------------------------
case "insertNCC":
    $ma_ncc=$_GET['ma_ncc'];
    $ten_ncc=$_GET['ten_ncc'];
    $sdt_ncc=$_GET['sdt_ncc'];
    $email_ncc=$_GET['email_ncc'];
    $dc_ncc=$_GET['dc_ncc'];


$sql="INSERT INTO nhacungcap (ma_ncc, ten_ncc, sdt_ncc, email_ncc, dc_ncc) VALUES ('$ma_ncc','$ten_ncc','$sdt_ncc','$email_ncc', '$dc_ncc')"; 
if (mysqli_query($conn, $sql)) {
    $res["sucess"] = 1;  //thành công
} else {
    $res["sucess"] = 0;
}       
echo  json_encode($res);
mysqli_close($conn);
break;	

case "updateNCC":
    $ma_ncc=$_GET['ma_ncc'];
    $ten_ncc=$_GET['ten_ncc'];
    $sdt_ncc=$_GET['sdt_ncc'];
    $email_ncc=$_GET['email_ncc'];
    $dc_ncc=$_GET['dc_ncc'];

$sql="UPDATE nhacungcap SET ten_ncc='$ten_ncc', sdt_ncc='$sdt_ncc', email_ncc='$email_ncc', dc_ncc='$dc_ncc' WHERE ma_ncc='$ma_ncc'"; 
 if (mysqli_query($conn, $sql)) {
     $res["sucess"] = 1;  //thành công
} else {
   $res["sucess"] = 0;
}    
 echo  json_encode($res);
 mysqli_close($conn);
break;

case "deleteNCC":
    $ma_ncc=$_GET['ma_ncc']; 
    $rs=mysqli_query($conn,"select COUNT(*) as 'total' from sanpham_nhacungcap where mancc_spncc='".$ma_ncc."' ");
    $row=mysqli_fetch_array($rs);
    if((int)$row['total']>0){
        $res["sucess"] = 2; //{success:2} //đã trùng tên
    }
   else{              
    $sql="DELETE FROM nhacungcap where  ma_ncc='".$ma_ncc."'"; 
     if (mysqli_query($conn, $sql)) {
         $res["sucess"] = 1;  //thành công
    } else {
       $res["sucess"] = 0;
  }
}    
     echo  json_encode($res);
    mysqli_close($conn);
    break;

case "getdataNCC":
    
    $mang=array();
   
    
    $sql=mysqli_query($conn,"select * from nhacungcap"); 
    while($rows=mysqli_fetch_array($sql))
    {
       
        $usertemp['ma_ncc']=$rows['ma_ncc'];
        $usertemp['ten_ncc']=$rows['ten_ncc'];
        $usertemp['sdt_ncc']=$rows['sdt_ncc'];
        $usertemp['email_ncc']=$rows['email_ncc'];  
        $usertemp['dc_ncc']=$rows['dc_ncc'];  

        array_push($mang,$usertemp);
    }
    $jsonData['items'] =$mang;
    echo json_encode($jsonData);
    mysqli_close($conn);
     break;	
# code...
break;

//viết php sp ncc----------------------------------------------------------------------------------------------
case "insertSPNCC":
    $mancc_spncc=$_GET['mancc_spncc'];
    $masp_spncc=$_GET['masp_spncc'];

$sql="INSERT INTO sanpham_nhacungcap ( mancc_spncc, masp_spncc) VALUES ('$mancc_spncc', '$masp_spncc')"; 
if (mysqli_query($conn, $sql)) {
    $res["sucess"] = 1;  //thành công
} else {
    $res["sucess"] = 0;
}       
echo  json_encode($res);
mysqli_close($conn);
break;	

case "editSPNCC":
    $mancc_spncc=$_GET['mancc_spncc'];
    $masp_spncc=$_GET['masp_spncc'];
$sql="UPDATE sanpham_nhacungcap SET masp_spncc='$masp_spncc' WHERE mancc_spncc='$mancc_spncc'"; 
 if (mysqli_query($conn, $sql)) {
     $res["sucess"] = 1;  //thành công
} else {
   $res["sucess"] = 0;
}    
 echo  json_encode($res);
 mysqli_close($conn);
break;

case "deleteSPNCC":
    $masp_spncc=$_GET['masp_spncc'];               
    $sql="delete from sanpham_nhacungcap where  masp_spncc='".$masp_spncc."'"; 
     if (mysqli_query($conn, $sql)) {
         $res["sucess"] = 1;  //thành công
    } else {
       $res["sucess"] = 0;
  }    
     echo  json_encode($res);
    mysqli_close($conn);
    break;

case "getdataSPNCC":
    
    $mang=array();
    
    $sql=mysqli_query($conn,"SELECT * from sanpham_nhacungcap ORDER BY mancc_spncc asc"); 
    while($rows=mysqli_fetch_array($sql))
    {
       
        $usertemp['mancc_spncc']=$rows['mancc_spncc'];
        $usertemp['masp_spncc']=$rows['masp_spncc'];
        array_push($mang,$usertemp);
    }
    $jsonData['items'] =$mang;
    echo json_encode($jsonData);
    mysqli_close($conn);
     break;	
# code...
break;

//viết php hóa đơn----------------------------------------------------------------------------------------------
case "insertHD":
    $shd_hd=$_GET['shd_hd'];
    $makh_hd=$_GET['makh_hd'];
    $manv_hd=$_GET['manv_hd'];
    $ngayhd_hd=$_GET['ngayhd_hd'];

$sql="INSERT INTO hoadon (shd_hd, makh_hd, manv_hd, ngayhd_hd) VALUES ('$shd_hd','$makh_hd','$manv_hd','$ngayhd_hd')"; 
if (mysqli_query($conn, $sql)) {
    $res["sucess"] = 1;  //thành công
} else {
    $res["sucess"] = 0;
}       
echo  json_encode($res);
mysqli_close($conn);
break;	

case "updateHD":
    $shd_hd=$_GET['shd_hd'];
    $makh_hd=$_GET['makh_hd'];
    $manv_hd=$_GET['manv_hd'];
    $ngayhd_hd=$_GET['ngayhd_hd'];

$sql="UPDATE hoadon SET makh_hd='$makh_hd', manv_hd='$manv_hd', ngayhd_hd='$ngayhd_hd' WHERE shd_hd='$shd_hd'"; 
 if (mysqli_query($conn, $sql)) {
     $res["sucess"] = 1;  //thành công
} else {
   $res["sucess"] = 0;
}    
 echo  json_encode($res);
 mysqli_close($conn);
break;

case "deleteHD":
    $shd_hd=$_GET['shd_hd'];               
    $sql="delete from hoadon where  shd_hd='".$shd_hd."'"; 
     if (mysqli_query($conn, $sql)) {
         $res["sucess"] = 1;  //thành công
    } else {
       $res["sucess"] = 0;
  }    
     echo  json_encode($res);
    mysqli_close($conn);
    break;

case "getdataHD":
    
    $mang=array();
   
    
    $sql=mysqli_query($conn,"select * from hoadon"); 
    while($rows=mysqli_fetch_array($sql))
    {
       
        $usertemp['shd_hd']=$rows['shd_hd'];
        $usertemp['makh_hd']=$rows['makh_hd'];
        $usertemp['manv_hd']=$rows['manv_hd'];
        $usertemp['ngayhd_hd']=$rows['ngayhd_hd'];  
        array_push($mang,$usertemp);
    }
    $jsonData['items'] =$mang;
    echo json_encode($jsonData);
    mysqli_close($conn);
     break;	
# code...
break;
//viết php đơn đặt hàng----------------------------------------------------------------------------------------------
case "insertDDH":
    $sodh_dh=$_GET['sodh_dh'];
    $makh_dh=$_GET['makh_dh'];
    $manv_dh=$_GET['manv_dh'];
    $ngaydh_dh=$_GET['ngaydh_dh'];
    $trangthai_dh=$_GET['trangthai_dh'];
    $ngaydukien_dh=$_GET['ngaydukien_dh'];
    $ngaythucte_dh=$_GET['ngaythucte_dh'];

$sql="INSERT INTO dondathang (sodh_dh, makh_dh, manv_dh, ngaydh_dh, trangthai_dh, ngaydukien_dh, ngaythucte_dh) VALUES ('$sodh_dh','$makh_dh','$manv_dh','$ngaydh_dh', '$trangthai_dh', '$ngaydukien_dh', '$ngaythucte_dh')"; 
if (mysqli_query($conn, $sql)) {
    $res["sucess"] = 1;  //thành công
} else {
    $res["sucess"] = 0;
}       
echo  json_encode($res);
mysqli_close($conn);
break;	

case "updateDDH":
    $sodh_dh=$_GET['sodh_dh'];
    $makh_dh=$_GET['makh_dh'];
    $manv_dh=$_GET['manv_dh'];
    $ngaydh_dh=$_GET['ngaydh_dh'];
    $trangthai_dh=$_GET['trangthai_dh'];
    $ngaydukien_dh=$_GET['ngaydukien_dh'];
    $ngaythucte_dh=$_GET['ngaythucte_dh'];

$sql="UPDATE dondathang SET makh_dh='$makh_dh', manv_dh='$manv_dh', ngaydh_dh='$ngaydh_dh', trangthai_dh='$trangthai_dh', ngaydukien_dh='$ngaydukien_dh', ngaythucte_dh='$ngaythucte_dh' WHERE sodh_dh='$sodh_dh'"; 
 if (mysqli_query($conn, $sql)) {
     $res["sucess"] = 1;  //thành công
} else {
   $res["sucess"] = 0;
}    
 echo  json_encode($res);
 mysqli_close($conn);
break;

case "deleteDHH":
    $sodh_dh=$_GET['sodh_dh'];               
    $sql="delete from dondathang where  sodh_dh='".$sodh_dh."'"; 
     if (mysqli_query($conn, $sql)) {
         $res["sucess"] = 1;  //thành công
    } else {
       $res["sucess"] = 0;
  }    
     echo  json_encode($res);
    mysqli_close($conn);
    break;

case "getdataDDH":
    
    $mang=array();
   
    
    $sql=mysqli_query($conn,"select * from dondathang"); 
    while($rows=mysqli_fetch_array($sql))
    {
       
        $usertemp['sodh_dh']=$rows['sodh_dh'];
        $usertemp['makh_dh']=$rows['makh_dh'];
        $usertemp['manv_dh']=$rows['manv_dh'];
        $usertemp['ngaydh_dh']=$rows['ngaydh_dh'];  
        $usertemp['trangthai_dh']=$rows['trangthai_dh'];
        $usertemp['ngaydukien_dh']=$rows['ngaydukien_dh'];
        $usertemp['ngaythucte_dh']=$rows['ngaythucte_dh'];
        array_push($mang,$usertemp);
    }
    $jsonData['items'] =$mang;
    echo json_encode($jsonData);
    mysqli_close($conn);
     break;	
# code...
break;

//viết php ct hóa đơn----------------------------------------------------------------------------------------------
case "insertCTHD":
    $sohd_cthd=$_GET['sohd_cthd'];
    $masp_cthd=$_GET['masp_cthd'];
    $soluongban_cthd=$_GET['soluongban_cthd'];
    $giaban_cthd=$_GET['giaban_cthd'];
    $giamgia_cthd=$_GET['giamgia_cthd'];

$sql="INSERT INTO chitiethoadon (sohd_cthd, masp_cthd, soluongban_cthd, giaban_cthd, giamgia_cthd) VALUES ('$sohd_cthd','$masp_cthd','$soluongban_cthd','$giaban_cthd', '$giamgia_cthd')"; 
if (mysqli_query($conn, $sql)) {
    $res["sucess"] = 1;  //thành công
} else {
    $res["sucess"] = 0;
}       
echo  json_encode($res);
mysqli_close($conn);
break;	

case "updateCTHD":
    $sohd_cthd=$_GET['sohd_cthd'];
    $masp_cthd=$_GET['masp_cthd'];
    $soluongban_cthd=$_GET['soluongban_cthd'];
    $giaban_cthd=$_GET['giaban_cthd'];
    $giamgia_cthd=$_GET['giamgia_cthd'];

$sql="UPDATE chitiethoadon SET masp_cthd='$masp_cthd', soluongban_cthd='$soluongban_cthd', giaban_cthd='$giaban_cthd', giamgia_cthd='$giamgia_cthd' WHERE sohd_cthd='$sohd_cthd'"; 
 if (mysqli_query($conn, $sql)) {
     $res["sucess"] = 1;  //thành công
} else {
   $res["sucess"] = 0;
}    
 echo  json_encode($res);
 mysqli_close($conn);
break;

case "deleteCTHD":
    $sohd_cthd=$_GET['sohd_cthd'];               
    $sql="delete from chitiethoadon where  sohd_cthd='".$sohd_cthd."'"; 
     if (mysqli_query($conn, $sql)) {
         $res["sucess"] = 1;  //thành công
    } else {
       $res["sucess"] = 0;
  }    
     echo  json_encode($res);
    mysqli_close($conn);
    break;

case "getdataCTHD":
    
    $mang=array();
   
    
    $sql=mysqli_query($conn,"select * from chitiethoadon ORDER BY sohd_cthd ASC"); 
    while($rows=mysqli_fetch_array($sql))
    {
       
        $usertemp['sohd_cthd']=$rows['sohd_cthd'];
        $usertemp['masp_cthd']=$rows['masp_cthd'];
        $usertemp['soluongban_cthd']=$rows['soluongban_cthd'];
        $usertemp['giaban_cthd']=$rows['giaban_cthd'];  
        $usertemp['giamgia_cthd']=$rows['giamgia_cthd'];  
        array_push($mang,$usertemp);
    }
    $jsonData['items'] =$mang;
    echo json_encode($jsonData);
    mysqli_close($conn);
     break;	
# code...
break;

//viết php CTDH----------------------------------------------------------------------------------------------
case "insertCTDDH":
    $sodh_ctdh=$_GET['sodh_ctdh'];
    $masp_ctdh=$_GET['masp_ctdh'];
    $soluongdat_ctdh=$_GET['soluongdat_ctdh'];
    $giatien_ctdh=$_GET['giatien_ctdh'];
    $mgg_ctdh=$_GET['mgg_ctdh'];

$sql="INSERT INTO chitietdathang (sodh_ctdh, masp_ctdh, soluongdat_ctdh, giatien_ctdh, mgg_ctdh) VALUES ('$sodh_ctdh','$masp_ctdh','$soluongdat_ctdh','$giatien_ctdh', '$mgg_ctdh')"; 
if (mysqli_query($conn, $sql)) {
    $res["sucess"] = 1;  //thành công
} else {
    $res["sucess"] = 0;
}       
echo  json_encode($res);
mysqli_close($conn);
break;	

case "updateCTDDH":
    $sodh_ctdh=$_GET['sodh_ctdh'];
    $masp_ctdh=$_GET['masp_ctdh'];
    $soluongdat_ctdh=$_GET['soluongdat_ctdh'];
    $giatien_ctdh=$_GET['giatien_ctdh'];
    $mgg_ctdh=$_GET['mgg_ctdh'];

$sql="UPDATE chitietdathang SET masp_ctdh='$masp_ctdh', soluongdat_ctdh='$soluongdat_ctdh', giatien_ctdh='$giatien_ctdh', mgg_ctdh='$mgg_ctdh' WHERE sodh_ctdh='$sodh_ctdh'"; 
 if (mysqli_query($conn, $sql)) {
     $res["sucess"] = 1;  //thành công
} else {
   $res["sucess"] = 0;
}    
 echo  json_encode($res);
 mysqli_close($conn);
break;

case "deleteCTDDH":
    $sodh_ctdh=$_GET['sodh_ctdh'];               
    $sql="delete from chitietdathang where  sodh_ctdh='".$sodh_ctdh."'"; 
     if (mysqli_query($conn, $sql)) {
         $res["sucess"] = 1;  //thành công
    } else {
       $res["sucess"] = 0;
  }    
     echo  json_encode($res);
    mysqli_close($conn);
    break;

case "getdataCTDDH":
    
    $mang=array();
   
    
    $sql=mysqli_query($conn,"select ctdh.*, gg.mgg_gg, gg.tengg_gg, ddh.sodh_dh, sp.matl_sp, sp.tentl_sp,  sp.dg_sp from chitietdathang ctdh , giamgia gg, sanpham sp, dondathang ddh where ctdh.mgg_ctdh = gg.mgg_gg and ctdh.sodh_ctdh = ddh.sodh_dh and ctdh.masp_ctdh = sp.matl_sp "); 
    while($rows=mysqli_fetch_array($sql))
    {
       
        $usertemp['sodh_ctdh']=$rows['sodh_ctdh'];
        $usertemp['masp_ctdh']=$rows['masp_ctdh'];
        $usertemp['soluongdat_ctdh']=$rows['soluongdat_ctdh'];
        $usertemp['mgg_ctdh']=$rows['mgg_ctdh']; 
        $usertemp['mgg_gg']=$rows['mgg_gg']; 
        $usertemp['sodh_dh']=$rows['sodh_dh']; 
        $usertemp['matl_sp']=$rows['matl_sp']; 
        $usertemp['dg_sp']=$rows['dg_sp']; 
        $usertemp['tengg_gg']=$rows['tengg_gg']; 
        $usertemp['tentl_sp']=$rows['tentl_sp']; 

        array_push($mang,$usertemp);
    }
    $jsonData['items'] =$mang;
    echo json_encode($jsonData);
    mysqli_close($conn);
     break;	
//viết php giảm giá
case "insertGG":
    $mgg_gg=$_GET['mgg_gg'];
    $tengg_gg=$_GET['tengg_gg'];
    $gg_gg=$_GET['gg_gg'];

$sql="INSERT INTO giamgia (mgg_gg, tengg_gg, gg_gg) VALUES ('$mgg_gg','$tengg_gg','$gg_gg')"; 
if (mysqli_query($conn, $sql)) {
    $res["sucess"] = 1;  //thành công
} else {
    $res["sucess"] = 0;
}       
echo  json_encode($res);
mysqli_close($conn);
break;	

case "updateGG":
    $mgg_gg=$_GET['mgg_gg'];
    $tengg_gg=$_GET['tengg_gg'];
    $gg_gg=$_GET['gg_gg'];

$sql="UPDATE giamgia SET tengg_gg='$tengg_gg', gg_gg='$gg_gg'WHERE mgg_gg='$mgg_gg'"; 
 if (mysqli_query($conn, $sql)) {
     $res["sucess"] = 1;  //thành công
} else {
   $res["sucess"] = 0;
}    
 echo  json_encode($res);
 mysqli_close($conn);
break;

case "deleteGG":
    $mgg_gg=$_GET['mgg_gg'];               
    $sql="delete from giamgia where  mgg_gg='".$mgg_gg."'"; 
     if (mysqli_query($conn, $sql)) {
         $res["sucess"] = 1;  //thành công
    } else {
       $res["sucess"] = 0;
  }    
     echo  json_encode($res);
    mysqli_close($conn);
    break;

case "getdataGG":
    
    $mang=array();
   
    
    $sql=mysqli_query($conn,"select * from giamgia ORDER BY mgg_gg ASC"); 
    while($rows=mysqli_fetch_array($sql))
    {
       
        $usertemp['mgg_gg']=$rows['mgg_gg'];
        $usertemp['tengg_gg']=$rows['tengg_gg'];
        $usertemp['gg_gg']=$rows['gg_gg'];
        array_push($mang,$usertemp);
    }
    $jsonData['items'] =$mang;
    echo json_encode($jsonData);
    mysqli_close($conn);
     break;	
default:
break;

//viết php thống kê
case "getdataTK_CTDDH":
     $record=$_GET['record']; //số dòng sẽ lấy về từ server
        $page=$_GET['page']; //số số trang mà client
		$search=$_GET['search']; //Tìm kiếm dữ liệu
		$vt=$page*$record;  //page=1,record=2
        $limit='limit '.$vt.' , '.$record;
    $mang=array();
   
    
    $sql=mysqli_query($conn,"select ctdh.*, gg.gg_gg, sp.dg_sp from chitietdathang ctdh , giamgia gg, sanpham sp  where ctdh.mgg_ctdh = gg.mgg_gg and ctdh.masp_ctdh = sp.matl_sp ORDER BY sodh_ctdh ASC" .$limit); 
    while($rows=mysqli_fetch_array($sql))
    {
       
        $usertemp['sodh_ctdh']=$rows['sodh_ctdh'];
        $usertemp['masp_ctdh']=$rows['masp_ctdh'];
        $usertemp['soluongdat_ctdh']=$rows['soluongdat_ctdh'];
        $usertemp['dg_sp']=$rows['dg_sp']; 
        $usertemp['mgg_ctdh']=$rows['mgg_ctdh']; 
        $usertemp['gg_gg']=$rows['gg_gg']; 

        array_push($mang,$usertemp);
    }
    $rs=mysqli_query($conn,"select COUNT(*) as 'total' from chitietdathang ctdh , giamgia gg, sanpham sp  where ctdh.mgg_ctdh = gg.mgg_gg and ctdh.masp_ctdh = sp.matl_sp ORDER BY sodh_ctdh ASC");
        $row=mysqli_fetch_array($rs);
        $jsonData['total'] =(int)$row['total'];
		$jsonData['totalpage'] =ceil($row['total']/$record);
	    $jsonData['page'] =(int)$page;
    $jsonData['items'] =$mang;
    echo json_encode($jsonData);
    mysqli_close($conn);
     break;	
# code...
break;
# code...
break;
//////////////////////LOGIN////////////////////////////
case "login":
	$mang=array();
		$username=$_GET['username'];
		$password=sha1($_GET['password']);
        $rs=mysqli_query($conn,"select * from login where  username='".$username."' and `password`='".$password."'");
		if(mysqli_num_rows($rs)>0){
		while ($rows=mysqli_fetch_array($rs)){
			
            
            $usertemp['username']=$rows['username'];
            $usertemp['password']=$rows['password'];
			
			$usertemp['fullname']=$rows['fullname'];
			
			$usertemp['avatar']=$rows['avatar'];
			
			$usertemp['permission']=$rows['permission'];
			
		   array_push($mang,$usertemp);
		}
	
        $jsondata['success'] =1;
		
        $jsondata['items'] =$mang;
		
        echo json_encode($jsondata);
		}
		else{
		$jsondata['success'] =0;
		
        $jsondata['items'] =$mang;
		echo json_encode($jsondata);
		}

        mysqli_close($conn);
        break;

///////////////////////CHANGEPASSWORD////////////////////////////
        case "updatepass":
            $username=$_GET['username'];
            $pass=sha1($_GET['pass']);
            $sql="update `login` set password='$pass' where username='".$username."'";
             
                if (mysqli_query($conn,$sql)) {
                    if(mysqli_affected_rows($conn)>0){
                        $res[$event] = 1;
                    }
                    else
                    {
                        $res[$event] = 0;
                    }
                } else {
                    $res[$event] = 0;
                }
            echo json_encode($res);
            mysqli_close($conn);
            break;


}
?>