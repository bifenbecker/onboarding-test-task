"use client";
import { useState } from "react";

import { Button, Box, Stack } from "@mui/material";

import { GuideStepper } from "../../../widgets/GuideStepper";

export default function OnboardingPage() {
  const [isShowStepper, setShowStepper] = useState<boolean>(false);

  const getStart = () => setShowStepper(true);

  return (
    <Stack height="100vh" justifyItems="center" justifyContent="center">
      {isShowStepper ? (
        <GuideStepper />
      ) : (
        <Box display="flex" justifyContent="center">
          <Button variant="outlined" size="large" onClick={getStart}>
            Get started
          </Button>
        </Box>
      )}
    </Stack>
  );
}
