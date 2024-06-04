import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
export default function admin_login(p) {
  let [Username, SetUsername] = useState("");
  let [Password, SetPassword] = useState("");
  const styles = StyleSheet.create({
    Input: {
      marginTop: 20,
      marginHorizontal: 20,
    },
  });
  let page = p.segment.split("/")[1]
  let page_name = ""
  page.split("_").forEach((word)=>{page_name += word[0].toUpperCase() + word.slice(1) + " "})
  page_name = page_name.trim()
  return (
    <View style={{ marginTop: 50,marginHorizontal:20 }}>
      <ThemedText type="subtitle" style={{ textAlign: "center" }}>
        {page_name}
      </ThemedText>
      <TextInput
        label="Username"
        style={styles.Input}
        value={Username}
        autoCapitalize="characters"
        onChangeText={(text) => SetUsername(text)}
      />
      <TextInput
        label="Password"
        style={styles.Input}
        secureTextEntry={true}
      />
      <Button icon="login" mode="contained" style={{ marginTop: 20 }}>
        Login
      </Button>
    </View>
  );
}
