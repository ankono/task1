import {createMuiTheme} from '@material-ui/core/styles';

const colors = {
	green: '#6D9B12',
	blue: '#4285F4',
	grey: '#E5E5E5',
	white: '#fff'
};

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
	palette: {
		primary: {
			main: colors.green,
		},
		secondary: {
			main: colors.grey,
		}
	},
	typography: {
		fontFamily: 'Roboto',
		h1: {
			fontSize: '36px',
			lineHeight: '42px',
			fontWeight: 900
		},
		h2: {
			fontSize: '32px',
			lineHeight: '37px',
			fontWeight: 700
		},
		h3: {
			fontSize: '28px',
			lineHeight: '33px',
			fontWeight: 500
		},
		h4: {
			fontSize: '24px',
			lineHeight: '28px',
			fontWeight: 500
		},
		h5: {
			fontSize: '18px',
			lineHeight: '21px',
			fontWeight: 500
		},
		h6: {
			fontSize: '16px',
			lineHeight: '19px',
			fontWeight: 'bold'
		},
		body1: {
			fontSize: '14px',
			lineHeight: '16px',
			fontWeight: 'bold'
		},
		body2: {
			fontSize: '14px',
			lineHeight: '16px',
			fontWeight: 300
		}
	},
	overrides: {
		MuiButton: {
			root: {
				backgroundColor: colors.blue,
				background: colors.blue,
				color: colors.white,
				width: '133px',
				height: '50px',
				borderRadius: '6px',
				marginLeft: defaultTheme.spacing(1.875),
				marginRight: defaultTheme.spacing(1.875),
				fontFamily: 'Roboto',
				fontWeight: 900,
				fontSize: '16px',
				lineHeight: '19px',
				textTransform: 'none'
			},
			sizeLarge: {
				width: '270px',
				fontSize: '16px',
				lineHeight: '19px',
			},
			sizeSmall: {
				width: '120px',
				height: '40px',
				fontSize: '16px',
				lineHeight: '19px',
			},
		},
		MuiTextField: {
			root: {
				width: '550px',
				height: '50px',
				background: colors.grey,
				borderRadius: '6px'
			}
		}
	}
});


export default theme;