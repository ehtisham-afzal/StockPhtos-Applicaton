import ImageCard from "@/components/ImageCard";
import TopBarInput from "@/components/TopBarInput";
import { Linking } from "react-native";
import { ScrollView, Text, XStack, YStack } from "tamagui";
import { createClient } from "pexels";
// import { Image } from "expo-image";
import { H1, View } from "tamagui";
import { useEffect, useState } from "react";


export default function HomeScreen() {
  const [Photos, setPhotos] = useState([]);
    const client = createClient(
      "gPHPpKjlIDNLAu1ZyTFGcEniyM3RZgWJEnhLjN1pPgRb7j24GzxxVBDW"
    );
    useEffect(() => {
      client.photos
        .curated({ per_page: 18, page: 1 })
        .then((response) => {
          setPhotos(response.photos);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  return (
    <View
      backgroundColor="$background"
      flex={1}
      height="auto"
      justifyContent="center"
      alignItems="center"
      pt="$7"
    >
      <TopBarInput />
      <XStack
        alignContent="flex-start"
        justifyContent="flex-start"
        width="100%"
      >
        <H1 fontWeight="800" fontSize="$8" pl="$5">
          Trending on{" "}
          <Text
            fontWeight="800"
            color="darkcyan"
            onPress={() => Linking.openURL("https://www.pexels.com/")}
          >
            Pexels
          </Text>
        </H1>
      </XStack>
      {Photos && (
        <ScrollView w="100%">
          <YStack gap="$2">
            {Photos.map((photo) => (
              <ImageCard
                photoData={photo}
                key={photo.id}
                imageUrl={photo.src.portrait}
              />
            ))}
          </YStack>
        </ScrollView>
      )}
      {/* <Button color="green" onPress={()=> alert("Hello ehtisham")} title="Say Hello"/> */}
    </View>
  );
}
