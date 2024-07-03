import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./app.style";
import { ProfilCard } from "./components/ProfilCard/ProfilCard";
import { Linking } from "react-native";

export default function App() {
  function goToSocialMedia(socialMedia) {
    let url;
    switch (socialMedia) {
      case "twitter":
        url = "https://github.com/AlexaKaramanolis";
        break;
      case "github":
        url = "http://github.com/AlexaKaramanolis";
        break;
      case "linkdn":
        url = "http://github.com/AlexaKaramanolis";
        break;
    }
    Linking.openURL(url);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <ProfilCard
          onPressSocialMediaIcon={goToSocialMedia}
          firstName={"Codiku"}
          lastName={"TheDev"}
          age={30}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}