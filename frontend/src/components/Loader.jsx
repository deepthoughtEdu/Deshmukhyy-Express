import React from "react";
import {Circles} from "react-loader-spinner";

export default function Loading() {
  return (
    <div style={{height: 'calc(100vh - 100px)', width: 'calc(100vw - 100px)'}} className="d-flex justify-content-center align-items-center">
      <Circles
        color="#0029FF"
        height={80}
        width={80}
        timeout={70000}
        visible={true}
      />
    </div>
  );
}
