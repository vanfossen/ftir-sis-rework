import CustomAnchor from "../components/nav-new/CustomAnchor.jsx";
import CustomLink from "../components/nav-new/CustomLink.jsx";

export const navItems = [
  {
    label: "File",
    submenu: [
      {
        url: <CustomAnchor url="https://www.example.com/" label="Open" />,
      },
      {
        url: <CustomAnchor url="https://www.example.com/" label="Save" />,
      },
    ],
  },
  {
    label: "Window",
    submenu: [
      {
        url: <CustomLink url="setup" label="Experimental Setup" />,
      },
      {
        url: <CustomLink url="instrument" label="Instrument" />,
      },
      {
        url: <CustomLink url="spectra" label="Spectra" />,
      },
      {
        url: <CustomAnchor url="https://www.example.com/" label="Find Peaks" />,
      },
    ],
  },
  {
    label: "Measure",
    submenu: [
      {
        url: (
          <CustomAnchor
            url="https://www.example.com/"
            label="Collect Background"
          />
        ),
      },
      {
        url: (
          <CustomAnchor url="https://www.example.com/" label="Collect Sample" />
        ),
      },
      {
        url: (
          <CustomAnchor url="https://www.example.com/" label="Cancel Scan" />
        ),
      },
    ],
  },
  {
    label: "Help",
    submenu: [
      {
        dialog: true,
        label: "Tutorial",
        url: "tutorialDialog",
      },
      {
        dialog: true,
        label: "Welcome Dialog",
        url: "welcomeDialog",
      },
    ],
  },
];
