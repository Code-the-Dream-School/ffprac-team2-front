/* eslint-disable indent */
import { AddIcon } from '@chakra-ui/icons';
import { WrapItem, Avatar, AvatarBadge, Button, Input } from '@chakra-ui/react';
import React from 'react';
import avatar from '../assets/avatar.png';

type UploadImageProps = {
    selectedImage: Blob | null;
    setSelectedImage: React.Dispatch<React.SetStateAction<Blob | File | null>>;
    profileImage: string | undefined;
    disabled?: boolean;
};

const UploadImage: React.FC<UploadImageProps> = ({
    selectedImage,
    setSelectedImage,
    profileImage,
    disabled,
}) => {
    return (
        <WrapItem alignItems="center" justifyContent="center">
            <Avatar
                sx={{
                    width: '200px',
                    height: '200px',
                }}
                src={
                    selectedImage
                        ? URL.createObjectURL(selectedImage)
                        : profileImage
                          ? profileImage
                          : avatar
                }
                name="avatar"
            >
                <AvatarBadge
                    sx={{
                        border: 'none',
                        backgroundColor: 'black',
                        width: '50px',
                        height: '50px',
                        marginBottom: 3,
                        cursor: 'pointer',
                    }}
                    boxSize="0.9em"
                >
                    <Button
                        onClick={() => {
                            document.getElementById('fileInput')?.click();
                        }}
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            padding: 0,
                        }}
                    >
                        <AddIcon
                            sx={{
                                width: '70%',
                                height: '70%',
                                color: '#E7E0D6',
                            }}
                        />
                        <Input
                            id="fileInput"
                            type="file"
                            name="image"
                            accept="image/*"
                            hidden
                            disabled={disabled}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                const selectedFile = event.target.files?.[0];
                                if (!selectedFile) {
                                    return;
                                }
                                if (!selectedFile.type.match('image/*')) {
                                    console.error('Invalid file type selected');
                                    return;
                                }

                                const reader = new FileReader();

                                reader.onload = (event: ProgressEvent<FileReader>) => {
                                    if (event.target?.result) {
                                        const blob = new Blob(
                                            [event.target.result as ArrayBuffer],
                                            {
                                                type: selectedFile.type,
                                            }
                                        );
                                        setSelectedImage(blob);
                                    }
                                };
                                reader.readAsArrayBuffer(selectedFile);
                                setSelectedImage(selectedFile);
                            }}
                        />
                    </Button>
                </AvatarBadge>
            </Avatar>
        </WrapItem>
    );
};

export default UploadImage;
