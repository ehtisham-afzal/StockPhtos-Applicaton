import { Feather, Ionicons } from "@expo/vector-icons";
import { Avatar, Card, CardProps, H5, Image, XStack } from "tamagui";

export default function ImageCard(
  { imageUrl ,photoData}: { imageUrl: string ,photoData : any },
  
) {
  return (
    <Card  overflow="hidden" borderRadius="$7">
      <Card.Header padded >
        <XStack w="100%" alignItems="center" gap="$2">
          <Avatar circular size="$3">
            <Avatar.Image src="http://picsum.photos/200/300" />
            <Avatar.Fallback bc="red" />
          </Avatar>
          <H5>{photoData.photographer}</H5>
        </XStack>
      </Card.Header>
      <Image
        w="100%"
        alignSelf="center"
        source={{
          width: 300,
          height: 500,
          uri : imageUrl
        }}
      />
      <Card.Footer padded alignItems="center" justifyContent="space-between">
        <XStack flex={1} gap="$4">
          <Ionicons name="heart-outline" size={30} />
          <Ionicons name="share-social-outline" size={30} />
        </XStack>
        <Feather name="download-cloud" size={30} />
      </Card.Footer>
      {/* <Card.Background>
          
        </Card.Background> */}
    </Card>
  );
}
