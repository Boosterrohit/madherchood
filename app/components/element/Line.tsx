import ResizableBox from '@/lib/ResizableBox';
import useDemoConfig from "@/lib/useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

export default function Line() {
  const { data, randomizeData } = useDemoConfig({
    series: 10,
    dataType: "time",
  });

  const primaryAxis = React.useMemo<AxisOptions<(typeof data)[number]["data"][number]>>(
    () => ({
      getValue: (datum) => datum.primary as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<AxisOptions<(typeof data)[number]["data"][number]>[]>(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <div>
      <button onClick={randomizeData}>Randomize Data</button>
      <ResizableBox>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </ResizableBox>
    </div>
  );
}