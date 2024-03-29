import {
    Box,
    Flex,
    FormErrorMessage,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { object, string } from 'yup';

import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';

const validationSchema = object().shape({
    query: string()
        .required('Please enter a subject')
        .max(20, 'Subject must be less than 20 characters'),
});
interface SearchFormProps {
    onSearch: (query: string) => void;
}

interface FormFieldProps {
    field: {
        name: string;
        value: string;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    };
    form: {
        touched: {
            [key: string]: boolean;
        };
        errors: {
            [key: string]: string;
        };
        validateForm: () => Promise<void>;
    };
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
    return (
        <Formik
            initialValues={{ query: '' }}
            onSubmit={(values) => {
                onSearch(values.query);
            }}
            validationSchema={validationSchema}
        >
            {({ validateForm }) => (
                <Form>
                    <Flex justifyContent="flex-end" w="350px" mt="20px">
                        <Field name="query">
                            {({ field, form }: FormFieldProps) => (
                                <>
                                    <InputGroup>
                                        <Input
                                            {...field}
                                            variant="outline"
                                            bg="white"
                                            placeholder="Enter your subject"
                                            maxLength={25}
                                            _placeholder={{ color: 'gray.400' }}
                                            _focus={{ borderColor: 'teal.400' }}
                                        />
                                        <InputRightElement>
                                            <IconButton
                                                aria-label="Search"
                                                icon={<SearchIcon />}
                                                onClick={async () => {
                                                    await validateForm();
                                                }}
                                                colorScheme="teal"
                                            />
                                        </InputRightElement>
                                    </InputGroup>
                                    <Box ml="2">
                                        <FormErrorMessage>
                                            {form.errors.query && form.touched.query && (
                                                <Box color="red.500" fontSize="sm">
                                                    {form.errors.query}
                                                </Box>
                                            )}
                                        </FormErrorMessage>
                                    </Box>
                                </>
                            )}
                        </Field>
                    </Flex>
                </Form>
            )}
        </Formik>
    );
};

export default SearchForm;
