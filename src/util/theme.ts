import { extendTheme } from '@chakra-ui/react';
import { MultiSelectTheme } from 'chakra-multiselect';

// example theme
export const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: '#E7E0D6',
                color: '#000000',
                fontSize: '11px',
            },
        },
    },
    //styles for Dashboard
    colors: {
        customWhite: '#FFFFFF',
    },
    dashboardButtons: {
        buttonYellow: {
            bg: '#F4CD76',
            _hover: {
                bg: 'grey.400',
            },
        },
        buttonTeal: {
            bg: '#59D3C8',
            _hover: {
                bg: 'grey.400',
            },
        },
        height: '30px',
        fontSize: '11px',
        fontWeight: '700',
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'normal',
            },
            sizes: {
                landing: {
                    h: '75px',
                    minW: '350px',
                    fontSize: '24px',
                },
            },
            variants: {
                // landing button variants.
                buttonYellow: {
                    bg: '#F4CD76',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                    _hover: {
                        bg: 'grey.400',
                    },
                },
                buttonTeal: {
                    bg: '#59D3C8',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                    _hover: {
                        bg: 'grey.400',
                    },
                },
            },
        },
        MultiSelect: {
            ...MultiSelectTheme,
            baseStyle: (props: Record<string, number>) => {
                const baseStyle = MultiSelectTheme.baseStyle(props);
                baseStyle.input.bgColor = theme.colors.customWhite;
                baseStyle.control.minW = 500;
                baseStyle.button.colorscheme = 'black.400';
                baseStyle.list.boxShadow = '2xl';
                baseStyle.selectedItem.colorscheme = 'green';
                baseStyle.input.outline = 1;
                baseStyle.selectedItem.colorscheme = 'pink.400';
                baseStyle.list.color = 'black.100';
                return {
                    ...baseStyle,
                };
            },
        },
    },
});

// Default braikpoints for informational purposes
// const breakpoints = {
//     base: "0em", // 0px
//     sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
//     md: "48em", // ~768px
//     lg: "62em", // ~992px
//     xl: "80em", // ~1280px
//     "2xl": "96em", // ~1536px
//   };
