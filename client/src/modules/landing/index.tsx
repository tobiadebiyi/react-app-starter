import * as React from "react";
import { Paper, Typography, createStyles, WithStyles, withStyles } from "@material-ui/core";

const styles = createStyles({
    root: {
        paddingTop: "33px",
    }
});

const Landing: React.SFC<WithStyles<typeof styles>> = (props) => {
    return (
        <div>
            <Paper className={props.classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                    Happy coding.......
                </Typography>
                <Typography component="p">
                    Welcome to my routed landing page.
                </Typography>
            </Paper>
        </div>
    );
};

export default withStyles(styles)(Landing);