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
            },
        },
    },

    components: {
        MultiSelect: {
            ...MultiSelectTheme,
            baseStyle: (props: Record<string, number>) => {
                const baseStyle = MultiSelectTheme.baseStyle(props);
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
