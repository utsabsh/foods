import { View, Text, StyleSheet, Alert, Animated } from "react-native";
import { Gesture, GestureDetector, RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
function List({ data }) {
  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton
        style={styles.leftAction}
        onPress={() => {
          close();
        }}
      >
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          Archive
        </Animated.Text>
      </RectButton>
    );
  };
  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .onStart(() => {
      Alert.alert("Single tap!");
    });

  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(2)
    .onStart(() => {
      Alert.alert("Double tap!");
    });

  return data.map((dataPoint) => (
    <GestureDetector
      gesture={Gesture.Exclusive(doubleTap, singleTap)}
      key={dataPoint}
    >
      <Swipeable renderRightActions={renderLeftActions}>
        <View style={styles.listItem}>
          <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
      </Swipeable>
    </GestureDetector>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
