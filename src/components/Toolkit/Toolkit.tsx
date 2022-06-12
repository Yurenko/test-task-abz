import { styled } from '@mui/material/styles'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { FC } from 'react'

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: theme.palette.common.black,
	},
}))

const CustomizedTooltips: FC<{ title: string }> = ({ title }) => {
	return (
		<div>
			<BootstrapTooltip title={title}>
				<div>{title}</div>
			</BootstrapTooltip>
		</div>
	)
}

export default CustomizedTooltips
