import { Button } from "@chakra-ui/react"
import { login } from "../services/login"

export const Send = () => {
    return (
        <Button onClick={login} colorScheme='teal' size='sm' w='100%' mt='5px' _hover={{ background: 'blue' }} _focus={{ background: 'yellow', color: 'black' }}>
            Button
        </Button>
    )
}
