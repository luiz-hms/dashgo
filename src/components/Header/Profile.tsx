import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Luiz Henrique</Text>
          <Text color="gray.300" fontSize="small">
            Luiz.luiz@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="luiz henrique"
        src="https://github.com/luiz-hms.png"
      />
    </Flex>
  );
}
