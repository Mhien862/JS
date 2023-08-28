// Hàm tính điểm trung bình
function tinhDiemTrungBinh(danhSachDiem) {
    if (danhSachDiem.length === 0) {
      return 0;
    }
  
    var tongDiem = 0;
    for (var i = 0; i < danhSachDiem.length; i++) {
      tongDiem += danhSachDiem[i];
    }
  
    var diemTrungBinh = tongDiem / danhSachDiem.length;
    return diemTrungBinh;
  }
  
  // Danh sách các điểm
  var danhSachDiem = [85, 90, 78, 92, 88];
  
  // Tính và in ra điểm trung bình
  var diemTrungBinh = tinhDiemTrungBinh(danhSachDiem);
  console.log("Điểm trung bình là: " + diemTrungBinh);
  