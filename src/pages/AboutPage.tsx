import React from 'react';
import { Box, Heading, Text, UnorderedList, OrderedList, ListItem } from '@chakra-ui/react';

const AboutPage: React.FC = () => {
    return (
        <Box
            fontSize={{ base: '16px', lg: '18px' }}
            marginLeft={{ base: '1rem', lg: '10rem' }}
            marginRight={{ base: '1rem', lg: '10rem' }}
            marginBottom="2rem"
        >
            <Heading as="h1" fontSize={{ base: '24px', lg: '32px' }}>
                Welcome to GetYourTutor!
            </Heading>
            <Text marginTop={{ base: '1.5rem', lg: '3.5rem' }}>
                GetYourTutor is your go-to online platform designed to simplify the process of
                connecting parents with expert tutors for online lessons tailored to their
                children's needs. <br />
                At GetYourTutor, our mission is to elevate educational outcomes and to deliver an
                outstanding learning journey for students. They can enhance their skills and
                knowledge within a supportive online environment accessible with an internet
                connection. Moreover, tutors embrace a remarkable opportunity to share their
                expertise, guiding students toward academic success, all while maintaining
                flexibility in their schedules from any part of the US.
            </Text>
            <Heading
                as="h3"
                marginTop={{ base: '1.25rem', lg: '2.5rem' }}
                fontSize={{ base: '18px', lg: '20px' }}
            >
                Discover Your Perfect Tutor:
            </Heading>
            <Text marginTop={{ base: '0.5rem', lg: '1rem' }}>
                Our platform empowers parents and students to choose their ideal tutor and schedule
                sessions with ease. While finding the perfect tutor can often be overwhelming,
                GetYourTutor simplifies the process. With our intuitive interface, you can
                effortlessly explore available tutors, view each tutor's profile to examine their
                subjects, qualifications, and availability, and easily arrange a session.
            </Text>
            <Heading
                as="h3"
                fontSize={{ base: '18px', lg: '20px' }}
                marginTop={{ base: '1.25rem', lg: '2.5rem' }}
            >
                Why Choose GetYourTutor?
            </Heading>
            <Text marginTop={{ base: '0.5rem', lg: '1rem' }}>
                GetYourTutor isn't your average online tutoring platform! We offer:
            </Text>
            <OrderedList marginTop={{ base: '0.25rem', lg: '0.5rem' }}>
                <ListItem>
                    <strong>One-on-One Tutoring:</strong> Our tutors provide individualized
                    attention, ensuring your child receives the support they need to succeed.
                </ListItem>
                <ListItem>
                    <strong>Certified Teachers:</strong> Our tutors are certified,
                    classroom-experienced teachers with expertise in all academic subjects.
                </ListItem>
                <ListItem>
                    <strong>All Grade Levels:</strong> From Pre-K through High School, we offer
                    tutoring services for students at every grade level.
                </ListItem>
                <ListItem>
                    <strong>All Academic Subjects:</strong> Whether it's Math, Science, English, or
                    any other subject, we've got you covered.
                </ListItem>
            </OrderedList>
            <Heading
                as="h3"
                fontSize={{ base: '18px', lg: '20px' }}
                marginTop={{ base: '1.25rem', lg: '2.5rem' }}
            >
                How to Get Started for Tutors:{' '}
            </Heading>
            <UnorderedList marginTop={{ base: '0.5rem', lg: '1rem' }}>
                <ListItem>
                    Sign Up: Register as a tutor on our platform by providing your email.
                </ListItem>
                <ListItem>
                    Complete Your Profile: Fill out your profile with information about your
                    qualifications, expertise, and availability.
                </ListItem>
                <ListItem>
                    That's it: Get connected with parents regarding their children's educational
                    needs. Your profile will appear on our search dashboard, making it easy for
                    parents to discover and connect with you.
                </ListItem>
            </UnorderedList>

            <Heading
                as="h3"
                fontSize={{ base: '18px', lg: '20px' }}
                marginTop={{ base: '1.25rem', lg: '2.5rem' }}
            >
                How to Get Started for Parents:{' '}
            </Heading>
            <UnorderedList marginTop={{ base: '0.5rem', lg: '1rem' }}>
                <ListItem>
                    Sign Up: Create an account and provide some basic information about your child's
                    learning needs.
                </ListItem>
                <ListItem>
                    Find a Tutor: Browse through our database of certified tutors and choose the one
                    that best fits your child's requirements.
                </ListItem>
                <ListItem>
                    Contact the Tutor: Send an email to the tutor to schedule a tutoring session at
                    a time that works for you and your child.
                </ListItem>
                <ListItem>
                    Start Learning: Join the session and watch your child's confidence and skills
                    grow with personalized tutoring from GetYourTutor!
                </ListItem>
            </UnorderedList>
            <Text marginTop={{ base: '1.25rem', lg: '2.5rem' }}>
                <strong>Embark on your journey to academic success with GetYourTutor!</strong>
                <br />
                Whether you're a parent seeking the perfect tutor for your child or a tutor looking
                to share your expertise, our platform has everything you need to succeed.
            </Text>
        </Box>
    );
};

export default AboutPage;
