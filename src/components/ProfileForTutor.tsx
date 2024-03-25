import React from 'react';
import {
    SimpleGrid,
    Input,
    Avatar,
    WrapItem,
    VStack,
    Spacer,
    Textarea,
    AvatarBadge,
} from '@chakra-ui/react';
import avatar from '../assets/avatar.jpg';
import { AddIcon } from '@chakra-ui/icons';

interface ProfileForTutorProps {
    name: string;
    email: string;
    education: string;
    about: string;
    experience: string;
}

const ProfileForTutor: React.FC<ProfileForTutorProps> = (props) => {

    return (
        <SimpleGrid minChildWidth="250px" spacing="40px">
            <SimpleGrid minChildWidth="150px" spacing="20px">
                <WrapItem>
                    <Avatar p="1px" size="2xl" border="0.5px" src={avatar}>
                        <AvatarBadge
                            sx={{
                                // paddingLeft: 8,
                                marginBottom: 2,
                            }}
                            boxSize="0.9em"
                        >
                            <AddIcon
                                sx={{
                                    color: '#090759',
                                    marginLeft: 1,
                                    marginTop: 1,
                                    cursor: 'pointer',
                                }}
                            />
                        </AvatarBadge>
                    </Avatar>
                </WrapItem>
                <VStack spacing={3}>
                    <Input
                        isDisabled
                        boxShadow="dark-lg"
                        p="5px"
                        placeholder={props.name}
                        fontWeight={400}
                        size="lg"
                        textColor="Black.600"
                    />
                    <Input
                        textColor="black.600"
                        isDisabled
                        boxShadow="dark-lg"
                        p="15px"
                        placeholder={props.email}
                        size="lg"
                    />
                    <Spacer />
                    <Input color="black.500" placeholder="Education" size="lg" bgColor="white" />
                </VStack>
            </SimpleGrid>
            <VStack>
                <Textarea
                    textColor="black"
                    placeholder="About"
                    h="200px"
                    size="lg"
                    bgColor="white"
                />
                <Spacer />
                <Input textColor="black.400" placeholder="Experience" size="lg" bgColor="white" />
            </VStack>
        </SimpleGrid>
    );
};

export default ProfileForTutor;
