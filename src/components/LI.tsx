import { Typography, TypographyProps } from "@mui/material"

type TypographyVariant = TypographyProps["variant"]
type SX = TypographyProps["sx"]

interface LIProps extends React.PropsWithChildren {
    variant?: TypographyVariant
    className?: string
    
}

const LI: React.FC<LIProps> = ({ children, variant, className }) => (
    <Typography variant={variant || "h6"} component="div" className={className || ""}>{children}</Typography>
)

export default LI