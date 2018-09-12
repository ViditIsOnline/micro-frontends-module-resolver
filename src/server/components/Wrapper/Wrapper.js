// @flow
/* eslint-disable react/no-danger */
import React from "react";

type PropsT = {
  children: *,
  state: string,
  id: string
};

export default class Wrapper extends React.Component<PropsT> {
  static defaultProps = {
    css: [],
    scripts: [],
    state: "{}"
  };

  render() {
    const { children, state, id } = this.props;
    return (
      <div>
        <div id={id} dangerouslySetInnerHTML={{ __html: children }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = 
                window.__PRELOADED_STATE__ ? Object.assign(window.__PRELOADED_STATE__,{${id}: ${state}}) : {${id}: ${state}}`
          }}
        />
      </div>
    );
  }
}