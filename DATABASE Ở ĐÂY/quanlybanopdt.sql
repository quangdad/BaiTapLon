-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 08, 2021 lúc 02:10 CH
-- Phiên bản máy phục vụ: 5.7.14
-- Phiên bản PHP: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `quanlybanopdt`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietdathang`
--

CREATE TABLE `chitietdathang` (
  `sodh_ctdh` varchar(10) NOT NULL,
  `masp_ctdh` varchar(100) DEFAULT NULL,
  `soluongdat_ctdh` int(11) DEFAULT NULL,
  `giatien_ctdh` float DEFAULT NULL,
  `mgg_ctdh` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `chitietdathang`
--

INSERT INTO `chitietdathang` (`sodh_ctdh`, `masp_ctdh`, `soluongdat_ctdh`, `giatien_ctdh`, `mgg_ctdh`) VALUES
('A006', 'SP005', 7, 2000000, 'GG002'),
('A004', 'SP007', 5, 140000, 'GG001'),
('A001', 'SP001', 3, 140000, 'GG005'),
('A002', 'SP006', 5, 50000, 'GG002'),
('A003', 'SP005', 10, 1200000, 'GG003'),
('A005', 'SP001', 9, 50000, 'GG001');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitiethoadon`
--

CREATE TABLE `chitiethoadon` (
  `sohd_cthd` varchar(10) NOT NULL,
  `masp_cthd` varchar(10) DEFAULT NULL,
  `soluongban_cthd` int(11) DEFAULT NULL,
  `giaban_cthd` float DEFAULT NULL,
  `giamgia_cthd` float DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `chitiethoadon`
--

INSERT INTO `chitiethoadon` (`sohd_cthd`, `masp_cthd`, `soluongban_cthd`, `giaban_cthd`, `giamgia_cthd`) VALUES
('0001', 'SP001', 1, 50000, 0),
('0002', 'SP002', 2, 116000, 29000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dondathang`
--

CREATE TABLE `dondathang` (
  `sodh_dh` varchar(10) NOT NULL,
  `makh_dh` varchar(10) DEFAULT NULL,
  `manv_dh` varchar(10) DEFAULT NULL,
  `ngaydh_dh` date DEFAULT NULL,
  `trangthai_dh` varchar(10) DEFAULT NULL,
  `ngaydukien_dh` date DEFAULT NULL,
  `ngaythucte_dh` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `dondathang`
--

INSERT INTO `dondathang` (`sodh_dh`, `makh_dh`, `manv_dh`, `ngaydh_dh`, `trangthai_dh`, `ngaydukien_dh`, `ngaythucte_dh`) VALUES
('A001', 'KH003', 'NV001', '2021-09-06', 'Còn hàng', '2021-09-12', '2021-09-12'),
('A002', 'KH002', 'NV003', '2021-09-06', 'Còn hàng', '2021-09-12', '2021-09-12'),
('A003', 'KH001', 'NV004', '2021-09-06', 'Còn hàng', '2021-09-12', '2021-09-12'),
('A004', 'KH003', 'NV002', '2021-09-06', 'Hết hàng', '2021-09-12', '2021-09-12'),
('A005', 'KH003', 'NV002', '2021-09-07', 'Giao trễ', '2021-09-12', '2021-09-12'),
('A006', 'KH005', 'NV002', '2021-09-08', 'Còn hàng', '2021-09-13', '2021-09-13'),
('A007', 'KH005', 'NV003', '2021-09-08', 'Còn hàng', '2021-09-13', '2021-09-13');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giamgia`
--

CREATE TABLE `giamgia` (
  `mgg_gg` varchar(10) NOT NULL,
  `tengg_gg` varchar(100) DEFAULT NULL,
  `gg_gg` float DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `giamgia`
--

INSERT INTO `giamgia` (`mgg_gg`, `tengg_gg`, `gg_gg`) VALUES
('GG001', 'Giảm 20%', 0.2),
('GG002', 'Giảm 25%', 0.25),
('GG003', 'Giảm 30%', 0.3),
('GG004', 'Giảm 50%', 0.5),
('GG005', 'Giảm 90%', 0.9),
('GG000', 'Không giảm', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadon`
--

CREATE TABLE `hoadon` (
  `shd_hd` varchar(10) NOT NULL,
  `makh_hd` varchar(10) DEFAULT NULL,
  `manv_hd` varchar(10) DEFAULT NULL,
  `ngayhd_hd` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `hoadon`
--

INSERT INTO `hoadon` (`shd_hd`, `makh_hd`, `manv_hd`, `ngayhd_hd`) VALUES
('HD001', 'Kh001', 'NV001', '2021-09-09'),
('HD002', 'KH002', 'NV004', '2021-11-10'),
('HD003', 'Kh007', 'NV004', '2021-09-10');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhang`
--

CREATE TABLE `khachhang` (
  `makh_kh` varchar(10) NOT NULL,
  `tenkh_kh` varchar(100) DEFAULT NULL,
  `sdt_kh` varchar(10) DEFAULT NULL,
  `email_kh` varchar(100) DEFAULT NULL,
  `diachi_kh` varchar(200) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `khachhang`
--

INSERT INTO `khachhang` (`makh_kh`, `tenkh_kh`, `sdt_kh`, `email_kh`, `diachi_kh`) VALUES
('KH001', 'Nguyễn Văn Tèo', '012381292', 'nvt121@gmalil.com', '12 Trường Sa, Q Bình thạnh'),
('KH002', 'Nguyễn Thị Thu Thủy', '071238213', 'nttt1234@gmail..com', '56A Trần Duy Hưng'),
('KH003', 'Nguyễn Thị Hằng', '0238921923', 'hangnguyen123@gmail.com', '45 Bình Thái, TP Thủ Đức'),
('KH004', 'Trần Thị Hải An', '032493432', 'antran123@gmail.com', '22 Trường Sa, Q Bình thạnh'),
('KH005', 'Nguyễn Văn Tài', '012381233', 'nvt1212@gmalil.com', '32 Trường Sa, Q Bình thạnh');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `login`
--

CREATE TABLE `login` (
  `username` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `avatar` text NOT NULL,
  `permission` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `login`
--

INSERT INTO `login` (`username`, `password`, `fullname`, `avatar`, `permission`) VALUES
('quangdat@gmail.com', '7b52009b64fd0a2a49e6d8a939753077792b0554', 'Lê Quang Đạt', 'cba77b5c8438507a4dd50c2cd95e907a.jpeg', 0),
('huyentran@gmail.com', '356a192b7913b04c54574d18c28d46e6395428ab', 'Trần Thị Mỹ Huyền', '', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhacungcap`
--

CREATE TABLE `nhacungcap` (
  `ma_ncc` varchar(10) NOT NULL,
  `ten_ncc` varchar(100) DEFAULT NULL,
  `sdt_ncc` varchar(10) DEFAULT NULL,
  `email_ncc` varchar(100) DEFAULT NULL,
  `dc_ncc` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `nhacungcap`
--

INSERT INTO `nhacungcap` (`ma_ncc`, `ten_ncc`, `sdt_ncc`, `email_ncc`, `dc_ncc`) VALUES
('NCC001', 'Công Nghệ Song Tín', '0984002222', 'songtin3979@gmail.com', '238 Nguyễn Xí, P. 13, Q. Bình Thạnh,TPHCM'),
('NCC002', 'Cát Thái Store', '0706345188', 'catthaistore@gmail.com', ' 20 Thái Phiên, Phường 2, Quận 11,TPHCM'),
('NCC003', 'Tuấn Kiệt', '0343910411', 'daouyen2202@gmail.com', '65 Nguyễn Xí,531 Lý Thường Kiệt, Phường 8, Tân Bình,TPHCM'),
('NCC004', 'Racing Group', '0973678271', 'racinggroup@gmail.com', '2 Nguyễn Xí, 21 Đường Lê Thị Hoa, Bình Chiểu, Thủ Đức,TPHCM');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanvien`
--

CREATE TABLE `nhanvien` (
  `manv_nv` varchar(10) NOT NULL,
  `tennv_nv` varchar(100) DEFAULT NULL,
  `sdt_nv` varchar(100) DEFAULT NULL,
  `email_nv` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `nhanvien`
--

INSERT INTO `nhanvien` (`manv_nv`, `tennv_nv`, `sdt_nv`, `email_nv`) VALUES
('NV001', 'Trần Thế Thái', '043832493', 'ttt999@gmail.com'),
('NV002', 'Lý Thị Huệ', '023891212', 'lth3321@gmail.com'),
('NV003', 'Trần Thị Thu Thủy', '043832433', 'tttt1111@gmail.com'),
('NV004', 'Vỏ Văn Vũ', '023454323', 'vvv333@gmail.com');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `matl_sp` varchar(10) NOT NULL,
  `tentl_sp` varchar(100) DEFAULT NULL,
  `hsp_sp` varchar(200) DEFAULT NULL,
  `soluong_sp` int(11) DEFAULT NULL,
  `dg_sp` int(11) DEFAULT NULL,
  `url_sp` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`matl_sp`, `tentl_sp`, `hsp_sp`, `soluong_sp`, `dg_sp`, `url_sp`) VALUES
('SP001', 'Ốp lưng iphone 12 tàu', 'Wailin', 0, 50000, '7a86a25bd4982b9fa4a8dfc761df4d34.jpeg'),
('SP002', 'Ốp lưng iphone 12 Supreme', 'Supreme', 0, 146000, 'd1a8788768a50d707c6582f03bebefb5.jpeg'),
('SP003', 'Ốp lưng iphone 11 promax da IMD Adidas', 'Adidas', 0, 2000000, '3b5ea1cf1faa3f395a1086aaf5f7b853.jpeg'),
('SP005', 'Ốp lưng iphone 10 SILICON CATS DREAM', 'HATO Case', 0, 1200000, 'f1ef04f3eb9852543c0959cbad3d5601.jpeg'),
('SP006', 'Ốp lưng iphone X  SILICON BROWN & CONY', 'Adidas', 0, 150000, '5e634cb1b2400cde8e9bc85b60a52332.jpeg'),
('SP007', 'Ốp lưng iphone 10 Supreme ', 'Supreme', 0, 140000, 'a541ce0deb8394a75ad30b94197bd791.jpeg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham_nhacungcap`
--

CREATE TABLE `sanpham_nhacungcap` (
  `mancc_spncc` varchar(10) NOT NULL,
  `masp_spncc` varchar(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `sanpham_nhacungcap`
--

INSERT INTO `sanpham_nhacungcap` (`mancc_spncc`, `masp_spncc`) VALUES
('NCC002', 'SP003'),
('NCC004', 'SP001'),
('NCC003', 'SP005'),
('NCC001', 'SP002');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chitietdathang`
--
ALTER TABLE `chitietdathang`
  ADD PRIMARY KEY (`sodh_ctdh`);

--
-- Chỉ mục cho bảng `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD PRIMARY KEY (`sohd_cthd`);

--
-- Chỉ mục cho bảng `dondathang`
--
ALTER TABLE `dondathang`
  ADD PRIMARY KEY (`sodh_dh`);

--
-- Chỉ mục cho bảng `giamgia`
--
ALTER TABLE `giamgia`
  ADD PRIMARY KEY (`mgg_gg`);

--
-- Chỉ mục cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  ADD PRIMARY KEY (`shd_hd`);

--
-- Chỉ mục cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`makh_kh`);

--
-- Chỉ mục cho bảng `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`username`);

--
-- Chỉ mục cho bảng `nhacungcap`
--
ALTER TABLE `nhacungcap`
  ADD PRIMARY KEY (`ma_ncc`);

--
-- Chỉ mục cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`manv_nv`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`matl_sp`);

--
-- Chỉ mục cho bảng `sanpham_nhacungcap`
--
ALTER TABLE `sanpham_nhacungcap`
  ADD PRIMARY KEY (`mancc_spncc`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
