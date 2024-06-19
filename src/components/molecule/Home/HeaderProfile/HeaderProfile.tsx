import { Avatar, Box, HStack, Image, Pressable, Text, VStack } from "native-base"

type Props = {
  user: any
}

export default function HeaderProfile({user}: Props) {
  return (
    <Box flexDirection={'row'} justifyContent={'space-between'} p={'10px'} mt={'20px'} w={'100%'} h={'120px'} borderRadius={'5px'}>
      <VStack justifyContent={'space-between'}>
        <Text bold fontSize={'16px'} color={'#ffffff'}>{user.firstname} {user.lastname}</Text>

        <Box>
          <Text color={user.premium ? 'gold' : '#ffffff'}>{user.premium ? "Premium" : "Free"}</Text>
          <Text color={'green.300'}>0 pontos</Text>
          <Text color={user.premium_time === null ? '#EB6A6A' : 'green.300'}>{user.premium_time === null ? 0 : user.premium_time} dias de premium</Text>
        </Box>
      </VStack>
      
      <Image left={'120px'} opacity={0.2} alignSelf={'center'} position={'absolute'} alt="logo" w={24} h={24} tintColor={'#ffffff'} source={require('../../../../assets/images/logo.png')} />

      <Box alignItems={'center'} justifyContent={'center'} position={'relative'}>
        {
          user.premium &&
          <Image top={-39} left={-39} zIndex={'2'} position={'absolute'} alt="crown" w={24} h={24} tintColor={'gold'} source={require('../../../../assets/images/crown.png')} />
        }

        <Avatar w={'80px'} h={'80px'} source={user.avatar ? {uri: `http://aespartana.cloud:3001/avatar_public/${user.avatar}`} : require('../../../../assets/images/no_image.jpg')} />
      </Box>
    </Box>
  )
}
