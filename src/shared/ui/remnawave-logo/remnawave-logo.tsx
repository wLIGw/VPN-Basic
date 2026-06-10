import { Box, BoxProps } from '@mantine/core'

interface RemnawaveLogoProps extends BoxProps {
    size?: number | string
}

export function RemnawaveLogo({ size = 40, style, ...props }: RemnawaveLogoProps) {
    return (
        <Box
            component="img"
            src="/icons/logo.svg"
            style={{
                width: size,
                height: size,
                objectFit: 'contain',
                ...style
            }}
            {...props}
        />
    )
}