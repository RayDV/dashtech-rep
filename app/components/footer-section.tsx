"use-client";

import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import * as React from "react";

function FooterSection() {
  return (
    <footer>
      <div>
        <Switch />
        <Label>TESTING</Label>
        <Button className="bg-slate-700"/>
      </div>
    </footer>
  )
}

export { FooterSection };