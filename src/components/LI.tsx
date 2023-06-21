import { Typography, TypographyProps } from "@mui/material"

type TypographyVariant = TypographyProps["variant"]
type SX = TypographyProps["sx"]

interface LIProps extends React.PropsWithChildren {
    variant?: TypographyVariant
    className?: string
    sx?: SX
    
}

const LI: React.FC<LIProps> = ({ children, variant, className, sx }) => (
    <Typography 
        variant={variant || "h6"} 
        component="div" 
        className={className || ""}
        sx={{textAlign: "left", ...sx}}
    >
            {children}
    </Typography>
)

export default LI