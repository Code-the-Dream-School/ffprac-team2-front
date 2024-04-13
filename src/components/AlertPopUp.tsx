import { DeleteIcon } from '@chakra-ui/icons';
import {
    Button,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    useDisclosure,
    AlertDialog,
} from '@chakra-ui/react';
import React from 'react';

interface AlertPopUpProps {
    onClick: () => void;
    bgColor: string;
    title: string;
}

const AlertPopUp: React.FC<AlertPopUpProps> = ({ onClick, bgColor, title }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef<HTMLButtonElement>(null);
    return (
        <>
            <Button backgroundColor={bgColor} onClick={onOpen}>
                <DeleteIcon />
            </Button>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isCentered
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            {title}
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="red" onClick={onClick} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default AlertPopUp;
