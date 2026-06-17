import { Recipe } from "./types";
import squidPremium from "./assets/images/squid_premium_1780063740221.png";
import shrimpGiftGnodFood from "./assets/images/shrimp_gift_gnod_food_1780068930719.png";
import stingrayVungtauBanner from "./assets/images/stingray_vungtau_banner_1780068780009.png";

export const RECIPES: Recipe[] = [
  {
    id: "goi-xoai-tom-kho",
    title: "Gỏi Xoài Xanh Tôm Khô Đất Gnod - Vị Ngọt Chua Thăng Hoa",
    dishName: "Gỏi Xoài Xanh Tôm Khô Đất Đậm Vị",
    description: "Sự hòa quyện tuyệt vời từ vị chua giòn tan của xoài xanh cát chín hườm kết hợp với hương thơm ngọt đậm nồng nàn, thớ thịt săn chắc dai hảo hạng của Tôm Khô Đất Gnod Food. Đây là món gỏi khai vị thanh lịch đánh thức mọi giác quan ngày hè.",
    productUsed: {
      id: "tom-kho-luxury-gift",
      name: "Tôm Khô Đất Đại Dương Gnod Food",
      image: shrimpGiftGnodFood
    },
    difficulty: "Dễ",
    prepTime: "15 phút",
    cookTime: "5 phút",
    ingredients: [
      "100g Tôm Khô Đất Đại Dương Gnod Food",
      "1 quả xoài xanh lớn (chua vừa)",
      "1/2 củ cà rốt nhỏ (cho màu sắc đẹp mắt)",
      "Rau thơm: húng lủi, rau răm, ngò gai",
      "Đậu phộng rang muối (giã dập vừa)",
      "Gia vị trộn gỏi: 2 thìa canh nước mắm thượng hạng, 2 thìa canh đường thốt nốt, 1 thìa canh nước cốt chanh, tỏi sấu băm nhuyễn, ớt sừng xắt sợi."
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Đánh thức tôm khô",
        description: "Rửa sạch tôm khô đất Gnod Food qua nước ấm. Ngâm tôm trong nước ấm khoảng 10-15 phút để tôm nở mềm nhưng vẫn giữ được độ ngọt đậm đà vốn có. Sau đó vớt ráo nước, có thể giã nhẹ bằng chày gỗ để thớ tôm hơi bung nhẹ xốp dẻo."
      },
      {
        stepNumber: 2,
        title: "Bào xoài xanh và mài cà rốt",
        description: "Xoài xanh rửa sạch, gọt vỏ mỏng rồi bào sợi sần sật mỏng dài. Cà rốt bào sợi sợi nhuyễn. Sau khi bào xong, đem xoài xanh ngâm vào thố nước đá lạnh khoảng 5 phút rồi vớt ráo, giúp xoài giữ nguyên độ giòn lạnh dòn tan mát miệng."
      },
      {
        stepNumber: 3,
        title: "Pha nước sốt mắm thốt nốt gia truyền",
        description: "Khuấy tan nước mắm thượng hạng cùng đường thốt nốt nướng mềm cho tan đều sóng sánh. Thêm nước cốt chanh, tỏi băm nhuyễn và một chút ớt băm để có nước sốt mặn - ngọt - chua - cay dẻo quánh đặc trưng."
      },
      {
        stepNumber: 4,
        title: "Hợp nhất hương vị",
        description: "Cho xoài xanh, cà rốt và một nửa số tôm khô vào thố lớn. Rưới từ từ nước mắm trộn gỏi lên trên, dùng tay trộn nhẹ nhàng lỏng lẻo tay từ dưới lên để xoài ngấm đủ vị mà không bị nát hay ra nước bã. Cho tiếp rau thơm xắt khúc vào đảo nhẹ."
      },
      {
        stepNumber: 5,
        title: "Trình diễn bento",
        description: "Gắp gỏi ra đĩa sâu lòng, vun cao thành chỏm xinh xắn. Rắc phần tôm khô đất còn lại lên trên đỉnh tháp gỏi cùng với đậu phộng rang giòn thơm lừng và hành phi vàng rụm. Thưởng thức kèm bánh tráng nướng giòn rụm hoặc bánh phồng tôm giòn xốp."
      }
    ],
    chefTip: "Tôm đất Gnod rất giàu độ ngọt tự nhiên. Hãy tránh luộc lại tôm hoặc ngâm tôm quá lâu trong nước nóng vì sẽ làm mất đi lượng ngọt dào dạt tích tụ tự nhiên trong từng sớ thịt tôm."
  },
  {
    id: "muc-kho-nuong-sa-te",
    title: "Khô Mực Nướng Sa Tế Sả Ớt - Mồi Nhâm Nhi Sành Điệu Phu Quoc",
    dishName: "Khô Mực Nướng Sa Tế Tỏi Sả Thơm Nồng",
    description: "Nâng tầm khô mực nướng lò than cổ điển bằng một chút biến tấu hoang dã. Thớ thịt khô mực câu sào Phú Quốc dai ngọt lừng danh kết duyên cùng vị cay xộc nồng nàn của sa tế sả ớt sém vàng lấp lánh.",
    productUsed: {
      id: "kho-muc-phu-quoc",
      name: "Khô Mực Câu Thượng Hạng Phú Quốc",
      image: squidPremium
    },
    difficulty: "Trung bình",
    prepTime: "10 phút",
    cookTime: "8 phút",
    ingredients: [
      "1 con Khô Mực Câu Thượng Hạng Phú Quốc cỡ lớn Gnod Food",
      "2 thìa canh sốt sa tế tôm hảo hạng",
      "1 thìa cà phê tương ớt chin-su",
      "1 củ sả tươi (băm nhuyễn)",
      "2 tép tỏi ta (băm nhuyễn)",
      "1 thìa cà phê đường thốt nốt nấu chảy",
      "1 thìa cà phê dầu ăn để quết xé mềm mượt"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Gia cố màng mực khô",
        description: "Sử dụng cồn y tế hoặc bếp than nướng nhẹ khô mực Phú Quốc từ xa để thân mực co tròn lại, dậy mùi thơm biển khơi cuốn hút. Lưu ý không nướng quá kỹ làm khô rạc thớ thịt."
      },
      {
        stepNumber: 2,
        title: "Đập giập tơi xốp cho mực câu",
        description: "Kẹp con mực nướng vào bọc sạch hoặc giấy lót, dùng chày gỗ hoặc mặt dẹt hông dao gõ đập đều tay dứt khoát trên đùi mực để bung mềm thớ thịt, lớp phấn trắng bong tơi. Sau đó xé xéo mực thành những sợi bản dầy vừa miệng sành điệu."
      },
      {
        stepNumber: 3,
        title: "Chế biến sốt sa tế sả nướng",
        description: "Phi thơm tỏi băm, sả băm nhuyễn với một ít dầu ăn. Trộn đều sa tế tôm, đường thốt nốt nướng dẻo, tương ớt để tạo một hỗn hợp sốt đỏ cam san hô óng ả cay thơm nồng đượm vị."
      },
      {
        stepNumber: 4,
        title: "Quết áo và nướng sém lò",
        description: "Trộn đều sợi mực tươi và nước sốt sa tế vừa làm để mực ngấm đậm vị 5-7 phút. Tiếp đến xếp sợi mực lên vỉ nướng trên lò than hoặc nồi chiên không dầu ở nhiệt độ 160 độ C trong vòng 3 phút để nước sốt hơi khô se, bám chặt óng ánh vàng rực lấm tấm hạt sả ớt."
      }
    ],
    chefTip: "Nướng khô mực sau khi xé sợi bọc sốt sa tế bằng nồi chiên không dầu sẽ giúp sợi mực săn lóng lạnh dẻo dẹt, giữ trọn vị cay cay ngọt lịm không lo bị đắng gắt hay khét lẹt."
  },
  {
    id: "ca-duoi-nuong-mam-me-hanh-phi",
    title: "Cá Đuối Nướng Sém Mỡ Hành Chấm Mắm Me Cổ Điển Vũng Tàu",
    dishName: "Khô Cá Đuối Nước Mỡ Hành Sốt Me Quý Tộc",
    description: "Đặc sản Vũng Tàu nâng tầm bàn tiệc gia đình. Thớ cá đuối đen giàu canxi giòn sật sụn cá nướng cháy sém xé sợi, tưới mỡ hành béo mượt, tỏi phi thơm giòn rụm kết duyên cùng chén sốt me dẻo dính sệt kẹo.",
    productUsed: {
      id: "kho-ca-duoi-vung-tau",
      name: "Khô Cá Đuối Đen Thượng Hạng Vũng Tàu",
      image: stingrayVungtauBanner
    },
    difficulty: "Trung bình",
    prepTime: "15 phút",
    cookTime: "10 phút",
    ingredients: [
      "200g Khô Cá Đuối Đen Thượng Hạng Vũng Tàu Gnod Food",
      "1 chén Sốt Mắm Me gia truyền ăn kèm Gnod Food",
      "Hành lá tươi xắt nhuyễn",
      "3 thìa canh mỡ heo thơm lừng hoặc dầu hoa cải",
      "Tỏi ta phi sẵn vàng giòn rụm",
      "Ớt hiểm băm nhỏ thích cay nồng"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Nướng sém cá nghệ",
        description: "Đặt khô cá đuối nghệ Gnod Food lên vỉ nướng trên than hồng lấp lánh hoặc bọc giấy bạc đút lò nướng 180 độ C trong 4-5 phút. Cá chín thơm lừng khi rìa sụn cá phồng giòn nhẹ dẻo dai."
      },
      {
        stepNumber: 2,
        title: "Giải nén thớ sụn mỏng giòn",
        description: "Dùng chày cán nện mạnh liên hồi lên miếng cá lúc còn nóng hôi hổi để phá vỡ lớp bao bọc thịt dai, giúp miếng cá đuối bung tơi thành những thớ sụn thanh mảnh dẻo thơm. Tiến hành xé sợi dọc theo dáng sụn giòn sần sật."
      },
      {
        stepNumber: 3,
        title: "Thả mỡ hành hành lá siêu béo",
        description: "Đun thật nóng mỡ heo lợn dã hương, dội trực tiếp vào chén hành lá cắt nhuyễn tạo mỡ hành xanh mướt óng lóng. Rưới mỡ hành thơm lừng này lên dải khô cá đuối xé sợi mịn và phủ tiếp tỏi phi rụm rực rỡ bên trên lòng đĩa."
      },
      {
        stepNumber: 4,
        title: "Kích hoạt mắm me mộc mạc",
        description: "Lấy sốt mắm me Gnod Food ra chén, nếu muốn tăng vị cay có thể dằm thêm một trái ớt hiểm đỏ mọng. Nhúng đẫm gắp khô cá đuối mỡ hành tỏi phi vào chén mắm me sánh kẹo và cảm thụ trọn vẹn vị mặn ngọt cay giòn rôm rốp tinh tế."
      }
    ],
    chefTip: "Đập dập cá cá đuối nghệ Gnod lúc còn nóng sốt là thủ thuật then chốt giúp thịt cá bung xốp tơi đẹp mắt và ngấm mỡ hành béo thơm sâu sắt hơn rất nhiều."
  },
  {
    id: "tom-kho-kho-quet-quy-toc",
    title: "Kho Quẹt Quý Tộc Tôm Khô Đất Ba Chỉ - Đậm Đà Vị Quê Hương",
    dishName: "Kho Quẹt Tôm Khô Đất & Tóp Mỡ Giòn Rụm",
    description: "Một công thức mang tầm di sản văn hóa ẩm thực Nam Bộ. Vị đậm đà của mắm nhĩ ngon kết đôi hương ba chỉ dẻo quánh, vị ngọt lịm từ tôm khô đất thiên nhiên và vị tiêu xanh ấm sực nồng nàn quyến rũ dâng trào.",
    productUsed: {
      id: "tom-kho-luxury-gift",
      name: "Tôm Khô Đất Đại Dương Gnod Food",
      image: shrimpGiftGnodFood
    },
    difficulty: "Khó",
    prepTime: "20 phút",
    cookTime: "20 phút",
    ingredients: [
      "120g Tôm Khô Đất Đại Dương Gnod Food",
      "150g thịt ba chỉ lợn (chọn phần nhiều mỡ để thắng tóp mỡ giòn)",
      "5 thìa canh nước mắm truyền thống chất lượng rạm sâu",
      "4 thìa canh đường cát vàng thốt nốt ấm ngọt",
      "3 thìa canh nước ấm để cân bằng độ quánh",
      "Hành tím băm nhỏ, tỏi ta dập nhẹ, tiêu xanh nguyên chùm, hành hoa cắt khúc, ớt đỏ nhỏ cay xé."
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Sơ tán dưỡng chất tôm khô",
        description: "Rửa tôm đất Gnod qua nước sạch, ngâm nhẹ trong nước lọc ấm 10 phút để tôm dẻo mềm nhẹ rồi chắt lấy nước ngâm tôm giữ lại kho rất thơm, vớt tôm khô ra đĩa ráo ráo nước mát lành."
      },
      {
        stepNumber: 2,
        title: "Khai mạc tóp mỡ giòn tan",
        description: "Thịt ba chỉ lọc bì gọt mỏng, xắt khối vuông hạt lựu nhỏ dẹt. Cho lên chảo nóng chiên lửa liu riu đảo liên tục để vắt bớt mỡ lợn ra ngoài cho đến khi thu được những hạt tóp mỡ màu cánh gián vàng rụm, giòn rôm rốp ráo mỡ."
      },
      {
        stepNumber: 3,
        title: "Chế ngự sườn nước sốt kho quẹt",
        description: "Hòa trộn mắm cốt truyền thống thượng hạng, đường thốt nốt, mỡ heo vừa thắng xiên và 3 thìa nước ngâm tôm khô tôm ngọt hồi nãy lập thành dung dịch sốt kho nâu vàng mộc mạc."
      },
      {
        stepNumber: 4,
        title: "Chưng cất niêu đất thần thánh",
        description: "Phi hành tím tươi và tỏi băm thơm vàng lừng bằng một lượng mỡ mỏng trên niêu đất xưa cũ. Đổ tôm khô vào đảo đều săn thịt dẻo quánh giòn tắp trong 1-2 phút, dội sườn nước sốt kho cùng chùm tiêu xanh hạt cay vào đun súc tưng bừng. Hạ nhiệt độ hầm liu riu đặc sánh lại."
      },
      {
        stepNumber: 5,
        title: "Hợp nhất tóp mỡ và trang hoàng",
        description: "Khi sốt trong niêu bắt đầu cạn sền sệt, kéo bong lớp bong bóng cánh gián vàng bắt mắt thì trút phần hạt tóp mỡ giòn rụm dòn rạo dực, hành hoa rắc đầy sấy nóng cùng ớt đỏ vào nấu thêm 1 phút rồi bắc hạ niêu đất dùng kèm rau củ luộc mát ngọt."
      }
    ],
    chefTip: "Đừng bỏ tóp mỡ vào quá sớm vì tóp mỡ ngâm nước sốt súc sôi kéo dài sẽ bị bã nhão, mất đi cảm giác cắn nổ bung ròn rụm sướng miệng khi thưởng thức."
  }
];
