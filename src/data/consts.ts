// CHANGE Default title
export const SITE_TITLE =
  "Flight Training in Valparaiso, Indiana | Eagle Aircraft Flight Academy";

// CHANGE default meta description
export const SITE_DESCRIPTION =
  "Eagle Aircraft Flight Academy is a Cessna Pilot Center at Porter County Regional Airport in Valparaiso, Indiana, offering FAA Part 141 and Part 61 flight training from Private Pilot through ATP. Train with experienced instructors using Cessna and Tecnam aircraft, Elite simulators, and proven accelerated programs for local, VA, Liberty University, and international students.";

// SEO tip -> keyword + city 1
export const KEYWORDS = [
  "Eagle Aircraft Flight Academy",
  "Eagle Aircraft Valparaiso",
  "flight school Valparaiso Indiana",
  "flight training Porter County Regional Airport",
  "flight school KVPZ",
  "Cessna Pilot Center Indiana",
  "Part 141 flight school Indiana",
  "private pilot training Valparaiso",
  "instrument rating training Valparaiso",
  "commercial pilot license Indiana",
  "CFI training Indiana",
  "ATP flight training Indiana",
  "Chicagoland flight school",
  "Northwest Indiana pilot training",
  "Liberty University flight training affiliate",
  "Valparaiso University flight training partner",
  "VA approved flight training",
  "SEVIS approved flight school",
  "international student pilot program Indiana",
  "Elite simulator flight training",
].join(", ");

// Primary keywords by search intent
export const PRIMARY_KEYWORDS = {
  informational:
    "how to become a pilot, private pilot license requirements, instrument rating training, commercial pilot license requirements, certified flight instructor training, ATP flight training options",
  navigational:
    "Eagle Aircraft Flight Academy, Eagle Aircraft Valparaiso, Eagle Aircraft KVPZ, Porter County Regional Airport flight school, Eagle Aircraft contact",
  commercial:
    "best flight school in Northwest Indiana, Cessna Pilot Center Valparaiso, Part 141 flight training Indiana, Liberty University flight training Valparaiso, VA approved pilot school Indiana",
  transactional:
    "enroll in private pilot training, sign up for instrument rating, book a discovery flight in Valparaiso, schedule ATP ground course, apply for CFI training at Eagle Aircraft",
};

// Secondary keywords by program type
export const PROGRAM_KEYWORDS = {
  multiEngine:
    "multi engine rating, multi engine training, twin engine training, multi engine time building, simulator prep for multi engine",
  instrumentRating:
    "instrument rating training, IFR certification, instrument flight training, Elite PI-1000 simulator training, CFII led instrument course",
  privatePilot:
    "private pilot license, PPL training, learn to fly in Valparaiso, discovery flight experience, beginner pilot training, zero flight hours program",
  commercialPilot:
    "commercial pilot license, CPL training, professional pilot certification, time building in Cessna and Tecnam aircraft, career pilot training Indiana",
  flightInstructor:
    "CFI certification, flight instructor training, CFII and MEI training, build flight hours as a CFI, instructor employment at Eagle Aircraft",
  careerPrograms:
    "professional pilot program, Liberty University aviation degree partner, Valparaiso University flight training, VA and GI Bill flight training, international M-1 visa pilot training",
};

// Location-focused keywords
export const LOCATION_KEYWORDS = {
  primary:
    "Porter County Regional Airport flight training, Valparaiso Indiana flight school, KVPZ flight training",
  secondary:
    "Chicagoland pilot training, Northwest Indiana aviation school, flight school near Chicago, Liberty University flight training affiliate in Valparaiso",
};

export const OG_IMAGE = "/eagleair-og-image.png";

export const FAVICON = "/favicon.png";

export const LOGO = "/logo_eagle_aircraft_round_color.png";

export const LOGO_ASSETS = "/src/assets/logo_eagle_aircraft_horizontal_color.png";
export const LOGO_ASSETS_2 = "/src/assets/logo_eagle_aircraft_round_color.png";

// CHANGE client business info
export const COMPANY_NAME = "Eagle Aircraft Flight Academy";
export const COMPANY_NAME_CAPS = "EAGLE AIRCRAFT FLIGHT ACADEMY";
export const COMPANY_NICKNAME = "Eagle Aircraft";
export const PHONE_NUMBER = "(219) 464-0132";
export const PHONE_NUMBER_HEADER = "(219) 464-0132";
export const ADDRESS_LINE_1 = "4001 Murvihill Road";
export const ADDRESS_LINE_2 = "Valparaiso, IN 46383";
export const AIRPORT = "Porter County Regional Airport";
export const AIRPORT_CODE = "KVPZ";
export const ADDRESS = "4001 Murvihill Road, Valparaiso, IN 46383";
export const ADDRESS_CITY = "Valparaiso";
export const ADDRESS_STATE = "Indiana";
export const ADDRESS_ZIP = "46383";
export const GMAPS =
  "https://maps.app.goo.gl/k8sGUpJ1DJApg1HJA";
export const EMAIL_ADDRESS = "eaglevpz@gmail.com";
export const FACEBOOK_URL = "https://www.facebook.com/EagleAircraft";
export const INSTAGRAM_URL = "https://www.instagram.com/eaglevpz/";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/eagle-aircraft-inc";
export const X_URL = "";
export const YOUTUBE_URL = "";
export const YELP_URL = "https://www.yelp.com/biz/eagle-aircraft-valparaiso";
export const GITHUB_URL = "";

export const LOCATIONS = [
  {
    title: "Porter County Regional Airport",
    address: "4001 Murvihill Road",
    city: "Valparaiso",
    state: "IN",
    zip: "46383",
    gMaps:
      "https://www.google.com/maps?q=4001+Murvihill+Rd,+Valparaiso,+IN+46383",
    phone: "(219) 464-0132",
    forwardPhone: "(219) 464-0132",
    fullAddress: "4001 Murvihill Road, Valparaiso, IN 46383",
    fullAddressLineBreak: "4001 Murvihill Road\nValparaiso, IN 46383",
  },
];

export const COURSES = [
  "Discovery Flights",
  "Private Pilot Certificate (PPL)",
  "Instrument Rating (IR)",
  "Commercial Pilot Certificate (CPL)",
  "Certified Flight Instructor (CFI)",
  "Airline Transport Pilot (ATP)",
  "Flight Review and Currency Training",
];

export const OTHER_COURSES = [
  "Liberty University Aviation Degree partnership",
  "Purdue Global and Valparaiso University degree pathways",
  "VA benefits and GI Bill flight training support",
  "International student M-1 visa and SEVIS support",
  "DOD SkillBridge and BreakTurn career placement",
];

export const FLEET = [
  {
    title: "Cessna 150",
    path: "",
  },
  {
    title: "Cessna 172 Skyhawk",
    path: "",
  },
  {
    title: "Tecnam P2010",
    path: "",
  },
  {
    title: "Elite PI-1000 Simulator",
    path: "",
  },
];

export const VIDEOS: {
  upperHeading: string;
  title: string;
  description: string;
  link: string;
  image: {
    src: string;
    alt: string;
    classes: string;
  };
}[] = [];
