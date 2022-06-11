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
      name: "Amy",
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
      name: "Jackson",
    },
    dinkType: ["Sữa chua", "Trà", "Cà phê", "Nước ép", "Sinh tố", "Nước ngọt"],
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
