"use-client";

import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import * as React from "react";

function FooterSection() {
  return (
    <footer>
      <div>
        <Switch />
        <Label />
      </div>
    </footer>
  )
}

export { FooterSection };