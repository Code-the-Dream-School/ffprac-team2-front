import React, { useState } from 'react';
import { Box, Button, Text, Flex, Avatar, Heading, Card, CardHeader, CardBody } from '@chakra-ui/react';
import { Member } from '../models/interfaces';


const MemberCard: React.FC<Member> = ({ name, role, image, description, }) => {
    const MAX_LENGTH = 250;
    const [isExpanded, setIsExpanded] = useState(false);
    const itCanOverflowButton = description && description.length > MAX_LENGTH;

    const getDescription = () => {
        if (!description) {
            return "";
        } else if (name === "Team Mentors") {
            return description.split(',').map((name, index) => (
                <Text key={index} fontWeight="bold">{name.trim()}</Text>
            ));
        } else if (isExpanded || description.length <= MAX_LENGTH) {
            return description;
        } else {
            return `${description.slice(0, MAX_LENGTH)}...`;
        }
    };
    return (
        <Card maxW='md' overflowY='scroll' fontSize={{ base: '16px', lg: '18px' }} margin="1rem" minH={'300px'}>
            <CardHeader>
                <Flex gap={2} alignItems='center'>
                    <Avatar name={name} size={{ base: 'md', md: 'xl' }} src={image} />
                    <Box>
                        <Heading size='sm' fontWeight="bold" >{name}</Heading>
                        <Text fontWeight="bold">{role}</Text>
                    </Box>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>{getDescription()}</Text>
                {itCanOverflowButton && (
                    <Button onClick={() => setIsExpanded(!isExpanded)} variant="link" color="blue.500">
                        {isExpanded ? 'See less' : 'See more...'}
                    </Button>
                )}
            </CardBody>
        </Card>

    );
};

export default MemberCard;