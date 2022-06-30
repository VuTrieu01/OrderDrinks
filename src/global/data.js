import { icons, images } from "../constants";

export const filterData = [
  {
    image: icons.tea,
    text: "Trà",
    image_url: "https://media.loveitopcdn.com/1229/cong-dung-cua-tra-tac.jpg",
  },
  {
    image: icons.yogurts,
    text: "Sữa chua",
    image_url: "http://ggfc.vn/uploads/Vui-song-khoe/24-sua-chua-5.jpg",
  },
  {
    image: icons.coffee,
    text: "Cà phê",
    image_url:
      "https://sanphamdacsan.com/datafiles/3/2019-04-16/700-49016427-cach-nhan-biet-ca-phe-nguyen-chat.jpg",
  },
  {
    image: icons.latte_macchiato,
    text: "Latte đá",
    image_url: "https://horecavn.com/uploads/images/latte-da-xay-2-tang.jpg",
  },
  {
    image: icons.cold_coffee,
    text: "Đá xay",
    image_url:
      "http://vndhomecoffee.com/public/uploads/images/2018/12/matcha-da-xay-1545124028.jpg",
  },
  {
    image: icons.milkshake,
    text: "Kem",
    image_url:
      "http://cdn-img-v2.webbnc.net/uploadv2/web/41/4138/news/2019/05/18/02/50/1558191031_kem-ly-114091-1445999020.jpg",
  },
  {
    image: icons.soft_drink,
    text: "Nước ngọt",
    image_url:
      "https://cdn-www.vinid.net/2020/05/a3ce42b8-n%C6%B0%E1%BB%9Bc-ng%E1%BB%8Dt-%C4%91%C6%B0%E1%BB%A3c-y%C3%AAu-th%C3%ADch-nh%E1%BA%A5t.jpg",
  },
  {
    image: icons.fruit_juice,
    text: "Sinh tố",
    image_url:
      "https://tse3.mm.bing.net/th?id=OIP.4BZDqeLWVC8YGGCb9LznXAHaHa&pid=Api&P=0&w=163&h=163",
  },
  {
    image: icons.juice,
    text: "Nước ép",
    image_url:
      "https://tse1.mm.bing.net/th?id=OIP.hJzBgVM7klKRnZrbf9HvUAHaHa&pid=Api&P=0&w=171&h=171",
  },
];

export const initialCurrentLocation = {
  streetName: "Kuching",
  gps: {
    latitude: 10.846577559191843,
    longitude: 106.79455797572422,
  },
};

export const localItem = [
  {
    name: "ANNA COFFEE",
    farAway: "25-30",
    address: "D3, Phước Long B, Quận 9, Thành phố Hồ Chí Minh",
    image_url:
      "http://www.annacoffee.vn/image/catalog/tin-tuc/annacoffeequan9/annacoffee_quan9%20(9).jpg",
    averageReviews: 2.1,
    numberOfReview: 50,
    location: { latitude: 10.809132636690782, longitude: 106.78218775238416 },
    courier: {
      avatar: images.avatar_1,
      name: "Nguyễn Thị A",
    },
    dinkType: ["Sữa chua", "Trà", "Cà phê", "Nước ép", "Sinh tố"],
    productData: [
      {
        name: "Cam",
        price: 20000,
        image:
          "https://tse1.mm.bing.net/th?id=OIP.1PzMDXzgOM4AJrgAxYXHzQHaGn&pid=Api&P=0&w=199&h=178",
        type: "Nước ép",
      },
      {
        name: "Thơm",
        price: 18000,
        image:
          "https://product.hstatic.net/1000166699/product/_cnt6106_a88d75df3d724515b1d9a3752e5403fc_master.jpg",
        type: "Nước ép",
      },
      {
        name: "Cà rốt",
        price: 20000,
        image:
          "http://saigonoicafe.com/resize-image/600x/menu/nuoc-ep-ca-rot_master.png",
        type: "Nước ép",
      },
      {
        name: "Cam + Cà rốt",
        price: 25000,
        image:
          "https://caphevui.com/wp-content/uploads/2019/09/epcamcarot-300x300.jpg",
        type: "Nước ép",
      },
      {
        name: "Thơm + Cà rốt",
        price: 25000,
        image:
          "https://bepantamduc.vn/uploads/san-pham/2020_05/nuoc-ep-dua-ca-rot.jpg",
        type: "Nước ép",
      },
      {
        name: "Dưa hấu",
        price: 20000,
        image:
          "https://tse1.mm.bing.net/th?id=OIF.3g3Rsq14wAewhE5g3%2fGiDw&pid=Api&P=0&w=183&h=229",
        type: "Nước ép",
      },
      {
        name: "Bơ",
        price: 25000,
        image:
          "https://tse3.mm.bing.net/th?id=OIP.x3ymznRzQwnXOy1ZvuiChgHaHa&pid=Api&P=0&w=196&h=196",
        type: "Sinh tố",
      },
      {
        name: "Dâu tây",
        price: 25000,
        image:
          "https://tse4.mm.bing.net/th?id=OIP.RU6fJUuyP_ShnZOhHsK58AHaGh&pid=Api&P=0&w=175&h=154",
        type: "Sinh tố",
      },
      {
        name: "Mảng cầu",
        price: 25000,
        image: "https://i.ytimg.com/vi/XQcpsNv6u0M/maxresdefault.jpg",
        type: "Sinh tố",
      },
      {
        name: "Xoài",
        price: 25000,
        image:
          "https://cdn.tgdd.vn/Files/2019/06/14/1173152/cach-lam-sinh-to-xoai-don-gian-ma-cuc-ngon-5_800x450.jpg",
        type: "Sinh tố",
      },
      {
        name: "Đào",
        price: 25000,
        image:
          "https://cdn.dayphache.edu.vn/wp-content/uploads/2016/07/d4b22e8d4b1fb6349c7d95bc5629e3c0.jpg",
        type: "Sinh tố",
      },
      {
        name: "Cam",
        price: 25000,
        image:
          "https://beptruong.edu.vn/wp-content/uploads/2019/02/sinh-to-cam-ket-hop-voi-xoai.jpg",
        type: "Sinh tố",
      },
      {
        name: "Dưa gang",
        price: 20000,
        image:
          "https://www.bartender.edu.vn/wp-content/uploads/2015/12/sinh-to-dua-gang-400x267.jpg",
        type: "Sinh tố",
      },
      {
        name: "Việt quất",
        price: 25000,
        image:
          "https://media.cooky.vn/recipe/g4/32549/s800x500/cooky-recipe-cover-r32549.jpg",
        type: "Sinh tố",
      },
      {
        name: "Sữa chua đánh đá",
        price: 18000,
        image:
          "https://bonjourcoffee.vn/blog/wp-content/uploads/2019/11/sua-chua-danh-da-trai-cay-300x166.jpg",
        type: "Sữa chua",
      },
      {
        name: "Yaourt việt quất",
        price: 25000,
        image:
          "http://nguyenlieuphache.com.vn/upload/congthuc/smoothie-viet-quat.jpg",
        type: "Sữa chua",
      },
      {
        name: "Yaourt chanh dây",
        price: 25000,
        image:
          "https://mayxaydaunanh.vn/wp-content/uploads/2020/12/Pha-che-smoothie-chanh-day-giai-nhiet-voi-may-xay-cong-suat-lon-600x462-1.jpg",
        type: "Sữa chua",
      },
      {
        name: "Yaourt dâu",
        price: 25000,
        image:
          "http://nguyenlieuphache.com.vn/upload/congthuc/Dau_Smoothie_thumb.jpg",
        type: "Sữa chua",
      },
      {
        name: "Gu mộc",
        price: 12000,
        image:
          "https://lythuytinhsg.com/wp-content/uploads/2021/02/cac-mau-ly-cafe-dep.jpg",
        type: "Cà phê",
      },
      {
        name: "Cacao Kajan",
        price: 20000,
        image:
          "https://lythuytinhsg.com/wp-content/uploads/2021/02/cac-mau-ly-cafe-dep.jpg",
        type: "Cà phê",
      },
      {
        name: "Cacao Kajan",
        price: 25000,
        image:
          "http://vndhomecoffee.com/public/uploads/images/MENU/CA-PHE-DA-XAY/mocha-da-xay/hazelnut-coffee-ice-blended-1590640022.jpg",
        type: "Cà phê",
      },
      {
        name: "Trà đào",
        price: 22000,
        image: "https://kenhphunu.com/images/032018/files/thuhuyen/tra-dao.jpg",
        type: "Trà",
      },
      {
        name: "Trà xanh",
        price: 22000,
        image:
          "https://tra-olong.com/wp-content/uploads/2016/10/tra-xanh-matcha-moc-son.jpg",
        type: "Trà",
      },
      {
        name: "Trà vải bạc hà",
        price: 22000,
        image:
          "https://massageishealthy.com/wp-content/uploads/2017/09/cach-lam-tra-vai-bang-tra-tui-loc-ngon-7.jpg",
        type: "Trà",
      },
      {
        name: "Trà sữa táo xanh",
        price: 22000,
        image:
          "https://horecavn.com/uploads/images/dao-tao/cach-lam-nuoc-ha-nhiet-co-the-sua-dau-nanh-tra-xanh.jpg",
        type: "Trà",
      },
    ],
  },
  {
    name: "Dốc Coffee",
    farAway: "10",
    address:
      "11 Đình Phong Phú, Tăng Nhơn Phú B, Quận 9, Thành phố Hồ Chí Minh",
    image_url:
      "https://images.foody.vn/res/g24/235901/s180x180/foody-doc-coffee-668-636338319419805239.jpg",
    averageReviews: 2.5,
    numberOfReview: 20,
    location: { latitude: 10.84297556579215, longitude: 106.78125231788164 },
    courier: {
      avatar: images.avatar_2,
      name: "Nguyễn Văn B",
    },
    dinkType: ["Sữa chua", "Trà", "Cà phê", "Nước ép", "Sinh tố"],
    productData: [
      {
        name: "Cam vắt",
        price: 20000,
        image:
          "https://tse1.mm.bing.net/th?id=OIP.1PzMDXzgOM4AJrgAxYXHzQHaGn&pid=Api&P=0&w=199&h=178",
        type: "Nước ép",
      },
      {
        name: "Cam vắt sữa",
        price: 23000,
        image:
          "https://www.healthy-delicious.com/wp-content/uploads/2018/01/Pineapple-Ginger-Immunity-Smoothie-Healthy-Delicious-Double-Size-5-400x600.jpg",
        type: "Nước ép",
      },
      {
        name: "Bơ",
        price: 25000,
        image:
          "https://tse3.mm.bing.net/th?id=OIP.x3ymznRzQwnXOy1ZvuiChgHaHa&pid=Api&P=0&w=196&h=196",
        type: "Sinh tố",
      },
      {
        name: "Dâu tây",
        price: 25000,
        image:
          "https://tse4.mm.bing.net/th?id=OIP.RU6fJUuyP_ShnZOhHsK58AHaGh&pid=Api&P=0&w=175&h=154",
        type: "Sinh tố",
      },
      {
        name: "Mảng cầu",
        price: 25000,
        image: "https://i.ytimg.com/vi/XQcpsNv6u0M/maxresdefault.jpg",
        type: "Sinh tố",
      },
      {
        name: "Sữa chua đánh đá",
        price: 18000,
        image:
          "https://bonjourcoffee.vn/blog/wp-content/uploads/2019/11/sua-chua-danh-da-trai-cay-300x166.jpg",
        type: "Sữa chua",
      },
      {
        name: "Yaourt chanh dây",
        price: 25000,
        image:
          "https://mayxaydaunanh.vn/wp-content/uploads/2020/12/Pha-che-smoothie-chanh-day-giai-nhiet-voi-may-xay-cong-suat-lon-600x462-1.jpg",
        type: "Sữa chua",
      },
      {
        name: "Yaourt dâu",
        price: 25000,
        image:
          "http://nguyenlieuphache.com.vn/upload/congthuc/Dau_Smoothie_thumb.jpg",
        type: "Sữa chua",
      },
      {
        name: "Cà phê sữa nóng đá",
        price: 15000,
        image:
          "https://th.bing.com/th/id/R.e98bfe6e4e6894da1c493db1f59f1904?rik=8wN44qvF5f4L6w&riu=http%3a%2f%2fvhealthcoffee.com.vn%2fuploads%2funnamed.jpg&ehk=FPIfmfudiCeICy8MQrEe38ZE2cPDZAhgnvYqmXg%2fA5o%3d&risl=&pid=ImgRaw&r=0",
        type: "Cà phê",
      },
      {
        name: "Bạc sỉu",
        price: 15000,
        image:
          "https://thecoffeehouse.com.vn/wp-content/uploads/2020/11/sp15.jpg",
        type: "Cà phê",
      },
      {
        name: "Cacao sữa",
        price: 20000,
        image:
          "https://th.bing.com/th/id/R.fd09f25e3318f3db1f12b1692e0c02e7?rik=1frsJTgfE21RLQ&riu=http%3a%2f%2fcomnieuhuonglan.com%2fupload%2fproduct%2f021332874723.jpg&ehk=2M4P7zz9MY05ZUsKU%2fYNXCRTzAVfKPVMpW4drlWNIGs%3d&risl=&pid=ImgRaw&r=0",
        type: "Cà phê",
      },
      {
        name: "Trà sữa trân châu",
        price: 15000,
        image:
          "https://www.vinaorganic.com/wp-content/uploads/2019/08/tra-sua-tran-chau-vno.png",
        type: "Trà",
      },
      {
        name: "Trà sữa thạch trái cây",
        price: 15000,
        image:
          "https://th.bing.com/th/id/OIP.sW2cZw4pHZ7McsbKrmskrgHaHJ?pid=ImgDet&rs=1",
        type: "Trà",
      },
      {
        name: "Trà sữa thạch phô mai",
        price: 15000,
        image:
          "https://th.bing.com/th/id/R.48c6a2e538fb1974132c35aa9b397bdf?rik=rbgtFRy%2bIvNo3A&riu=http%3a%2f%2failien.vn%2fdata%2fupload%2fTra-sua-thach-pho-mai-vua-beo-ngay-vua-da-con-khat-ngay-nang-nong-tra-sua2.jpg&ehk=95fCJIZJ7fXJ7%2f3fHLDT%2b1zrYwAlo8VXRcZCeSmLUVA%3d&risl=&pid=ImgRaw&r=0",
        type: "Trà",
      },
      {
        name: "Trà sữa đào",
        price: 22000,
        image:
          "https://xebanhangluudong.vn/image/catalog/TS-HuongDao/tra-dao-gia-re.jpg",
        type: "Trà",
      },
    ],
  },
  {
    name: "Ông Bầu",
    farAway: "5",
    address: "99 Lê Văn Việt, P. Tăng Nhơn Phú A, Quận 9, TP. HCM",
    image_url:
      "https://images.foody.vn/res/g103/1022389/s180x180/foody-ca-phe-ong-bau-le-van-viet-691-637322659173904614.jpg",
    averageReviews: 2.5,
    numberOfReview: 20,
    location: { latitude: 10.845014938224462, longitude: 106.79336804054778 },
    courier: {
      avatar: images.avatar_3,
      name: "Nguyễn Văn C",
    },
    dinkType: ["Sữa chua", "Trà", "Cà phê", "Latte đá", "Sinh tố"],
    productData: [
      {
        name: "Chocolate",
        price: 35000,
        image:
          "https://kenh14cdn.com/thumb_w/600/LJ9BRCA2SwO2i2yoqIMzIMq9QI2QMI/Image/2015/07/Ngam/1-2d463.jpg",
        type: "Sinh tố",
      },
      {
        name: "Cà phê dừa",
        price: 35000,
        image:
          "https://th.bing.com/th/id/OIP.CYs4OHq4K39_elljZBV0vAHaHa?pid=ImgDet&rs=1",
        type: "Sinh tố",
      },
      {
        name: "Matcha dừa",
        price: 35000,
        image:
          "https://th.bing.com/th/id/OIP.qtyybnHIkpevUqVEbdW1HQHaE8?pid=ImgDet&rs=1",
        type: "Sinh tố",
      },
      {
        name: "Sữa chua cà phê",
        price: 32000,
        image:
          "https://th.bing.com/th/id/R.446dcdf784004f355c942c196e7f7a38?rik=CyVFKBiLAqSvDg&pid=ImgRaw&r=0",
        type: "Sữa chua",
      },
      {
        name: "Sữa chua trân châu",
        price: 32000,
        image:
          "https://i.vietgiaitri.com/2020/8/21/sua-chua-tran-chau-ha-long-co-gi-ngon-la-ma-dang-hot-ran-ran-cdb-5174735.jpg",
        type: "Sữa chua",
      },
      {
        name: "Sữa chua uống ổi hồng",
        price: 32000,
        image:
          "https://i.pinimg.com/originals/b3/71/44/b37144441f0efc6cbc6d6095ad11392d.jpg",
        type: "Sữa chua",
      },
      {
        name: "Cà phê sữa",
        price: 18000,
        image:
          "https://th.bing.com/th/id/R.e98bfe6e4e6894da1c493db1f59f1904?rik=8wN44qvF5f4L6w&riu=http%3a%2f%2fvhealthcoffee.com.vn%2fuploads%2funnamed.jpg&ehk=FPIfmfudiCeICy8MQrEe38ZE2cPDZAhgnvYqmXg%2fA5o%3d&risl=&pid=ImgRaw&r=0",
        type: "Cà phê",
      },
      {
        name: "Cà phê đen",
        price: 18000,
        image:
          "https://th.bing.com/th/id/R.89aa61f96b208ec55669394726930e8a?rik=eSWL5lWF0YYczg&riu=http%3a%2f%2fvndhomecoffee.com%2fpublic%2fuploads%2fimages%2f2018%2f12%2fca-phe-den-1545123276.jpg&ehk=t8EPqfv5x79dtWwDT5Jflzs%2fbfdyApir1ojeRSI2ZkE%3d&risl=&pid=ImgRaw&r=0",
        type: "Cà phê",
      },
      {
        name: "Trà đào",
        price: 26000,
        image: "https://kenhphunu.com/images/032018/files/thuhuyen/tra-dao.jpg",
        type: "Trà",
      },
      {
        name: "Trà vải bạc hà",
        price: 26000,
        image:
          "https://massageishealthy.com/wp-content/uploads/2017/09/cach-lam-tra-vai-bang-tra-tui-loc-ngon-7.jpg",
        type: "Trà",
      },
      {
        name: "Trà sữa trân châu",
        price: 15000,
        image:
          "https://www.vinaorganic.com/wp-content/uploads/2019/08/tra-sua-tran-chau-vno.png",
        type: "Trà",
      },
      {
        name: "Trà sữa thạch trái cây",
        price: 15000,
        image:
          "https://th.bing.com/th/id/OIP.sW2cZw4pHZ7McsbKrmskrgHaHJ?pid=ImgDet&rs=1",
        type: "Trà",
      },
      {
        name: "Trà sữa thạch phô mai",
        price: 15000,
        image:
          "https://th.bing.com/th/id/R.48c6a2e538fb1974132c35aa9b397bdf?rik=rbgtFRy%2bIvNo3A&riu=http%3a%2f%2failien.vn%2fdata%2fupload%2fTra-sua-thach-pho-mai-vua-beo-ngay-vua-da-con-khat-ngay-nang-nong-tra-sua2.jpg&ehk=95fCJIZJ7fXJ7%2f3fHLDT%2b1zrYwAlo8VXRcZCeSmLUVA%3d&risl=&pid=ImgRaw&r=0",
        type: "Trà",
      },
      {
        name: "Trà sữa đào",
        price: 22000,
        image:
          "https://xebanhangluudong.vn/image/catalog/TS-HuongDao/tra-dao-gia-re.jpg",
        type: "Trà",
      },
      {
        name: "Hồng trà latte",
        price: 26000,
        image:
          "https://cdn.tgdd.vn/2021/05/CookProduct/lattlehongtramachiato-1200x676.jpg",
        type: "Latte đá",
      },
    ],
  },

  {
    name: "Cafe Phúc Long",
    farAway: "20",
    address: "Đường số 1, Phước Long A, Quận 9, Thành phố Hồ Chí Minh",
    image_url:
      "https://haymora.com/upload/images/thuc_pham_do_uong/phuc_long_coffee_tea/doi-ngu-nhan-vien-tre-trung-source-phuclong.jpg",
    averageReviews: 2.5,
    numberOfReview: 20,
    location: { latitude: 10.820892865426083, longitude: 106.76987858116404 },
    courier: {
      avatar: images.avatar_4,
      name: "Nguyễn Hoàng D",
    },
    dinkType: [
      "Sữa chua",
      "Trà",
      "Cà phê",
      "Latte đá",
      "Sinh tố",
      "Đá xay",
      "Nước ép",
    ],
    productData: [
      {
        name: "Trà Ô Long Mảng Cầu",
        price: 54000,
        image:
          "https://phuclong.com.vn/uploads/dish/a66aecd5b760eb-traolongmangcau.png",
        type: "Trà",
      },
      {
        name: "Trà Lài Đác Thơm",
        price: 45000,
        image:
          "https://phuclong.com.vn/uploads/dish/b8f1dd4d4f583c-dacthom.png",
        type: "Trà",
      },
      {
        name: "Hồng Trà Đác Cam",
        price: 60000,
        image: "https://phuclong.com.vn/uploads/dish/dae727e03e8092-daccam.png",
        type: "Trà",
      },
      {
        name: "Trà Nhãn - Sen",
        price: 50000,
        image:
          "https://phuclong.com.vn/uploads/dish/7c8006f72742d8-trnhnphclong.png",
        type: "Trà",
      },
      {
        name: "Trà Vải - Lài",
        price: 50000,
        image:
          "https://phuclong.com.vn/uploads/dish/063555c21c4206-trviliphclong.png",
        type: "Trà",
      },
      {
        name: "Trà Đào Phúc Long",
        price: 50000,
        image:
          "https://phuclong.com.vn/uploads/dish/3937476a64a213-trophclong.png",
        type: "Trà",
      },
      {
        name: "Sữa Chua Xoài Đác Thơm",
        price: 50000,
        image:
          "https://phuclong.com.vn/uploads/dish/65a7d028c2229d-sachuaxoicthmphclong.png",
        type: "Sữa chua",
      },
      {
        name: "Sữa Chua Phúc Bồn Tử Đác Cam",
        price: 50000,
        image:
          "https://phuclong.com.vn/uploads/dish/4136b3715bff3e-sachuaphcbntccamphclong.png",
        type: "Sữa chua",
      },
      {
        name: "Phin Bọt Biển",
        price: 45000,
        image:
          "https://phuclong.com.vn/uploads/dish/87b1387e4ee409-cafe5mon02.png",
        type: "Cà phê",
      },
      {
        name: "Phin Sữa Đá - Năng Lượng",
        price: 35000,
        image:
          "https://phuclong.com.vn/uploads/dish/8ebb07f0eeccc1-resize_damdadunggu07.png",
        type: "Cà phê",
      },
      {
        name: "Phin Đen Đá - Đậm Đà",
        price: 35000,
        image:
          "https://phuclong.com.vn/uploads/dish/4521f4c77fc38a-cf67efb06d5aa504fc4b.png",
        type: "Cà phê",
      },
      {
        name: "Latte Trà Xanh",
        price: 45000,
        image:
          "https://phuclong.com.vn/uploads/dish/d1cd8bafdefe9d-matchalattephclong.png",
        type: "Latte đá",
      },
      {
        name: "Latte Latte",
        price: 45000,
        image:
          "https://phuclong.com.vn/uploads/dish/8a92bb4b37c012-cafe5mon01.png",
        type: "Latte đá",
      },
      {
        name: "Sinh tố Chanh",
        price: 50000,
        image:
          "https://phuclong.com.vn/uploads/dish/64bd44180be24c-sinhtchanh.png",
        type: "Sinh tố",
      },
      {
        name: "Sinh tố Dâu",
        price: 54000,
        image:
          "https://phuclong.com.vn/uploads/dish/4a625d6564e694-sinhtdu.png",
        type: "Sinh tố",
      },
      {
        name: "Sinh tố Xoài",
        price: 54000,
        image:
          "https://phuclong.com.vn/uploads/dish/25a95ceca023f9-sinhtxoi.png",
        type: "Sinh tố",
      },
      {
        name: "Vitamin C (Xoài, Cam, Chanh Dây)",
        price: 54000,
        image:
          "https://phuclong.com.vn/uploads/dish/704d601e52b386-vitamincxoicamchanhdy.png",
        type: "Sinh tố",
      },
      {
        name: "Cà phê Caramel Đá Xay",
        price: 60000,
        image:
          "https://phuclong.com.vn/uploads/dish/729626b6440e43-cphcaramelxay.png",
        type: "Đá xay",
      },
      {
        name: "Trà Đào Đá Xay",
        price: 64000,
        image: "https://phuclong.com.vn/uploads/dish/84c7b821bde822-troxay.png",
        type: "Đá xay",
      },
      {
        name: "Cà phê Cappuccino Đá Xay",
        price: 60000,
        image:
          "https://phuclong.com.vn/uploads/dish/d12b476cb8261d-cphcappuccinoxay.png",
        type: "Đá xay",
      },
      {
        name: "Sô-Cô-La Cà phê Đá Xay",
        price: 60000,
        image:
          "https://phuclong.com.vn/uploads/dish/c1043b2fa58b01-sclacphxay.png",
        type: "Đá xay",
      },
      {
        name: "Trà Xanh Đá Xay",
        price: 60000,
        image:
          "https://phuclong.com.vn/uploads/dish/5db8d7830383fe-trxanhxay.png",
        type: "Đá xay",
      },
      {
        name: "Táo Và Dâu Ép",
        price: 50000,
        image: "https://phuclong.com.vn/uploads/dish/82d9495c75a9f0-tovdup.jpg",
        type: "Nước ép",
      },
      {
        name: "Thơm Và Dâu Ép",
        price: 50000,
        image:
          "https://phuclong.com.vn/uploads/dish/16f40311f8a57e-davdupphclong.png",
        type: "Nước ép",
      },
      {
        name: "Táo Ép",
        price: 45000,
        image:
          "https://phuclong.com.vn/uploads/dish/1c28e98e3cf766-topphclong.png",
        type: "Nước ép",
      },
      {
        name: "Dâu Ép",
        price: 54000,
        image: "https://phuclong.com.vn/uploads/dish/6b1a28971bec00-dup.png",
        type: "Nước ép",
      },
      {
        name: "Cam Ép",
        price: 45000,
        image: "https://phuclong.com.vn/uploads/dish/c60abb561e3817-camp.png",
        type: "Nước ép",
      },
      {
        name: "Dứa Ép",
        price: 45000,
        image:
          "https://phuclong.com.vn/uploads/dish/6295905dc9447e-dapphclong.png",
        type: "Nước ép",
      },
    ],
  },
];

export const menu = [
  {
    key: 1,
    title: "Trà",
  },
  {
    key: 2,
    title: "Sữa chua",
  },
  {
    key: 3,
    title: "Cà phê",
  },
  {
    key: 4,
    title: "Latte đá",
  },
  {
    key: 5,
    title: "Đá xay",
  },
  {
    key: 6,
    title: "Kem",
  },
  {
    key: 7,
    title: "Nước ngọt",
  },
  {
    key: 8,
    title: "Sinh tố",
  },
  {
    key: 9,
    title: "Nước ép",
  },
];
