import { Image, StyleSheet, Platform, Text, View } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/building.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Victory Schools, Kodur</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">
          {"👉"} Victory is the Place Where Future Talented Minds Assemble...
        </ThemedText>
        <ThemedText type="defaultSemiBold">
          {"👉"} Victory is the Place Which Brings Glory To Your Skill...
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Victory Management</ThemedText>
        <View style={{padding:20,backgroundColor:"#f5f5f5",borderRadius:24}}>
          <Image
            source={require("@/assets/images/principal.jpg")}
            style={{ width: 320, height: 300,borderRadius:16 }}
          />
        </View>

        <ThemedText type="subtitle">Kakarla Ramakrishna Reddy</ThemedText>
        <ThemedText type="defaultSemiBold">Principal</ThemedText>

        <View style={{padding:20,backgroundColor:"#f5f5f5",borderRadius:24}}>
          <Image
            source={require("@/assets/images/correspondent.jpg")}
            style={{ width: 320, height: 300,borderRadius:16 }}
          />
        </View>
        <ThemedText type="subtitle">Avisina Narasimha Reddy</ThemedText>
        <ThemedText type="defaultSemiBold">Correspondent</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    width: 500,
    height: 300,
    resizeMode: "contain",
  },
});
