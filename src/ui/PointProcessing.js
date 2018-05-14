import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from 'material-ui/Slider';
const R = require('ramda');

const style = theme => ({
    button: {
        margin: theme.spacing.unit
    }
});

const BasicButton = R.pipe(
    text => ({ classes, imageData, update }) =>
        <Button className={classes.button} color="primary"
            onClick={_ => update(imageData)}>
            {text}
        </Button>,
    withStyles(style)
);

const Binarize = ({ classes, imageData, update }) =>
    <div>
        <Typography variant="title">
            Binarize
        </Typography>
        <Slider min={0} max={255} step={1} value={77}
            onChange={(event, value) => update(value, imageData)} />
    </div>

const LogTransform = ({ classes, imageData, update }) =>
    <div>
        <Typography variant="title">
            Log Transform
        </Typography>
        <Slider min={1} max={10} step={1}
            onChange={(event, value) => update(value, imageData)} />
    </div>;

const PowerTransform = ({ classes, imageData, update }) =>
    <div>
        <Typography variant="title">
            Power Transform
        </Typography>
        <Typography variant="subheading">
            Ɣ
        </Typography>
        <Slider min={0.04} max={10}
            onChange={(_, value) => update(value * 2, imageData)} />
    </div>;

export default {
    BasicButton,
    Binarize: withStyles(style)(Binarize),
    LogTransform: withStyles(style)(LogTransform),
    PowerTransform: withStyles(style)(PowerTransform)
};