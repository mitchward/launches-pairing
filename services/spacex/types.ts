export interface Query {
  docs: Launch[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: any;
  nextPage: number;
}

export interface Launch {
  fairings?: Fairings;
  links: Links;
  static_fire_date_utc?: string;
  static_fire_date_unix?: number;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: Failure[];
  details?: string;
  crew: any[];
  ships: string[];
  capsules: string[];
  payloads: Payload[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Cores[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: any;
  id: string;
}

export interface Fairings {
  reused?: boolean;
  recovery_attempt?: boolean;
  recovered?: boolean;
  ships: any[];
}

export interface Links {
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit?: string;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

export interface Patch {
  small: string;
  large: string;
}

export interface Reddit {
  campaign: any;
  launch?: string;
  media: any;
  recovery: any;
}

export interface Flickr {
  small: any[];
  original: any[];
}

export interface Failure {
  time: number;
  altitude?: number;
  reason: string;
}

export interface Payload {
  dragon: Dragon;
  name: string;
  type: string;
  reused: boolean;
  launch: string;
  customers: string[];
  norad_ids: number[];
  nationalities: string[];
  manufacturers: string[];
  mass_kg?: number;
  mass_lbs?: number;
  orbit: string;
  reference_system: string;
  regime: string;
  longitude: any;
  semi_major_axis_km?: number;
  eccentricity?: number;
  periapsis_km?: number;
  apoapsis_km?: number;
  inclination_deg?: number;
  period_min?: number;
  lifespan_years?: number;
  epoch?: string;
  mean_motion?: number;
  raan?: number;
  arg_of_pericenter?: number;
  mean_anomaly?: number;
  id: string;
}

export interface Dragon {
  capsule?: string;
  mass_returned_kg?: number;
  mass_returned_lbs?: number;
  flight_time_sec?: number;
  manifest?: string;
  water_landing?: boolean;
  land_landing?: boolean;
}

export interface Cores {
  core: Core;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: any;
  landing_type: any;
  landpad: any;
}

export interface Core {
  block?: number;
  reuse_count: number;
  rtls_attempts: number;
  rtls_landings: number;
  asds_attempts: number;
  asds_landings: number;
  last_update?: string;
  launches: string[];
  serial: string;
  status: string;
  id: string;
}
