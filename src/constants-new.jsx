import { Link } from "react-router-dom";

export const navItems = [
  {
    label: "File",
    submenu: [
      {
        url: (
          <a
            href="https://www.example.com/"
            target="_blank"
            className="m-1 block rounded p-2 text-start text-white hover:bg-[#374151] hover:text-orange-500"
          >
            Open
          </a>
        ),
      },
      {
        url: (
          <a
            href="https://www.example.com/"
            target="_blank"
            className="m-1 block rounded p-2 text-start text-white hover:bg-[#374151] hover:text-orange-500"
          >
            Save
          </a>
        ),
      },
    ],
  },
  {
    label: "Window",
    submenu: [
      {
        url: (
          <Link
            to={"setup"}
            className="m-1 block rounded p-2 text-start text-white hover:bg-[#374151] hover:text-orange-500"
          >
            Experimental Setup
          </Link>
        ),
      },
      {
        url: (
          <Link
            to={"instrument"}
            className="m-1 block rounded p-2 text-start text-white hover:bg-[#374151] hover:text-orange-500"
          >
            Instrument
          </Link>
        ),
      },
      {
        url: (
          <Link
            to={"spectra"}
            className="m-1 block rounded p-2 text-start text-white hover:bg-[#374151] hover:text-orange-500"
          >
            Spectra
          </Link>
        ),
      },
      {
        url: (
          <a
            href="https://www.example.com/"
            target="_blank"
            className="m-1 block rounded p-2 text-start text-white hover:bg-[#374151] hover:text-orange-500"
          >
            Find Peaks
          </a>
        ),
      },
    ],
  },
  {
    label: "Measure",
    submenu: [
      {
        url: (
          <a
            href="https://www.example.com/"
            target="_blank"
            className="m-1 block rounded p-2 text-start text-white hover:bg-[#374151] hover:text-orange-500"
          >
            Collect Background
          </a>
        ),
      },
      {
        url: (
          <a
            href="https://www.example.com/"
            target="_blank"
            className="m-1 block rounded p-2 text-start text-white hover:bg-[#374151] hover:text-orange-500"
          >
            Collect Sample
          </a>
        ),
      },
      {
        url: (
          <a
            href="https://www.example.com/"
            target="_blank"
            className="m-1 block rounded p-2 text-start text-white hover:bg-[#374151] hover:text-orange-500"
          >
            Cancel Scan
          </a>
        ),
      },
    ],
  },
  {
    label: "Help",
    submenu: [
      {
        url: (
          <a
            href="https://www.example.com/"
            target="_blank"
            className="m-1 block rounded p-2 text-start text-white hover:bg-[#374151] hover:text-orange-500"
          >
            Tutorial
          </a>
        ),
      },
      {
        url: (
          <a
            href="https://www.example.com/"
            target="_blank"
            className="m-1 block rounded p-2 text-start text-white hover:bg-[#374151] hover:text-orange-500"
          >
            Landing Page
          </a>
        ),
      },
    ],
  },
];
