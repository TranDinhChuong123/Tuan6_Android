import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function App() {
  const data = [
    {
      name: "Ca nấu lẫu ,nấu mì mini",
      image: require("./ca_nau_lau.png"),
      shop: "Shop Devang",
    },
    {
      name: "1KG KHÔ GÀ BƠ TỎI",
      image: require("./ga_bo_toi.png"),
      shop: "Shop LTD Food",
    },
    {
      name: "Xe cần cẩu đa năng",
      image: require("./xa_can_cau.png"),
      shop: "Shop thế giới đồ chơi",
    },

    {
      name: "Đồ chơi dạng mô hình",
      image: require("./ga_bo_toi.png"),
      shop: "Shop LTD Food",
    },
    {
      name: "lãnh đạo giản đơn",
      image: require("./lanh_dao_gian_don.png"),
      shop: "Shop LTD Food",
    },
    {
      name: "hiếu lòng con trẻ",
      image: require("./hieu_long_con_tre.png"),
      shop: "Shop LTD Food",
    },
    {
      name: "1KG KHÔ GÀ BƠ TỎI",
      image: require("./ga_bo_toi.png"),
      shop: "Shop LTD Food",
    },
    {
      name: "1KG KHÔ GÀ BƠ TỎI",
      image: require("./ga_bo_toi.png"),
      shop: "Shop LTD Food",
    },
    {
      name: "1KG KHÔ GÀ BƠ TỎI",
      image: require("./ga_bo_toi.png"),
      shop: "Shop LTD Food",
    },
    {
      name: "1KG KHÔ GÀ BƠ TỎI",
      image: require("./ga_bo_toi.png"),
      shop: "Shop LTD Food",
    },
  ];
  // const data = [
  //   { key: "1", name: "Item 1" },
  //   { key: "2", name: "Item 2" },
  //   { key: "3", name: "Item 3" },
  //   // Thêm dữ liệu khác vào đây
  // ];

  return (
    <View style={styles.container}>
      {/* <Text> Open up App.js to start working on your app! </Text> */}
      <View style={styles.container1}>
        <Image source={require("./anh1.png")} style={styles.icon} />
        <Text style={styles.text1}>Chat</Text>

        <Image source={require("./anh2.png")} style={styles.icon1} />
      </View>

      <Text style={styles.text2}>
        Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
      </Text>

      <ScrollView>
        <FlatList
          style={styles.flatlist}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.container2}>
              <Image source={item.image} style={styles.icon3} />
              <Text style={{ position: "absolute", left: 91, top: 10 }}>
                {item.name}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  left: 91,
                  justifyContent: "center",
                  color: "red",
                }}
              >
                {item.shop}
              </Text>
              <TouchableOpacity style={styles.button1}>
                <Text>Chat</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={styles.container3}>
          <Image source={require("./Group 10.png")} style={styles.icon} />

          <Image style={styles.icon4} source={require("./Vector.png")} />

          <Image
            source={require("./Vector 1 (Stroke).png")}
            style={styles.icon1}
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  container1: {
    position: "relative",
    width: "100%",
    height: 42,
    backgroundColor: "#1BA9FF",
    justifyContent: "center",
  },
  container3: {
    position: "relative",
    width: "100%",
    height: 42,
    backgroundColor: "#1BA9FF",
    justifyContent: "center",
    alignItems: "center",
    bottom: 125,
  },
  container2: {
    // position: "absolute",
    width: "100%",
    height: 80,

    borderTopColor: "red",
    borderBottomColor: "#C4C4C4",
    borderWidth: 1,
    padding: 10,

    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    width: 24,
    height: 24,
    left: 10,
  },
  icon1: {
    position: "absolute",
    width: 24,
    height: 24,
    right: 10,
  },
  icon4: {
    position: "absolute",
    width: 24,
    height: 24,
    alignItems: "center",
  },
  icon3: {
    position: "absolute",
    width: 74,
    height: 74,
    left: 1,
  },
  text1: {
    textAlign: "center",
    color: "#FFFFFF",
  },
  text2: {
    width: "100%",
    height: 29,
    top: 60,
    textAlign: "center",
    // color: "#FFFFFF",
  },
  text3: {
    // position: "absolute",
    width: "100%",
    height: 13,
    top: 5,
    left: 91,
    // textAlign: "center",
    // color: "#FFFFFF",
  },
  button1: {
    position: "absolute",
    backgroundColor: "red",
    width: 88,
    height: 38,
    left: 256,
    justifyContent: "center",
    alignItems: "center",
  },
  flatlist: {
    // position: "absolute",
    top: 104,
    width: "100%",
  },
});
