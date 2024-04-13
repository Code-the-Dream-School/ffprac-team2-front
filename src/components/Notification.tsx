import React, { Dispatch, SetStateAction } from 'react';
import { useToast } from '@chakra-ui/react';

type NotificationProps = {
    message: string;
    status: 'info' | 'warning' | 'success' | 'error' | 'loading' | undefined;
    setToastMessage: Dispatch<SetStateAction<string>>;
};

const Notification: React.FC<NotificationProps> = ({ message, status, setToastMessage }) => {
    const toast = useToast();
    const showToast = () => {
        toast({
            title: message,
            status: status,
            duration: 3000,
            isClosable: true,
            onCloseComplete: () => setToastMessage(''),
        });
    };
    React.useEffect(() => {
        showToast();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return null;
};

export default Notification;
