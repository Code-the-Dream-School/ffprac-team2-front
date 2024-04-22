import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import MemberCard from '../components/MemberCard';
import { Member } from '../models/interfaces';

const OurTeamPage: React.FC = () => {
    const team: Member[] = [
        {
            name: 'Iryna',
            role: 'Full Stack Developer',
            image: '',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam maecenas. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Massa tincidunt nunc pulvinar sapien et. Scelerisque purus semper eget duis at tellus at. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Bibendum ut tristique et egestas. Volutpat est velit egestas dui id. Cursus risus at ultrices mi tempus imperdiet. Vulputate mi sit amet mauris. Volutpat consequat mauris nunc congue. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Arcu bibendum at varius vel pharetra vel turpis. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Id neque aliquam vestibulum morbi. Purus in mollis nunc sed id semper.',
        },

        {
            name: 'Oxana',
            role: 'Design, Full Stack Developer',
            image: '',
            description:
                'Lorem ipsum dolor sit amet,consectetur adipiscing elit, Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunnim ad minim veniam, quis nost quip ex ea commodo consequat',
        },
        {
            name: 'Alena',
            role: 'Front End Developer',
            image: '',
            description: "I'm a dynamic professional with a background in Quality Assurance, Data Analytics, and Customer Support. Now, I'm enthusiastically diving into web development with a clear goal in mind - to become a skilled Front-end Developer and UI Engineer. I'm passionate about creating seamless user experiences that make a positive impact. Beyond coding, I find joy in various hobbies. Exploring hiking trails and enjoying nature's beauty keeps me grounded and inspired. Additionally, I enjoy practicing Pilates to stay focused and maintain mental clarity while tackling coding challenges."       
                
        },
        {
            name: 'Natalia',
            role: 'Front End Developer',
            image: '',
            description:
                'Lorem ipsum dolor sit amet,consectetur adipiscing elit, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunnim ad minim veniam, quis nost quip ex ea commodo consequat',
        },
        {
            name: 'Fany',
            role: 'Front End Developer',
            image: '',
            description:
                "I’m a passionate front end developer. I love crafting user interfaces while writing efficient and understandable code through constant learning and improvement. When I'm not coding, I enjoy hiking with my family and friends, which helps me clear my head and approach problems with a fresh perspective."
                
        },
        {
            name: 'Team Mentors',
            role: '',
            image: '',
            description: 'Rebekah Callari-Kaczmarczyk, Dan Polityka, Katsiaryna Lashcheuskaya',
        },
    ];

    return (
        <Box fontSize={{ base: '11px', lg: '12px' }} marginBottom="2rem">
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
