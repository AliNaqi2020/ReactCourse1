import React from "react";

export default function Alert(Props) {
  return (
    <>
      {Props.alert && <div className={`alert alert-${Props.alert.type} alert-dismissible fade show`}role="alert">
         {Props.alert.type}: {Props.alert.msg}
      
      </div>}
    </>
  );
}
