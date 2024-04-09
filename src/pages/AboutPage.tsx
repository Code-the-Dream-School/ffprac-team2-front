import React from 'react';
import { Box, Heading, Text, UnorderedList, OrderedList, ListItem } from '@chakra-ui/react';


const AboutPage: React.FC = () => {

    return (
        <Box fontSize="16px" marginLeft="20px">
            <Heading as="h1" textAlign={"center"} fontSize={"26px"}>Welcome to GetYourTutor!</Heading>
            <Text marginTop="30px">
                GetYourTutor is your go-to online platform designed to simplify the process of connecting parents with expert tutors for online
                lessons tailored to their children's needs. <br />
                At GetYourTutor, our mission is to elevate educational outcomes and deliver an outstanding learning journey for students.
                They can enhance their skills and knowledge within a supportive online environment accessible with an internet connection.
                Moreover, tutors embrace a remarkable opportunity to share their expertise, guiding students toward academic success, all while maintaining flexibility in their schedules from any part of the USA.
            </Text>
            <Heading as="h3" marginTop="20px" fontSize={"24px"}>Discover Your Perfect Tutor:</Heading>
            <Text marginTop="20px">
            Our platform empowers parents and students to choose their ideal tutor and schedule sessions with ease.
            While finding the perfect tutor can often be overwhelming, GetYourTutor simplifies the process. 
            With our intuitive interface, you can effortlessly explore available tutors, view each tutor's profile to examine their subjects, qualifications, and availability, and easily arrange a session.

            </Text>
            <Heading as="h3" fontSize={"24px"} marginTop="20px">Why Choose GetYourTutor?</Heading>
            <Text marginTop="20px">
                GetYourTutor isn't your average online tutoring platform! We offer:
            </Text>
            <OrderedList marginTop="20px">
                <ListItem  marginLeft={"20px"}>
                    <strong>One-on-One Tutoring:</strong> Our tutors provide individualized attention, ensuring your child receives the support they need to succeed.
                </ListItem>
                <ListItem  marginLeft={"20px"}>
                    <strong>Certified Teachers:</strong> Our tutors are certified, classroom-experienced teachers with expertise in all academic subjects.
                </ListItem>
                <ListItem  marginLeft={"20px"}>
                    <strong>All Grade Levels:</strong> From Pre-K through High School, we offer tutoring services for students at every grade level.
                </ListItem>
                <ListItem  marginLeft={"20px"}>
                    <strong>All Academic Subjects:</strong> Whether it's Math, Science, English, or any other subject, we've got you covered.
                </ListItem>
            </OrderedList>
            <Heading as="h3" fontSize={"24px"} marginTop="20px">How to Get Started for Tutors: </Heading>
            <UnorderedList marginTop="20px">
                <ListItem  marginLeft={"20px"}>Sign Up: </ListItem>
                <ListItem  marginLeft={"20px"}></ListItem>
                <ListItem marginLeft={"20px"}></ListItem>
            </UnorderedList>

            <Heading as="h3" fontSize={"24px"} marginTop="20px">How to Get Started for Parents: </Heading>
            <UnorderedList marginTop="20px">
                <ListItem  marginLeft={"20px"}>Sign Up: Create an account and provide some basic information about your child's learning needs.</ListItem>
                <ListItem  marginLeft={"20px"}>Find a Tutor: Browse through our database of certified tutors and choose the one that best fits your child's requirements.</ListItem>
                <ListItem  marginLeft={"20px"}>Contact the Tutor: Send an email to the tutor to schedule a tutoring session at a time that works for you and your child.</ListItem>
                <ListItem  marginLeft={"20px"}>Start Learning: Join the session and watch your child's confidence and skills grow with personalized tutoring from GetYourTutor!</ListItem>
            </UnorderedList>
            <Text marginTop="20px">
                <strong>Embark on your journey to academic success with GetYourTutor!</strong>
                <br />
                Whether you're a parent seeking the perfect tutor for your child or a tutor looking to share your expertise, our platform has everything you need to succeed.
            </Text>
        </Box>
    );
};

export default AboutPage;
