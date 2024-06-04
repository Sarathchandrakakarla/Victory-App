import { View, Image, StyleSheet, ScrollView } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Logins() {
  let logins = [
    {
      id: 1,
      Title: "Admin Login",
      Content:
        "School Administrators to manage various aspects of the school's operations, such as student records, staff information, academic schedules, and communication with parents.",
      url: "admin_login",
    },
    {
      id: 2,
      Title: "Student Login",
      Content:
        "Students to access personalized information related to their academic progress, class schedules, grades, assignments, and other relevant school-related data.",
      url: "student_login",
    },
    {
      id: 3,
      Title: "Faculty Login",
      Content:
        "Faculty members to access and manage academic resources, student information, grading systems and monitor student progress.",
      url: "faculty_login",
    },
  ];
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 50 }}>
      {logins.map((login) => {
        return (
          <Card style={styles.Card} key={login.id}>
            <Card.Content>
              <Text variant="titleLarge" style={styles.Title}>
                {login.Title}
              </Text>
              <Text variant="bodyMedium" style={styles.Content}>
                {login.Content}
              </Text>
              <Button
                icon="login"
                mode="contained"
                onPress={() => navigation.navigate("logins/" + login.url)}
                style={{ marginTop: 10 }}
              >
                {login.Title}
              </Button>
            </Card.Content>
          </Card>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  MainView: {
    color: "#fff",
    flex: 1,
    margin: 60,
  },
  Card: {
    margin: 20,
  },
  Title: {
    borderBottomWidth: 1.5,
  },
  Content: {
    marginTop: 5,
  },
});
