import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Link} from 'react-router-component';

export default function Navigation(props) {
    const style = {
      backgroundColor: "#c8e6c9",
    };

    return (
      <Toolbar style={style}>
        <ToolbarGroup>
          <ToolbarTitle text="Dinn" />
            <FontIcon className="muidocs-icon-custom-sort" />
            <ToolbarSeparator />
            <Link className="link" href="/guests">
              <RaisedButton label="Guests" />
            </Link>
            <Link className="link" href="/restaurants">
              <RaisedButton label="Sign In" primary={true} />
            </Link>
            <Link className="link" href="register">
              <RaisedButton label="Register" secondary={true} />
            </Link>
        </ToolbarGroup>
      </Toolbar>
    );
}
