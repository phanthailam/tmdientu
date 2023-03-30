function TaoDoiTuong(id,hinhAnh,ten,mau,size,soLuong,thanhTien){
    var sanpham= new Object();
    sanpham.id=id
    sanpham.hinhAnh=hinhAnh;
    sanpham.ten=ten;
    sanpham.mau=mau;
    sanpham.size=size;
    sanpham.soLuong=soLuong;
    sanpham.thanhTien=thanhTien;

    sanpham.toJson=function (){
        var json=JSON.stringify(this);
        return json;
    } 
    return sanpham;
}


