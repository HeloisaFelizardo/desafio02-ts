import { Button } from "@chakra-ui/react"

interface IDButton {
    onClick: () => void
}
export const DButton = ({ onClick }: IDButton) => {
    return (
        <Button onClick={onClick} colorScheme='teal' size='sm' w='100%' mt='5px' _hover={{ background: 'blue' }} _focus={{ background: 'yellow', color: 'black' }}>
            Button
        </Button>
    )
}
