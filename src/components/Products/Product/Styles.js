import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    box: {
        margin: "20% 0",
    },
    root: {
        // maxWidth: 345, original width style
        maxWidth: '100%',
    },
    media: {
        width: '100%',
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));