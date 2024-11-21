"use client";
import { useState } from "react";
import { redirect } from "next/navigation";

import { Button, Box, Stack, Typography } from "@mui/material";

import { GuideStepper } from "../../../widgets/GuideStepper";

export default function OnboardingPage() {
  const [isShowStepper, setShowStepper] = useState<boolean>(false);

  const getStart = () => setShowStepper(true);

  const handleFinish = () => redirect("/statistic");

  return (
    <Stack height="100vh" justifyItems="center" justifyContent="center" gap={8}>
      <Box textAlign="center">
        <Typography variant="h2" fontWeight={700}>
          Test task
        </Typography>
      </Box>
      {isShowStepper ? (
        <GuideStepper finishCallback={handleFinish} />
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
