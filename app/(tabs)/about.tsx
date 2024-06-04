import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function About() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/images/about.jpg")}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">About Us</ThemedText>
      </ThemedView>
      <ThemedText type="defaultSemiBold">
        "Victory" The School To Create Talented & Skillful Minds
      </ThemedText>
      <Collapsible title="Establishment">
        <ThemedText>
          The School was started in the year{" "}
          <ThemedText type="defaultSemiBold">1991</ThemedText> to cater the
          educational needs of the rural people of KODUR and the surrounding
          villages. To provide such good education, this was first school in
          Kodur, started with English medium from{" "}
          <ThemedText type="defaultSemiBold">LKG to 10th Std</ThemedText> with
          merely 87 Students in 1991.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Management">
        <ThemedText>
          Victory High School is proudly guided by the visionary leadership of
          <ThemedText type="defaultSemiBold">
            {" "}
            Principal K. Ramakrishna Reddy
          </ThemedText>{" "}
          and{" "}
          <ThemedText type="defaultSemiBold">
            {" "}
            Correspondent A. Narasimha Reddy.{" "}
          </ThemedText>
          With their unwavering commitment to education, they ensure that our
          institution remains a beacon of academic excellence and holistic
          development.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Academics">
        <ThemedText>
          {"⭐"} A great achievement our school got is: In SSC 2014, SSC2015,
          SSC2016 our students received PRATIBHA PURASKAR by Honourable Chief
          minister.
        </ThemedText>
        <ThemedText>
          {"⭐"} Our Students got admissions into the most prestigious
          institution in AP, the IIIT (triple IT) every year since its
          establishment.
        </ThemedText>
        <ThemedText>
          {"⭐"} Our Students have been on the top position in Kodur town since
          2006 for 19 consecutive years getting Town 1st
        </ThemedText>
      </Collapsible>
      <Collapsible title="Co-Curricular Activities">
        <ThemedText>
          Besides the curricular activities we give much importance to all
          co-curricular and extra-curricular activities like Sports and games,
          dance social activities and cultural activities. We try to instill
          moral and traditional values in children and drive them towards
          responsibility and respect in the society. For this to happen we
          celebrate all festivals in harmony with all religious people.
        </ThemedText>
        <Image source={require("@/assets/images/event1.jpg")} style={styles.Image}/>
        <Image source={require("@/assets/images/event2.jpg")} style={styles.Image}/>
      </Collapsible>
      <Collapsible title="Contact Us">
        <ThemedText>
          <ThemedText type="defaultSemiBold">Principal: </ThemedText>{"\n"}
          Kakarla Ramakrishna Reddy {"\n"}
          Mobile: 9440289081 {"\n"}
          Email: kakarlavic@gmail.com {"\n"}
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Correspondent: </ThemedText> {"\n"}
          Avisina Narasimha Reddy {"\n"}
          Mobile: 9885027156 {"\n"}
          Email: anreddyvic@gmail.com {"\n"}
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Headmaster: </ThemedText>{"\n"}
          S. Mahammad Hussain {"\n"}
          Mobile: 9912652121 {"\n"}
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Admin Office: </ThemedText>{"\n"}
          Phone: 08566-244584 {"\n"}
          Email: victoryschoolskodur@gmail.com
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 500,
    height: 330,
    resizeMode: "contain",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  Image:{
    width:300,
    height:200,
    resizeMode:"contain",
    marginTop:15
  }
});
