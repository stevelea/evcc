export function isForecastSlot(obj?: TimeseriesEntry | ForecastSlot): obj is ForecastSlot {
  return (obj as ForecastSlot).start !== undefined;
}

// timestamps are unix milliseconds, expanded from the wire format by
// expandForecast in utils/forecast
export interface TimeseriesEntry {
  val: number;
  ts: number;
}

export interface ForecastSlot {
  start: number;
  end: number;
  value: number;
}

// wire format: [start, end, value] and [ts, val], timestamps in unix seconds
export type WireForecastSlot = [number, number, number];
export type WireTimeseriesEntry = [number, number];

export interface EnergyByDay {
  energy: number;
  complete: boolean;
}

export interface SolarDetails {
  scale?: number;
  today?: EnergyByDay;
  tomorrow?: EnergyByDay;
  dayAfterTomorrow?: EnergyByDay;
  timeseries?: TimeseriesEntry[];
}
