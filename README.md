# Hector DAO Addon

## Installation

Download this package on your machine.

Go into Chrome (or any Chromium browser) and go into extensions.

Toggle developer mode on.

Click "Load unpacked"

Choose the folder downloaded onto your machine

## Details

This is a browser extension compatible with Chrome / Brave / Chromium for Hector DAO. This brings additional features to the Hector DAO application.

**This plugin takes a few additional second to load, this is because we nee to wait for all the data on the page to be added.**

**This plugin does NOT update with a UI refresh, you will need to manually reload the page if you want updated numbers**

## Features

### Daily ROI

For now, the only available feature is a daily ROI calculation added to the bond pages, allowing you to see what is the most profitable play between a 1,1 or 4,4 bond.

The calculations are done as so:

---

#### Rebase ROI %

Retrieve the rebase ROI via the 4,4 bond rebase price

Divide by 4 (since they are a 4 day bond)

Divide by 3 (since a rebase is every 8 hours)

---

#### 1,1 Bond daily ROI

Retrieve the current bond ROI

Divide by 5 (since they are a 5 day bond)

Add Rebase ROI

---

#### 4,4 Bond daily ROI

Retrieve the current bond ROI

Divide by 4 (since they are a 4 day bond)

---

## Known Issues

- 4,4 bond button is mostly hidden. It is still clickable though.

## Disclaimer

Use this plugin at your own risk.

These calculations may be off, make sure to always double check the values.

**I am not responsible for any losses while using this plugin.**