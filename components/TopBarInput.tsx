import { Ionicons } from "@expo/vector-icons";
import { H1, InputFrame, Label, XStack, YStack } from "tamagui";

export default function TopBarInput() {
    return (
        <XStack w="100%" alignSelf="center" alignItems="center" pos="relative" px="$3.5">
          <Label htmlFor="search" l="$5" pos="absolute" zi="$1">
            <Ionicons name="search" size={24} />
          </Label>
          <InputFrame
          borderRadius="$6"
            w="100%"
            pl="$7"
            id="search"
            placeholderTextColor="gray"
            placeholder="Search for amazing content"
          />
        </XStack>
    );
  }