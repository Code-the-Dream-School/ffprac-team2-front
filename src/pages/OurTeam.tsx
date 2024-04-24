import React, { useState } from 'react';
import {
    Box,
    Button,
    Text,
    Flex,
    Avatar,
    Heading,
    Card,
    CardHeader,
    CardBody,
    SimpleGrid,
} from '@chakra-ui/react';
import { Member } from '../models/interfaces';
import FanyImage from '../assets/members/Fany.png';
import IrynaImage from '../assets/members/Iryna.jpeg';
import OxanaImage from '../assets/members/Oxana.jpeg';
import AlenaImage from '../assets/members/Alena.jpg';
import NataliaImage from '../assets/members/Natalia_.png';
import CTDLogo from '../assets/members/CTD.png';

const MemberCard: React.FC<Member> = ({ name, role, image, description }) => {
    const MAX_LENGTH = 250;
    const [isExpanded, setIsExpanded] = useState(false);
    const itCanOverflowButton = description && description.length > MAX_LENGTH;

    const getDescription = () => {
        if (!description) {
            return '';
        } else if (name === 'Team Mentors') {
            return description.split(',').map((name, index) => (
                <Text key={index} fontWeight="bold" margin={'2'}>
                    {name.trim()}
                </Text>
            ));
        } else if (isExpanded || description.length <= MAX_LENGTH) {
            return description;
        } else {
            return `${description.slice(0, MAX_LENGTH)}...`;
        }
    };

    return (
        <Card
            maxW="300px"
            borderRadius="10px"
            fontSize={{ base: '11px', lg: '12px' }}
            margin="1rem"
            minH={'300px'}
        >
            <CardHeader>
                <Flex gap={2} alignItems="center">
                    <Avatar name={name} size={{ base: '2xl', md: '2xl' }} src={image} />
                    <Box>
                        <Heading size="sm" fontWeight="bold">
                            {name}
                        </Heading>
                        <Text fontWeight="bold">{role}</Text>
                    </Box>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>{getDescription()}</Text>
                {itCanOverflowButton && (
                    <Button
                        onClick={() => setIsExpanded(!isExpanded)}
                        variant="link"
                        color="blue.500"
                        fontSize={{ base: '10px', lg: '11px' }}
                    >
                        {isExpanded ? 'See less' : 'See more...'}
                    </Button>
                )}
            </CardBody>
        </Card>
    );
};

const OurTeamPage: React.FC = () => {
    const team: Member[] = [
        {
            name: 'Oxana',
            role: 'Design, Full Stack Developer',
            image: OxanaImage,
            description:
                "As a Full Stack Developer with a photographer's heart and a passion for design, I've navigated projects from concept to execution. I seamlessly integrate functionality with visual charm, crafting a captivating user experience from start to finish. But beyond my technical skills, I thrive in collaborative environments. Engaged in numerous full stack projects, I enjoy taking on various responsibilities, relishing the opportunity to learn new stacks, and collaborating with diverse teams. This experience strengthens my knowledge and confidence along my journey to Software Development. In my free time, I cherish moments with my family, enjoy hiking, read books to discuss in my book club, and train for triathlons to maintain good physical shape and mental state.",
        },
        {
            name: 'Iryna',
            role: 'Full Stack Developer',
            image: IrynaImage,
            description:
                "As a seasoned Full Stack Developer, I've contributed to the development of a cutting-edge website currently in its developmental stages. My expertise spans a wide array of technologies, from front-end frameworks like React and Angular to back-end tools like NodeJS and Express. With a strong foundation in JavaScript and TypeScript, I seamlessly integrate functionality and interactivity into every aspect of the website. But my passion doesn't stop at development. I'm deeply engrossed in the realms of website testing and automation. In my spare time, you'll find me exploring new technologies, honing my skills.",
        },

        {
            name: 'Fany',
            role: 'Front End Developer',
            image: FanyImage,
            description:
                "I'm a passionate front end developer. I love crafting user interfaces while writing efficient and understandable code through constant learning and improvement. When I'm not coding, I enjoy hiking with my family and friends, which helps me clear my head and approach problems with a fresh perspective.",
        },
        {
            name: 'Natalia',
            role: 'Front End Developer',
            image: NataliaImage,
            description:
                "I'm a front-end developer with a background in DevOps, deeply passionate about creating user-centric designs. My daily routine revolves around coding, hiking, and continuously exploring new technologies. It's a simple rhythm: code, eat, hike, sleep, repeat!",
        },
        {
            name: 'Alena',
            role: 'Front End Developer',
            image: AlenaImage,
            description:
                "I'm a dynamic professional with a background in Quality Assurance, Data Analytics, and Customer Support. Now, I'm enthusiastically diving into web development with a clear goal in mind - to become a skilled Front-end Developer and UI Engineer. I'm passionate about creating seamless user experiences that make a positive impact. Beyond coding, I find joy in various hobbies. Exploring hiking trails and enjoying nature's beauty keeps me grounded and inspired. Additionally, I enjoy practicing Pilates to stay focused and maintain mental clarity while tackling coding challenges.",
        },

        {
            name: 'Team Mentors',
            role: '',
            image: CTDLogo,
            description: 'Rebekah Callari-Kaczmarczyk, Dan Polityka, Katsiaryna Lashcheuskaya',
        },
    ];

    return (
        <Box fontSize={{ base: '11px', lg: '12px' }} marginBottom="2rem" marginTop="2rem">
            <Heading as="h1" fontSize={{ base: 'lg', lg: '2xl' }} textAlign={'center'}>
                Our Team
            </Heading>
            <SimpleGrid columns={[1, 2, 2, 3]} spacing="6">
                {team.map((member, index) => (
                    <MemberCard
                        key={index}
                        name={member.name}
                        role={member.role}
                        image={member.image}
                        description={member.description}
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default OurTeamPage;
